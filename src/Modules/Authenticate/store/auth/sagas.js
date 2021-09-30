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
      const body = {
        avartar: "https://sieutrinhohocduong.com/Content/images/icon-img.png",
        userId: 32590,
        userName: "daisu1",
        fullName: "Nguyen Van A",
        phone: "0936440435",
        email: "canlong@gmail.com",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJjYW5sb25nQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6Ik5ndXllbiBWYW4gQSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjMyNTkwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImRhaXN1MSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDkzNjQ0MDQzNSIsImV4cCI6MTY2NDQ2OTU4MywiaXNzIjoiaHR0cHM6Ly9zaWV1dHJpbmhvaG9jZHVvbmcuY29tIiwiYXVkIjoiaHR0cHM6Ly9zaWV1dHJpbmhvaG9jZHVvbmcuY29tIn0.cxTM1OELng-Vg9U4KwMFqtlx2aSeJPsr-JHwPgbwWr8",
        stnhdType: 1,
        stnhdTypeName: "Tài khoản trải nghiệm",
        isDaiSu: "DAISU",
        childFullName1: "Nguyen Van B",
        genderCode: "",
        genderName: "",
        dayofbirth: null,
        dateCreate: null,
        cityId: 1,
        cityName: "",
        districtId: 1,
        districtName: "",
        address: "asd",
        classId: 4
      }

      const resSync = yield call(syncUserInfo, {
        ...body
      })

      if (
        resSync.status === SUCCESS &&
        resSync.data.retCode === RETCODE_SUCCESS
      ) {
        yield put({ type: Actions.SIGN_IN_SUCCESS, payload: resSync.data.data })
        console.log("RES SYNC", resSync)
        yield put(ActionsUser.setInfoData(resSync.data.data))
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
