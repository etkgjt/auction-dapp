import API from "../../configs/api"
import apiMethod from "@utility/ApiMethodSuperSchoolMemory"

export const formVerifyAccountCallMethod = ({ payload }) => {
  return apiMethod.post(API.POST_AUTH_VERIFY_PASSWORD, {
    phone: payload.phone,
    otp: payload.otp,
    userName: payload.userName
  })
}
