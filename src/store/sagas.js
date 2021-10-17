import userSagas from "./user/sagas"
import commonSagas from "./common/saga"
export default [userSagas(), commonSagas()]
