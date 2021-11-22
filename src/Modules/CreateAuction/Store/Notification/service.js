import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = ({ codeLanguage, payload }) => {
  return apiMethod.get(codeLanguage + API.GET_LIST_NOTIFICATIONS, {
    params: {
      ...payload
    }
  })
}

export const getNotificaitonDetails = (id) => {
  return apiMethod.get(API.GET_NOTIFICATION_DETAIL + `/${id}`)
}
export const getCountUnreadNotiApi = (payload) => {
  return apiMethod.get(API.GET_COUNT_NOTIFICATION, {
    params: {
      ...payload
    }
  })
}
