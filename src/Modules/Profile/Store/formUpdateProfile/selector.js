import { createSelector } from "reselect"
export const reducer = (state) => state.formUpdateProfileSuperSchoolMemory

export const formSubmitLoadingSelector = createSelector(
  reducer,
  (data) => data?.formUpdateProfileSuperSchoolMemoryLoading || false
)

export const formSubmitSuccessSelector = createSelector(
  reducer,
  (data) => data?.formUpdateProfileSuperSchoolMemorySuccess || false
)

export const formSubmitErrorSelector = createSelector(
  reducer,
  (data) => data?.formUpdateProfileSuperSchoolMemoryError || false
)

export const formSubmitDataResponseSelector = createSelector(
  reducer,
  (data) => data?.formUpdateProfileSuperSchoolMemoryDataResponse || null
)
export const getGeneralMenu = createSelector(
  reducer,
  (data) => data?.generalInfoMenu || null
)
