import { createSelector } from "reselect"
export const user = (state) => state.user

export const getUserData = createSelector(user, (data) => data?.userData)

export const getIsShowedPopupNewbie = createSelector(
  user,
  (data) => data?.isShowedPopupNewbie || false
)

// export
