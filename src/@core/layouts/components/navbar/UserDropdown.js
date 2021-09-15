// ** React Imports
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// ** Custom Components
import Avatar from '@components/avatar';

// ** Third Party Components
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';
import { User, Mail, CheckSquare, MessageSquare, Power } from 'react-feather';

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg';

/*Action*/
import { setStatusModalLogout } from '@store/common/actions';

/*Selectors*/
import { getUserData } from '@store/user/selector';

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const userData = useSelector((state) => getUserData(state));

  const onOpenLogoutModal = (e) => {
    e.preventDefault();
    dispatch(setStatusModalLogout(true));
  };

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar;

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name font-weight-bold">
            {userData && userData['name']}
          </span>
          <span className="user-status">{userData && userData.role}</span>
        </div>
        <Avatar img={userAvatar} imgHeight="40" imgWidth="40" status="online" />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to="#" onClick={(e) => e.preventDefault()}>
          <User size={14} className="mr-75" />
          <span className="align-middle">{t('CORE:profile')}</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="#" onClick={onOpenLogoutModal}>
          <Power size={14} className="mr-75" />
          <span className="align-middle">{t('CORE:logout')}</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
