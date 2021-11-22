import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"

import initReducer from "./Store/initReducer"
import initSagas from "./Store/initSagas"

export default {
  name: "CreateAuction",
  dir: "CreateAuction",
  pathRoot: "create",
  routes: [
    {
      url: "",
      component: "Page/index",
      meta: {
        authRoute: true
      },
      props: {
        title: "Thông báo",
        titleI18n: "CreateAuction:title"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any",
  sagas: initSagas,
  redux: initReducer
}
