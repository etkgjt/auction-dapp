import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const formSignUpCallMethod = ({ payload, codeLanguage }) => {
  console.log("PAYLOAD", payload)
  return apiMethod.post(codeLanguage + API.POST_SIGN_UP_TRIAL_ACCOUNT, {
    avartar: payload.avartar,
    userName: payload.username,
    password: payload.password,
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
