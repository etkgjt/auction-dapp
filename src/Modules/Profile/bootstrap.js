import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"

import initReducer from "./Store/initReducer"
import initSagas from "./Store/initSagas"

export default {
  name: "Profile",
  dir: "Profile",
  pathRoot: "",
  routes: [
    {
      url: "profile",
      component: "Page/index",
      meta: {
        authRoute: true
      },
      props: {
        title: "Thông Tin Cá Nhân",
        titleI18n: "Profile:title",
        headerStyle: "fill"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any",
  sagas: initSagas,
  redux: initReducer
}
