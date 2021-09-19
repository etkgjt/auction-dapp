import intlMessagesEN from './i18n/localization/en.json';
import intlMessagesVi from './i18n/localization/vi.json';
// import initReducer from './Store/initReducer';

export default {
  name: 'Support',
  dir: 'Support',
  pathRoot: 'support',
  routes: [
    {
      url: '',
      component: 'Page/index',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Hỗ trợ | Siêu Trí Nhớ Học Đường',
        titleI18n: 'Support:title',
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: 'Any',
  // redux: initReducer,
};
