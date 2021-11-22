import {
  ENVIRONMENT_BASE_URL_API_FIRE_BASE,
  ENVIRONMENT_firebaseConfig
} from "./environment"
export const BASE_URL_API = ENVIRONMENT_BASE_URL_API_FIRE_BASE
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBee5neC8YtIS9t6IMxXc3qP-ufk3c6lto",
  authDomain: "firstdapp-e1416.firebaseapp.com",
  databaseURL:
    "https://firstdapp-e1416-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firstdapp-e1416",
  storageBucket: "firstdapp-e1416.appspot.com",
  messagingSenderId: "986117991728",
  appId: "1:986117991728:web:73a98c5c1f67ae3ddb2cf5",
  measurementId: "G-FGE1XY2CXG"
}

export default {
  REGISTER_SETUP: "/register-setup",
  REFRESH_TOKEN: "/refresh-token",
  LOGIN: "/login",
  /*Notification*/
  POST_SAVE_NOTIFICATION_TOKEN: "/register-device-token"
  /*End Notification*/
}
