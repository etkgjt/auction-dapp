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
    await this.setTokenFireBase();
  };

  static setTokenFireBase = async () => {
    try {
      let result = await apiMethodFireBase.post(apiFireBase.LOGIN, {
        email: FIRE_BASE_SECURITY.email,
        password: FIRE_BASE_SECURITY.password,
      });
      let data = null;
      if (result.status === 200) {
        data = result.data;
      }
      if (data.success === false) {
        if (data.code === 'user_not_exist') {
          await apiMethodFireBase.post(apiFireBase.REGISTER_SETUP);
          result = await apiMethodFireBase.post(apiFireBase.LOGIN, {
            email: FIRE_BASE_SECURITY.email,
            password: FIRE_BASE_SECURITY.password,
          });
          if (result.status === 200) {
            data = result.data;
          }
        }
      }

      if (data.success === true) {
        apiMethodFireBase.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.token}`;
        await this.signTokenFireBase(data.tokenFirebase);
      }
    } catch (e) {
      console.log('error');
      console.log(e);
    }
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
