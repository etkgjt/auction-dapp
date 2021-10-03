import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = ({ codeLanguage, payload }) => {
  return apiMethod.post(codeLanguage + API.GET_RANK_TABLE, {
    TopLimit: 10,
    TopType: 2
  })
}
