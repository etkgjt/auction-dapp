import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"

import initReducer from "./Store/initReducer"
import initSagas from "./Store/initSagas"

export default {
  name: "Detail",
  dir: "Detail",
  pathRoot: "",
  routes: [
    {
      url: "detail/:id",
      component: "Page/index",
      meta: {
        authRoute: true
      },
      props: {
        title: "Quà tặng",
        titleI18n: "Gifts:title",
        headerStyle: "fill"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any",
  sagas: initSagas,
  redux: initReducer
}
