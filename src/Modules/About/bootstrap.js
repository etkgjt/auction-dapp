import intlMessagesEN from './i18n/localization/en.json';
import intlMessagesVi from './i18n/localization/vi.json';
// import initReducer from './Store/initReducer';

export default {
  name: 'About',
  dir: 'About',
  pathRoot: 'about',
  routes: [
    {
      url: ':id',
      component: 'Page/index',
      layout: 'StickyLayout',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Về chúng tôi | Siêu Trí Nhớ Học Đường',
        titleI18n: 'About:title',
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: false,
  // redux: initReducer,
};
