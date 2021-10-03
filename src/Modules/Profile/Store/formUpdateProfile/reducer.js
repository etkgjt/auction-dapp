import { handleActions, createAction } from "redux-actions"
import { generateFormSubmitRedux } from "../../../../utility/StoreMethod"
const name = "formUpdateProfileSuperSchoolMemory"
const reduxFormGenerate = generateFormSubmitRedux(name)

export const types = {
  ...reduxFormGenerate.types,
  PROFILE_GET_GENERAL_INFO_MENU_SUPERSCHOOL_MEMORY:
    "PROFILE_GET_GENERAL_INFO_MENU_SUPERSCHOOL_MEMORY",
  PROFILE_SET_GENERAL_INFO_MENU_SUPERSCHOOL_MEMORY:
    "PROFILE_SET_GENERAL_INFO_MENU_SUPERSCHOOL_MEMORY"
}

export const actions = {
  ...reduxFormGenerate.actions,

  setGeneralInfoMenu: createAction(
    types.PROFILE_SET_GENERAL_INFO_MENU_SUPERSCHOOL_MEMORY
  ),
  getGeneralInfoMenu: createAction(
    types.PROFILE_GET_GENERAL_INFO_MENU_SUPERSCHOOL_MEMORY
  )
}

const defaultState = {
  ...reduxFormGenerate.defaultState,
  generalInfoMenu: null
}

export default handleActions(
  {
    ...reduxFormGenerate.handleActions,
    [types.PROFILE_SET_GENERAL_INFO_MENU_SUPERSCHOOL_MEMORY]: (
      state,
      { payload }
    ) => {
      return { ...state, generalInfoMenu: payload }
    }
  },

  defaultState
)
