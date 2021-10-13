import { createAction, handleActions } from "redux-actions"
import { generateListRedux } from "@utility/StoreMethod"
const name = "Notifications"
const reduxGenerate = generateListRedux(name)

export const types = {
  ...reduxGenerate.types,
  SET_COUNT_UNREAD_NOTI: "SET_COUNT_UNREAD_NOTI",
  GET_COUNT_UNREAD_NOTI: "GET_COUNT_UNREAD_NOTI",
  SET_COUNT_NOTI_LOADING: "SET_COUNT_NOTI_LOADING"
}

export const actions = {
  ...reduxGenerate.actions,
  getCountUnreadNoti: createAction(types.GET_COUNT_UNREAD_NOTI),
  setCountUnreadNoti: createAction(types.SET_COUNT_UNREAD_NOTI),
  setCountNotiLoading: createAction(types.SET_COUNT_NOTI_LOADING)
}

const defaultState = {
  ...reduxGenerate.defaultState,
  count: 0,
  countLoading: false
}

export default handleActions(
  {
    ...reduxGenerate.handleActions,
    [types.SET_COUNT_UNREAD_NOTI]: (state, { payload }) => {
      return {
        ...state,
        count: payload
      }
    },
    [types.SET_COUNT_NOTI_LOADING]: (state, { payload }) => {
      return {
        ...state,
        countLoading: payload
      }
    }
  },
  defaultState
)
