import { select, call, put, takeLatest } from "redux-saga/effects"
import { actions, types } from "./reducer"
import * as service from "./service"
import { RETCODE_SUCCESS, SUCCESS } from "@configs/contants"
import { getCodeLanguage } from "../common/selectors"

const getInfoUser = function* ({ payload }) {
  try {
    console.log("IN GET INFO USER", payload)
    yield put(actions.setLoading(true))
    const res = yield call(service.getInfoUser, { payload })
    const { data } = res
    console.log("RES GET IN FO", res.data)
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      console.log("SUCCESS")
      yield put(actions.setInfoData(res.data.data))
      console.log("BEFORE SET LOCAL")
      localStorage.setItem("userData", res.data.data)
    } else {
      yield put(actions.setInfoData({}))
    }
  } catch (e) {
    console.error("GET INFO ERROR", e)
    yield put(actions.setInfoData({}))
  } finally {
    yield put(actions.setLoading(false))
  }
}

export default function* () {
  yield takeLatest(types.GET_INFO_USER, getInfoUser)
}
