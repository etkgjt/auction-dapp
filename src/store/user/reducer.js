import { createAction, handleActions } from "redux-actions"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

export const types = {
  GET_INFO_USER: "SuperSchoolMemory/user/GET_INFO_USER",
  SET_USER_DATA: "SuperSchoolMemory/user/SET_USER_DATA",
  SET_LOADING: "SuperSchoolMemory/user/SET_LOADING",
  SET_IS_SHOWED_NEWBIE: "SET_IS_SHOWED_NEWBIE",
  CLEAR_DATA: "common/user/CLEAR_DATA"
}

export const actions = {
  setLoading: createAction(types.SET_LOADING),
  setInfoData: createAction(types.SET_USER_DATA),
  getInfoUser: createAction(types.GET_INFO_USER),
  setIsShowPopuoNewBie: createAction(types.SET_IS_SHOWED_NEWBIE),
  clearData: createAction(types.CLEAR_DATA)
}

const defaultState = {
  userData: {},
  loading: false,
  error: "",
  isShowedPopupNewbie: false
}

const UserReducer = handleActions(
  {
    [types.SET_USER_DATA]: (state, { payload }) => {
      console.log("SET USER DATA", payload)
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
