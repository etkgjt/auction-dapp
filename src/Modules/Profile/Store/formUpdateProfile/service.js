import apiMethod from "../../../../utility/ApiMethodSuperSchoolMemory"
import API from "../../configs/api"
export const formUpdateProfileSuperSchoolMemoryCallMethod = ({
  payload,
  codeLanguage
}) => {
  return apiMethod.put(codeLanguage + API.PUT_UPDATE_PROFILE, {
    userId: parseInt(payload.userId),
    userName: payload.user_name,
    fullName: payload.parent_fullname,

    childFullName1: payload.children_fullname,
    child1_SchoolName: payload.school_name,
    child1_ClassId: payload.class * 1,

    cityId: payload.city * 1,
    districtId: payload.district * 1,
    address: payload.street_address,

    email: payload.email,
    phone: `${payload.phone_number}`.replace("+84", "0"),
    avartar: payload?.avartar,
    gender: payload?.gender
  })
}
export const getAccountProfile = ({ payload, codeLanguage }) => {
  return apiMethod.get(codeLanguage + API.GET_ACCOUNT_PROFILE, {
    params: payload
  })
}
export const getGeneralInfoMenu = ({ payload, codeLanguage }) => {
  return apiMethod.get(codeLanguage + API.GET_GENERAL_INFO_MENU, payload)
}
