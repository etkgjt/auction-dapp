import intlMessagesEN from './i18n/localization/en.json';
import intlMessagesVi from './i18n/localization/vi.json';
// import initReducer from './Store/initReducer';

export default {
  name: 'App',
  dir: 'App',
  pathRoot: 'app',
  routes: [
    {
      url: '',
      component: 'Page/index',
      layout: 'StickyLayout',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Ứng dụng | Siêu Trí Nhớ Học Đường',
        titleI18n: 'App:title',
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: 'Any',
  // redux: initReducer,
};
