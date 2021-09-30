import API from "../../configs/api"
import apiMethodSTNHD from "@utility/ApiMethodSuperSchoolMemory"
import apiMethod from "../../../../utility/ApiMethod"

export const signIn = ({ codeLanguage, payload }) => {
  return apiMethodSTNHD.post(codeLanguage + API.POST_AUTH_SIGN_IN, payload)
}
export const sendOtp = ({ codeLanguage, payload }) => {
  return apiMethodSTNHD.post(codeLanguage + API.POST_SEND_OTP, {
    phoneNumber: payload
  })
}
export const syncUserInfo = (payload) => {
  return apiMethod.post(API.POST_SYNC_USER_INFO, payload)
}
