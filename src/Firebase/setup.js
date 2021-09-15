import { authDB } from './database';
import apiMethodFireBase from '@utility/ApiMethodFireBase';
import { FIRE_BASE_SECURITY } from '../configs/contants';
import apiFireBase from '../configs/apiFireBase';
let intervalRefreshToken = null;

export default class Setup {
  static initApi = async () => {
    apiMethodFireBase.defaults.headers.common['app-secret'] =
      FIRE_BASE_SECURITY.secretApp;
    apiMethodFireBase.defaults.headers.common['app-secret-register-app'] =
      FIRE_BASE_SECURITY.appSecretRegisterApp;
  };

  static setTokenFireBase = async (token, tokenFirebase) => {
    apiMethodFireBase.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`;
    await this.signTokenFireBase(tokenFirebase);
  };

  static signTokenFireBase = async (token) => {
    const refreshToken = async () => {
      const result = await apiMethodFireBase.post(apiFireBase.REFRESH_TOKEN);
      let data = null;
      if (result.status === 200) {
        data = result.data;
      }
      await authDB.signInWithCustomToken(data.tokenFirebase);
    };
    try {
      await authDB.signInWithCustomToken(token);
    } catch (e) {
      if (e.code === 'auth/invalid-custom-token') {
        await refreshToken();
      }
    }
    clearInterval(intervalRefreshToken);
    intervalRefreshToken = setInterval(async () => {
      await refreshToken();
    }, 40 * 60 * 1000);
  };
}
