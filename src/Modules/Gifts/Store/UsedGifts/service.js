import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = ({ codeLanguage, payload }) => {
  return apiMethod.get(codeLanguage + API.GET_LIST_GIFTS, {
    params: {
      ...payload,
      status: 1
    }
  })
}
