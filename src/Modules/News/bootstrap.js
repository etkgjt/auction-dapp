import intlMessagesEN from './i18n/localization/en.json';
import intlMessagesVi from './i18n/localization/vi.json';
// import initReducer from './Store/initReducer';

export default {
  name: 'News',
  dir: 'News',
  pathRoot: 'news',
  routes: [
    {
      url: ':id',
      component: 'Page/Details',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Tin tức | Siêu Trí Nhớ Học Đường',
        titleI18n: 'News:title',
      },
    },
    {
      url: '',
      component: 'Page/index',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Tin tức | Siêu Trí Nhớ Học Đường',
        titleI18n: 'News:title',
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: 'Any',
  // redux: initReducer,
};
