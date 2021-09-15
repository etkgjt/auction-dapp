import intlMessagesEN from './i18n/localization/en.json';
import intlMessagesVi from './i18n/localization/vi.json';
// import initReducer from './Store/initReducer';

export default {
  name: 'Contact',
  dir: 'Contact',
  pathRoot: 'contact',
  routes: [
    {
      url: '',
      component: 'Page/index',
      layout: 'StickyLayout',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Liên hệ | Siêu Trí Nhớ Học Đường',
        titleI18n: 'Contact:title',
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: false,
  // redux: initReducer,
};
