import { Mail, Home } from 'react-feather';
import { BsFilePost, BsPeopleFill } from 'react-icons/bs';

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
    title: 'Bài đăng',
    icon: <BsFilePost size={20} />,
    navLink: '/social-post',
  },
  {
    id: 'user',
    title: 'Khách hàng',
    icon: <BsPeopleFill size={20} />,
    navLink: '/user',
  },
];
