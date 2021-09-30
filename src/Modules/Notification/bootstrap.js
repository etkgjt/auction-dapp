import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"
// import initReducer from './Store/initReducer';

export default {
  name: "Notification",
  dir: "Notification",
  pathRoot: "notifications",
  routes: [
    {
      url: "",
      component: "Page/index",
      meta: {
        authRoute: true
      },
      props: {
        title: "Thông báo",
        titleI18n: "Notification:title"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any"
  // redux: initReducer,
}
