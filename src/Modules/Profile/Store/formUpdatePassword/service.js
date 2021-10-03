import apiMethod from "../../../../utility/ApiMethodSuperSchoolMemory"
import API from "../../configs/api"
export const formUpdatePasswordSuperSchoolMemoryCallMethod = ({
  payload,
  codeLanguage
}) => {
  return apiMethod.put(codeLanguage + API.PUT_UPDATE_PASSWORD, {
    oldPassword: payload?.old_password,
    password: payload?.new_password,
    rePassword: payload?.confirm_new_password,
    userId: payload?.userId
  })
}
