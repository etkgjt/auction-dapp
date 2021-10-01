import { put, call, takeEvery, select } from "redux-saga/effects"
import * as Actions from "./constants"
import * as ActionsAuth from "../auth/actions"
import { signIn, syncUserInfo } from "./service"
import { RETCODE_SUCCESS, SUCCESS } from "@configs/contants"
import { getCodeLanguage } from "@store/common/selectors"
import apiMethodSTNHD from "@utility/ApiMethodSuperSchoolMemory"
import apiMethod from "@utility/ApiMethod"
import { actions as ActionsUser } from "../../../../store/user/reducer"

/**
 * Fetch data saga
 * @returns {IterableIterator<*>}
 */
function* fetchSignInSaga({ payload }) {
  try {
    const codeLanguage = yield select(getCodeLanguage)
    const res = yield call(signIn, {
      payload,
      codeLanguage
    })
    const { data } = res
    if (res.status === SUCCESS && data.retCode === RETCODE_SUCCESS) {
      apiMethodSTNHD.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.data.token}`
      const resSync = yield call(syncUserInfo, {
        ...data.data,
        IsActive: true
      })

      if (
        resSync.status === SUCCESS &&
        resSync.data.retCode === RETCODE_SUCCESS
      ) {
        yield put({ type: Actions.SIGN_IN_SUCCESS, payload: resSync.data.data })
        yield put(ActionsUser.getInfoUser({ id: resSync.data.data.id }))
        // yield put(ActionsUser.setInfoData(resSync.data.data))

        apiMethod.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${resSync.data.data.token}`
      }
    } else {
      yield put({ type: Actions.SIGN_IN_ERROR, error: data.retText })
    }
  } catch (e) {
    console.log("LOGIN ERR", e)
    yield put({ type: Actions.SIGN_IN_ERROR, error: e })
  }
}

function* fetchLogoutSaga() {
  yield put(ActionsAuth.authLogoutSuccess({}))
  yield put(ActionsUser.setInfoData({}))
}

export default function* authSaga() {
  yield takeEvery(Actions.CALL_SIGN_IN_METHOD, fetchSignInSaga)
  yield takeEvery(Actions.CALL_LOGOUT_METHOD, fetchLogoutSaga)
}
