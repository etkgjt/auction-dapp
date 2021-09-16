import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import * as Actions from './constants';

const initState = {
  language: 'vi',
  codeLanguage: 'vi',
};

const CommonReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case Actions.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
        codeLanguage: action.payload,
        itemsLanguageSelect: action.payload,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'common',
  storage,
};

export default persistReducer(persistConfig, CommonReducer);
