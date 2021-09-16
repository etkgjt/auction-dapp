import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import * as Actions from './constants';

const initState = {
  language: "vi",
  codeLanguage: "vi-VN",
};

const CommonReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case Actions.SET_LANGUAGE:
      const {code} = action.payload
      switch (code) {
        case "vi-VN":
          return {...state, language: "vi", codeLanguage: code, itemsLanguageSelect: action.payload}
        case "en-US":
          return {...state, language: "en", codeLanguage: code, itemsLanguageSelect: action.payload}
        default:
          return {...state}
      }
    default:
      return state;
  }
};

const persistConfig = {
  key: 'common',
  storage,
};

export default persistReducer(persistConfig, CommonReducer);
