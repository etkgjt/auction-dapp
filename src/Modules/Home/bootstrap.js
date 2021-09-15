import intlMessagesEN from './i18n/localization/en.json';
import intlMessagesVi from './i18n/localization/vi.json';
// import initReducer from './Store/initReducer';

export default {
  name: 'Home',
  dir: 'Home',
  pathRoot: '',
  routes: [
    {
      url: '',
      component: 'Page/index',
      layout: 'HorizontalLayout',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Siêu Trí Nhớ Học Đường | Tâm Trí Lực',
        titleI18n: 'AdvertPost:title',
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: true,
  // redux: initReducer,
};
