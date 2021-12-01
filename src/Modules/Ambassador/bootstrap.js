import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"
// import initReducer from './Store/initReducer';

export default {
  name: "Ambassador",
  dir: "Ambassador",
  pathRoot: "",
  routes: [
    {
      url: "dashboard",
      component: "Page/index",
      meta: {
        authRoute: true
      },
      props: {
        title: "Thống kê",
        titleI18n: "Ambassador:title",
        headerStyle: "fill"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any"
  // redux: initReducer,
}
