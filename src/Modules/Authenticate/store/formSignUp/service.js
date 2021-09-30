import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"
import apiMethodSTNHD from "@utility/ApiMethodSuperSchoolMemory"

export const formSignUpCallMethod = ({ payload, codeLanguage }) => {
  return apiMethodSTNHD.post(codeLanguage + API.POST_REGISTER_DAISU, {
    avartar: payload.avartar,
    userName: payload.username,
    password: payload.password,
    referralCode: payload?.invite_code,
    fullName: payload.parent_fullname,
    childFullName1: payload.student_name,
    child1_SchoolName: payload.school_name,
    child1_ClassId: parseInt(payload.class_name),
    cityId: parseInt(payload.city),
    districtId: parseInt(payload.district),
    address: payload.address,
    email: payload.email,
    phone: payload.phone,
    otp: payload.otp
  })
}
export const checkInviteCode = (code) => {
  return apiMethod.get(API.CHECK_INVITE_CODE + `/${code}`)
}
export const syncUserInfo = (payload) => {
  return apiMethod.post(API.POST_SYNC_USER_INFO, payload)
}
