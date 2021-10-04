import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = ({ codeLanguage, payload }) => {
  return apiMethod.get(codeLanguage + API.GET_HOME_VOUCHER_LIST, {
    params: {
      ...payload,
      type: "ThuongDaiSu"
    }
  })
}
export const postRequestGiftCard = (payload) => {
  return apiMethod.post(API.POST_REQUEST_GIFT, payload)
}
