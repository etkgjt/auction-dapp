import intlMessagesEN from './i18n/localization/en.json';
import intlMessagesVi from './i18n/localization/vi.json';
// import initReducer from './Store/initReducer';

export default {
  name: 'Helper',
  dir: 'Helper',
  pathRoot: 'help',
  routes: [
    {
      url: 'payment-term',
      component: 'Page/Payment',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Điều khoản thanh toán | Siêu Trí Nhớ Học Đường',
        titleI18n: 'Helper:title',
      },
    },
    {
      url: 'buy-guide',
      component: 'Page/BuyGuide',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Hướng dẫn mua hàng | Siêu Trí Nhớ Học Đường',
        titleI18n: 'Helper:title',
      },
    },

    {
      url: 'private-policy',
      component: 'Page/Private',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Chính sách thanh toán | Siêu Trí Nhớ Học Đường',
        titleI18n: 'Helper:title',
      },
    },
    {
      url: 'complain-policy',
      component: 'Page/Complain',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Chính sách khiếu nại | Siêu Trí Nhớ Học Đường',
        titleI18n: 'Helper:title',
      },
    },
    {
      url: 'return-policy',
      component: 'Page/Return',
      meta: {
        authRoute: true,
      },
      props: {
        title: 'Chính sách khiếu nại | Siêu Trí Nhớ Học Đường',
        titleI18n: 'Helper:title',
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: 'Any',
  // redux: initReducer,
};
