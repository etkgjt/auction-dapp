import { createAction, handleActions } from "redux-actions"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

export const types = {
  GET_INFO_USER: "SuperSchoolMemory/user/GET_INFO_USER",
  SET_USER_DATA: "SuperSchoolMemory/user/SET_USER_DATA",
  SET_LOADING: "SuperSchoolMemory/user/SET_LOADING",
  SET_IS_SHOWED_NEWBIE: "SET_IS_SHOWED_NEWBIE",
  CLEAR_DATA: "common/user/CLEAR_DATA",
  SET_IS_SHOWED_POPUP_DRAW_EVENT: "SET_IS_SHOWED_POPUP_DRAW_EVENT"
}

export const actions = {
  setLoading: createAction(types.SET_LOADING),
  setInfoData: createAction(types.SET_USER_DATA),
  getInfoUser: createAction(types.GET_INFO_USER),
  setIsShowPopuoNewBie: createAction(types.SET_IS_SHOWED_NEWBIE),
  clearData: createAction(types.CLEAR_DATA),
  setIsShowPopupDrawEvent: createAction(types.SET_IS_SHOWED_POPUP_DRAW_EVENT)
}

const defaultState = {
  userData: {},
  loading: false,
  error: "",
  isShowedPopupNewbie: false,
  iShowPopupDrawEvent: false
}

const UserReducer = handleActions(
  {
    [types.SET_USER_DATA]: (state, { payload }) => {
      return { ...state, userData: { ...payload } }
    },
    [types.SET_LOADING]: (state, { payload }) => {
      return { ...state, loading: payload }
    },
    [types.SET_IS_SHOWED_NEWBIE]: (state, { payload }) => {
      return { ...state, isShowedPopupNewbie: payload }
    },
    [types.CLEAR_DATA]: (state, { payload }) => {
      return { ...defaultState }
    },
    [types.SET_IS_SHOWED_POPUP_DRAW_EVENT]: (state, { payload }) => {
      return { ...state, iShowPopupDrawEvent: payload }
    }
  },
  defaultState
)

const persistConfig = {
  key: "user",
  storage,
  blacklist: ["loading", "error"]
}

export default persistReducer(persistConfig, UserReducer)
