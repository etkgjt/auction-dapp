import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"
// import initReducer from './Store/initReducer';

export default {
  name: "Gifts",
  dir: "Gifts",
  pathRoot: "",
  routes: [
    {
      url: "gifts",
      component: "Page/index",
      meta: {
        authRoute: true
      },
      props: {
        title: "Thành tựu",
        titleI18n: "Gifts:title",
        headerStyle: "fill"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any"
  // redux: initReducer,
}
