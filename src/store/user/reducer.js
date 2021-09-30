import { createAction, handleActions } from "redux-actions"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

export const types = {
  GET_INFO_USER: "SuperSchoolMemory/user/GET_INFO_USER",
  SET_USER_DATA: "SuperSchoolMemory/user/SET_USER_DATA",
  SET_LOADING: "SuperSchoolMemory/user/SET_LOADING"
}

export const actions = {
  setLoading: createAction(types.SET_LOADING),
  setInfoData: createAction(types.SET_USER_DATA),
  getInfoUser: createAction(types.GET_INFO_USER)
}

const defaultState = {
  userData: {},
  loading: false,
  error: ""
}

const UserReducer = handleActions(
  {
    [types.SET_USER_DATA]: (state, { payload }) => {
      console.log("SET USER DATA", payload)
      return { ...state, userData: { ...payload } }
    },
    [types.SET_LOADING]: (state, { payload }) => {
      return { ...state, loading: payload }
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
