import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*Hooks*/
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

/*Helpers*/
import { logout } from '@utility/helpers';

/*Selectors*/
import { getStatusModalLogout } from '@store/common/selectors';

/*Actions*/
import { setStatusModalLogout } from '@store/common/actions';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const statusModalLogout = useSelector((state) => getStatusModalLogout(state));

  const onLogoutPress = () => {
    logout();
    onCloseModalLogout();
  };

  const onCloseModalLogout = () => {
    dispatch(setStatusModalLogout(false));
  };

  return (
    <Modal
      isOpen={statusModalLogout}
      toggle={() => onCloseModalLogout()}
      className="modal-dialog-centered"
    >
      <ModalHeader toggle={() => onCloseModalLogout()}>
        {t('CORE:logout')}
      </ModalHeader>
      <ModalBody>{t('CORE:LOG.OUT.confirm')}</ModalBody>
      <ModalFooter>
        <Button
          className={'width-20-per'}
          outline
          color="primary"
          onClick={() => onCloseModalLogout()}
        >
          {t('CORE:no')}
        </Button>
        <Button
          className={'width-20-per'}
          color="danger"
          onClick={() => onLogoutPress()}
        >
          {t('CORE:yes')}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalLogout;
