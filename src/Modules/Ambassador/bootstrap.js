import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"
// import initReducer from './Store/initReducer';

export default {
  name: "Ambassador",
  dir: "Ambassador",
  pathRoot: "",
  routes: [
    {
      url: "inviter",
      component: "Page/index",
      meta: {
        authRoute: true
      },
      props: {
        title: "Đại sứ",
        titleI18n: "Ambassador:title",
        headerStyle: "fill"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any"
  // redux: initReducer,
}
