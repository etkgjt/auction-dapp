import allGiftsSagas from "./AllGifts/sagas"
import myGiftSagas from "./MyGifts/sagas"
import usedGifts from "./UsedGifts/sagas"
import coinHistory from "./History/sagas"

export default [allGiftsSagas(), myGiftSagas(), usedGifts(), coinHistory()]
