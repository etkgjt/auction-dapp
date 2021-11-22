import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import * as Actions from "./constants"
import { logout } from "../../helpers"

const initState = {
  accessToken: null,
  userData: {},
  loading: false,
  loginSuccess: false,
  error: ""
}

const AuthReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case Actions.CALL_SIGN_IN_METHOD:
      return { ...state, loading: true }
    case Actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        loginSuccess: true,
        userData: { ...action.payload }
      }
    case Actions.SIGN_IN_ERROR:
      const { error } = action
      return {
        ...state,
        loading: false,
        error,
        loginSuccess: false,
        accessToken: null,
        userData: {}
      }
    case Actions.CALL_LOGOUT_METHOD_SUCCESS:
      logout()
      return {
        ...state,
        loading: false,
        error: "",
        loginSuccess: false,
        accessToken: null,
        userData: {}
      }
    case Actions.SIGN_IN_RESET:
      return {
        ...state,
        loading: false,
        error: ""
      }
    default:
      return state
  }
}

const persistConfig = {
  key: "Auth",
  storage,
  blacklist: ["loading", "error"]
}

export default persistReducer(persistConfig, AuthReducer)
