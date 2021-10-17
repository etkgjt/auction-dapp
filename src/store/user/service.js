import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"
import apiMethodSTNHD from "../../utility/ApiMethodSuperSchoolMemory"

export const getInfoUser = ({ payload, codeLanguage }) => {
  return apiMethod.post(API.GET_USER_PROFILE, payload)
}
export const getInfoUserSTNHD = (payload) => {
  return apiMethodSTNHD.get(API.GET_USER_PROFILE_STNHD, {
    params: payload
  })
}
