import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"

import initReducer from "./Store/initReducer"
import initSagas from "./Store/initSagas"

export default {
  name: "Rules",
  dir: "Rules",
  pathRoot: "",
  routes: [
    {
      url: "rules",
      component: "Page/index",
      meta: {
        authRoute: true
      },
      props: {
        title: "Thể lệ chương trình",
        titleI18n: "Rules:title",
        headerStyle: "fill"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any",
  redux: initReducer,
  sagas: initSagas
}
