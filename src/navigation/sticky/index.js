import { Mail, Home } from 'react-feather';
import { BsFilePost, BsPeopleFill } from 'react-icons/bs';

export default [
  {
    id: 'home',
    title: 'Trang chủ',
    titleI18n: 'MENU:home',
    icon: <Home size={20} />,
    to: '/home',
    submenu: [
      {
        id: 'secondPage',
        title: 'Second Page',
        icon: <Mail size={20} />,
        to: '/second-page',
      },
      {
        id: 'secondPage',
        title: 'Second Page',
        icon: <Mail size={20} />,
        to: '/second-page',
      },
    ],
  },
  {
    id: 'introduce',
    title: 'Giới thiệu',
    titleI18n: 'MENU:introduce',
    icon: <BsFilePost size={20} />,
    to: '/introduce',
    submenu: [],
  },
  {
    id: 'news',
    title: 'Tin tức',
    titleI18n: 'MENU:news',
    icon: <BsFilePost size={20} />,
    to: '/social-post',
    submenu: [],
  },
  {
    id: 'user',
    title: 'Khách hàng',
    titleI18n: 'MENU:home',
    icon: <BsPeopleFill size={20} />,
    to: '/user',
    submenu: [],
  },
];
