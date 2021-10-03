import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = ({ payload }) => {
  return apiMethod.get(API.GET_FRIEND_LIST + payload?.prefix, {
    params: {
      ...payload
    }
  })
}
