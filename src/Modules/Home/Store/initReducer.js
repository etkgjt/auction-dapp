import bannerReducer from "./BannerSlider/reducer";
import newsReducer from "./News/reducer";
import rulesReducer from "./Rules/reducer";
import rankReducer from "./Ranking/reducer";
import HomeVouchers from "./VoucherList/reducer";
import introReducer from "./Intro/reducer";
export default {
  HomeBannerSlider: bannerReducer,
  HomeNews: newsReducer,
  HomeRules: rulesReducer,
  HomeRank: rankReducer,
  HomeVouchers: HomeVouchers,
  HomeIntro: introReducer,
};
