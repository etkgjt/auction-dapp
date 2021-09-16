import intlMessagesEN from './i18n/localization/en.json';
import intlMessagesVi from './i18n/localization/vi.json';
// import initReducer from './Store/initReducer';

export default {
  name: 'BookLanding',
  dir: 'BookLanding',
  pathRoot: 'book-landing',
  routes: [
    {
      url: '',
      component: 'Page/index',
      layout: 'StickyLayout',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Book Landing | Siêu Trí Nhớ Học Đường',
        titleI18n: 'BookLanding:title',
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: 'Any',
  // redux: initReducer,
};
