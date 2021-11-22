import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = ({ codeLanguage, payload }) => {
  return apiMethod.get(codeLanguage + API.GET_ALL_GIFTS, {
    params: {
      ...payload
    }
  })
}
export const postRequestGift = (payload) => {
  return apiMethod.post(API.POST_REQUEST_GIFT, payload)
}
