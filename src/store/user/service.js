import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getInfoUser = ({ payload, codeLanguage }) => {
  return apiMethod.post(API.GET_USER_PROFILE, payload)
}
