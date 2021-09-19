import intlMessagesEN from './i18n/localization/en.json';
import intlMessagesVi from './i18n/localization/vi.json';
// import initReducer from './Store/initReducer';

export default {
  name: 'Partner',
  dir: 'Partner',
  pathRoot: 'partners',
  routes: [
    {
      url: '',
      component: 'Page/index',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Đối tác | Siêu Trí Nhớ Học Đường',
        titleI18n: 'Partner:title',
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: 'Any',
  // redux: initReducer,
};
