import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = () => {
  return apiMethod.get(API.GET_HOME_RANK, { TopLimit: 5, TopType: 3 })
}
