import { put, takeEvery, select } from "redux-saga/effects"
import * as Actions from "./constants"
import { formSubmitDataResponseSelector } from "../formVerifyAccount/selector"

function* getAccountList() {
  try {
    const list = yield select(formSubmitDataResponseSelector)
    yield put({ type: Actions.SET_ACCOUNT_LIST, payload: list })
  } catch (e) {
    console.log(e)
  }
}

export default function* accountListSaga() {
  yield takeEvery(Actions.GET_ACCOUNT_LIST, getAccountList)
}
