import { select, call, put, takeLatest } from "redux-saga/effects"
import { actions, types } from "./reducer"
import * as service from "./service"
import { RETCODE_SUCCESS, SUCCESS } from "@configs/contants"
import { getCodeLanguage } from "../common/selectors"

const getInfoUser = function* ({ payload }) {
  try {
    yield put(actions.setLoading(true))
    const res = yield call(service.getInfoUser, { payload })
    const { data } = res
    if (res.status === SUCCESS && data.retCode === RETCODE_SUCCESS) {
      yield put(actions.setInfoData(res.data.data))
    } else {
      yield put(actions.setInfoData({}))
    }
  } catch (e) {
    console.error(e)
    yield put(actions.setInfoData({}))
  } finally {
    yield put(actions.setLoading(false))
  }
}

export default function* () {
  yield takeLatest(types.GET_INFO_USER, getInfoUser)
}
