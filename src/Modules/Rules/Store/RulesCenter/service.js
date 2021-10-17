import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = () => {
  return apiMethod.get(API.GET_RULES_CENTER)
}
