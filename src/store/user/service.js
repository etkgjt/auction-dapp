import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getInfoUser = ({ payload, codeLanguage }) => {
  return apiMethod.post(codeLanguage + API.GET_PROFILE, payload)
}

export const getGeneralInfoMenu = ({ payload, codeLanguage }) => {
  return apiMethod.get(codeLanguage + API.GET_GENERAL_INFO_MENU, payload)
}
