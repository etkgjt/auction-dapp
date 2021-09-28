import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"
// import initReducer from './Store/initReducer';

export default {
  name: "Achievement",
  dir: "Achievement",
  pathRoot: "",
  routes: [
    {
      url: "achievement",
      component: "Page/index",
      meta: {
        authRoute: true
      },
      props: {
        title: "Thành tựu",
        titleI18n: "Achievement:title",
        headerStyle: "fill"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any"
  // redux: initReducer,
}
