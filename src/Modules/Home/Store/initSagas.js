import bannerSliderSagas from "./BannerSlider/sagas"
import newsSagas from "./News/sagas"
import rulesSagas from "./Rules/sagas"
import rankSagas from "./Ranking/sagas"
import voucherListSagas from "./VoucherList/sagas"
export default [
  bannerSliderSagas(),
  newsSagas(),
  rulesSagas(),
  rankSagas(),
  voucherListSagas()
]
