import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = ({ codeLanguage, payload }) => {
  return apiMethod.get(codeLanguage + API.GET_LIST_GIFTS, {
    params: {
      ...payload
    }
  })
}
export const postUseCard = (payload) => {
  return apiMethod.post(API.POST_USE_CARD, payload)
}
export const postUseVoucher = (payload) => {
  return apiMethod.post(API.POST_USE_VOUCHER, payload)
}
