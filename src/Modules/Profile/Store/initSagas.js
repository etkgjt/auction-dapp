import updatePassSagas from "./formUpdatePassword/sagas"
import updateProfileSagas from "./formUpdateProfile/sagas"
import FriendListSagas from "./FriendList/sagas"
export default [updatePassSagas(), updateProfileSagas(), FriendListSagas()]
