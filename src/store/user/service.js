import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getInfoUser = ({ payload, codeLanguage }) => {
  return apiMethod.post(API.GET_USER_PROFILE, payload)
}
export const getInfoUserSTNHD = (payload) => {
  return apiMethod.get(API.GET_USER_PROFILE_STNHD, {
    params: payload
  })
}
