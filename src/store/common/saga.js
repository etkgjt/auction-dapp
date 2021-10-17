import { select, call, put, takeLatest } from "redux-saga/effects"
import { GET_FACEBOOK_INFO } from "./constants"
import * as service from "./services"
import { RETCODE_SUCCESS, SUCCESS } from "@configs/contants"
import { setFacebookInfo } from "./actions"

const getInfoFacebook = function* ({ payload }) {
  try {
    const res = yield call(service.getFacebookInfo, { payload })
    const { data } = res
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      yield put(setFacebookInfo(res.data.data))
    } else {
      yield put(setFacebookInfo({}))
    }
  } catch (e) {
    yield put(setFacebookInfo({}))
  } finally {
    yield put(actions.setLoading(false))
  }
}

export default function* () {
  console.log("SAGAS")
  yield takeLatest(GET_FACEBOOK_INFO, getInfoFacebook)
}
