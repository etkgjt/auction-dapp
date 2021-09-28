import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"
// import initReducer from './Store/initReducer';

export default {
  name: "Ranking",
  dir: "Ranking",
  pathRoot: "",
  routes: [
    {
      url: "rankings",
      component: "Page/index",
      meta: {
        authRoute: true
      },
      props: {
        title: "Bảng xếp hạng",
        titleI18n: "Ranking:title",
        headerStyle: "fill"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any"
  // redux: initReducer,
}
