import { takeLatest, put, call } from "redux-saga/effects"
import { generateListSagas } from "@utility/StoreMethod"

import { actions, types } from "./reducer"
import * as service from "./service"
import { RETCODE_SUCCESS } from "../../../../configs/contants"
const sagaListFunction = generateListSagas(actions, service)
function* getCountUnreadNoti({ payload }) {
  try {
    const res = yield call(service.getCountUnreadNotiApi, { ...payload })
    if (res.data.retCode === RETCODE_SUCCESS) {
      yield put(actions.setCountUnreadNoti(res.data?.data))
    } else {
      yield put(actions.setCountUnreadNoti({}))
    }
  } catch (err) {
    yield put(actions.setCountUnreadNoti({}))
  }
}

export default function* () {
  yield takeLatest(types.GET_COUNT_UNREAD_NOTI, getCountUnreadNoti)
  yield takeLatest(types.GET_LIST, sagaListFunction.getList)
  yield takeLatest(types.GET_LIST_LOAD_MORE, sagaListFunction.getLoadMoreList)
}
