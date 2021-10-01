import { createSelector } from "reselect"

export const accountList = (state) => state.accountListReducer

export const accountListSelector = createSelector(accountList, (data) => {
  console.log("DATA SELECTOR", data)
  return data?.list || []
})
