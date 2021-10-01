import { createAction, handleActions } from "redux-actions"
import { generateListRedux } from "@utility/StoreMethod"
const name = "Notifications"
const reduxGenerate = generateListRedux(name)

export const types = {
  ...reduxGenerate.types,
  SET_COUNT_UNREAD_NOTI: "SET_COUNT_UNREAD_NOTI",
  GET_COUNT_UNREAD_NOTI: "GET_COUNT_UNREAD_NOTI"
}

export const actions = {
  ...reduxGenerate.actions,
  getCountUnreadNoti: createAction(types.GET_COUNT_UNREAD_NOTI),
  setCountUnreadNoti: createAction(types.SET_COUNT_UNREAD_NOTI)
}

const defaultState = {
  ...reduxGenerate.defaultState,
  count: 0
}

export default handleActions(
  {
    ...reduxGenerate.handleActions,
    [types.SET_COUNT_UNREAD_NOTI]: (state, { payload }) => {
      console.log("COUNT PAYLOAD", payload)
      return {
        ...state,
        count: payload
      }
    }
  },
  defaultState
)
