import API from "../../configs/api"
import apiMethod from "../../utility/ApiMethod"

export const getListCity = (payload) => {
  return apiMethod.get(API.GET_COMMON_GET_CITY, payload)
}

export const getListDistrict = (payload) => {
  return apiMethod.get(API.GET_COMMON_GET_DISTRICT, payload)
}

export const getListClass = (payload) => {
  return apiMethod.get(API.GET_LIST_CLASS, payload)
}
export const sendOtp = ({ codeLanguage, payload }) => {
  return apiMethod.post(codeLanguage + API.POST_SEND_OTP, payload)
}
