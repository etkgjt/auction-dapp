import { takeLatest, put, call, select } from "redux-saga/effects"
import { generateFormSubmitSagas } from "../../../../utility/StoreMethod"
import { actions, types } from "./reducer"
import { getCodeLanguage } from "../../../../store/common/selectors"
import * as service from "./service"
import { RETCODE_SUCCESS, SUCCESS } from "../../../../configs/contants"

const name = "formUpdateProfileSuperSchoolMemory"
const nameUp = name.toUpperCase()
const sagaListFunction = generateFormSubmitSagas(name, actions, service)
export const submitForm = sagaListFunction[name + "CallMethod"]

export default function* () {
  yield takeLatest(types[nameUp + "_METHOD"], submitForm)
}
