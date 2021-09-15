import * as Actions from './constants';

export function setOnBoard(payload) {
  return {
    type: Actions.SET_ON_BOARD,
    payload,
  };
}

export function setInfoDevice(payload) {
  return {
    type: Actions.SET_INFO_DEVICE,
    payload,
  };
}

export function setStatusModalLogout(payload) {
  return {
    type: Actions.SET_STATUS_MODAL_LOGOUT,
    payload,
  };
}
