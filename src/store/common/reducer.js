import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import * as Actions from './constants';

const initState = {
  onBoardScreen: true,
  infoDevice: {},
  statusModalLogout: false,
};

const CommonReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case Actions.SET_ON_BOARD:
      return { ...state, onBoardScreen: false };
    case Actions.SET_INFO_DEVICE:
      return { ...state, infoDevice: { ...action.payload } };
    case Actions.SET_STATUS_MODAL_LOGOUT:
      return { ...state, statusModalLogout: action.payload };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'common',
  storage,
};

export default persistReducer(persistConfig, CommonReducer);
