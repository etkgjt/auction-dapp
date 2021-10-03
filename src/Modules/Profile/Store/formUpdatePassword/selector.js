import { createSelector } from "reselect"
export const reducer = (state) => state.formUpdatePasswordSuperSchoolMemory

export const formSubmitLoadingSelector = createSelector(
  reducer,
  (data) => data?.formUpdatePasswordSuperSchoolMemoryLoading || false
)

export const formSubmitSuccessSelector = createSelector(
  reducer,
  (data) => data?.formUpdatePasswordSuperSchoolMemorySuccess || false
)

export const formSubmitErrorSelector = createSelector(
  reducer,
  (data) => data?.formUpdatePasswordSuperSchoolMemoryError || false
)

export const formSubmitDataResponseSelector = createSelector(
  reducer,
  (data) => data?.formUpdatePasswordSuperSchoolMemoryDataResponse || null
)
