import intlMessagesEN from './i18n/localization/en.json';
import intlMessagesVi from './i18n/localization/vi.json';
// import initReducer from './Store/initReducer';

export default {
  name: 'Agency',
  dir: 'Agency',
  pathRoot: 'agency',
  routes: [
    {
      url: '',
      component: 'Page/index',
      layout: 'StickyLayout',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Quảng bá| Siêu Trí Nhớ Học Đường',
        titleI18n: 'Agency:title',
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: 'Any',
  // redux: initReducer,
};
