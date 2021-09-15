import { Mail, Home } from 'react-feather';
import {
  BsFilePost,
  BsPeopleFill,
  BsCardHeading,
  BsNewspaper,
} from 'react-icons/bs';

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home',
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page',
  },
  {
    id: 'socialPost',
    title: 'Bài đăng cộng đồng',
    icon: <BsFilePost size={20} />,
    navLink: '/social-post',
  },
  {
    id: 'advertPost',
    title: 'Bài đăng quảng cáo',
    icon: <BsCardHeading size={20} />,
    navLink: '/advert-post',
  },
  {
    id: 'user',
    title: 'Quản trị viên',
    icon: <BsPeopleFill size={20} />,
    navLink: '/user',
  },
  {
    id: 'blackList',
    title: 'Từ khóa cấm',
    icon: <BsNewspaper size={20} />,
    navLink: '/blacklist-keyword',
  },
];
