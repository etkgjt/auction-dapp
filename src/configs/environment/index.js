let ENV_ENVIRONMENT_BASE_URL_API_STNHD = "https://apidev.stnhd.com/api"
let ENV_ENVIRONMENT_BASE_URL_API = "https://daotao-apidaisu.stnhd.com/api"

let ENV_ENVIRONMENT_BASE_URL_API_FIRE_BASE =
    "https://us-central1-tamtriluc-76b54.cloudfunctions.net/api"
let ENV_ENVIRONMENT_FIRE_BASE_SECURITY = {
  secretApp: "tamtriluc-firebase",
  appSecretRegisterApp: "666-secret-2-register-3-@@app!",
  email: "tamtriluc-firebase@admin.admin",
  password: "tamtrilucgenerate092123222"
}
let ENV_ENVIRONMENT_VERSION_DESKTOP = "1.0.3"
let ENV_ENVIRONMENT_mainDir = "dev"
let ENV_ENVIRONMENT_avatarDir = "dev/avatar"
let ENV_ENVIRONMENT_rootDir = "/STNHĐ/v2"
let ENV_ENVIRONMENT_firebaseConfig = {
  apiKey: "AIzaSyBLHUn_Q1PHZc8WsKuc9y45Bz5_iT--2ao",
  authDomain: "tamtriluc-76b54.firebaseapp.com",
  databaseURL:
      "https://tamtriluc-76b54-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tamtriluc-76b54",
  storageBucket: "tamtriluc-76b54.appspot.com",
  messagingSenderId: "465366344602",
  appId: "1:465366344602:web:c83ab3e6f4217ee2d6d023",
  measurementId: "G-Y2EFTL9G4H"
}

switch (process.env.NODE_ENV) {
  case "development":
    ENV_ENVIRONMENT_BASE_URL_API_STNHD = "https://apidev.stnhd.com/api"
    ENV_ENVIRONMENT_BASE_URL_API = "https://daotao-apidaisu.stnhd.com/api"
    ENV_ENVIRONMENT_BASE_URL_API_FIRE_BASE =
        "https://us-central1-tamtriluc-76b54.cloudfunctions.net/api"
    ENV_ENVIRONMENT_FIRE_BASE_SECURITY = {
      secretApp: "tamtriluc-firebase",
      appSecretRegisterApp: "666-secret-2-register-3-@@app!",
      email: "tamtriluc-firebase@admin.admin",
      password: "tamtrilucgenerate092123222"
    }
    ENV_ENVIRONMENT_VERSION_DESKTOP = "1.0.3"
    ENV_ENVIRONMENT_mainDir = "dev"
    ENV_ENVIRONMENT_avatarDir = "dev/avatar"
    ENV_ENVIRONMENT_rootDir = "/STNHĐ/v2"
    ENV_ENVIRONMENT_firebaseConfig = {
      apiKey: "AIzaSyBLHUn_Q1PHZc8WsKuc9y45Bz5_iT--2ao",
      authDomain: "tamtriluc-76b54.firebaseapp.com",
      databaseURL:
          "https://tamtriluc-76b54-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "tamtriluc-76b54",
      storageBucket: "tamtriluc-76b54.appspot.com",
      messagingSenderId: "465366344602",
      appId: "1:465366344602:web:c83ab3e6f4217ee2d6d023",
      measurementId: "G-Y2EFTL9G4H"
    }
    break
  case "test":
    ENV_ENVIRONMENT_BASE_URL_API_STNHD = "https://apidev.stnhd.com/api"
    ENV_ENVIRONMENT_BASE_URL_API = "https://daotao-apidaisu.stnhd.com/api"
    ENV_ENVIRONMENT_BASE_URL_API_FIRE_BASE =
        "https://us-central1-tamtriluc-76b54.cloudfunctions.net/api"
    ENV_ENVIRONMENT_FIRE_BASE_SECURITY = {
      secretApp: "tamtriluc-firebase",
      appSecretRegisterApp: "666-secret-2-register-3-@@app!",
      email: "tamtriluc-firebase@admin.admin",
      password: "tamtrilucgenerate092123222"
    }
    ENV_ENVIRONMENT_VERSION_DESKTOP = "1.0.3"
    ENV_ENVIRONMENT_mainDir = "dev"
    ENV_ENVIRONMENT_avatarDir = "dev/avatar"
    ENV_ENVIRONMENT_rootDir = "/STNHĐ/v2"
    ENV_ENVIRONMENT_firebaseConfig = {
      apiKey: "AIzaSyBLHUn_Q1PHZc8WsKuc9y45Bz5_iT--2ao",
      authDomain: "tamtriluc-76b54.firebaseapp.com",
      databaseURL:
          "https://tamtriluc-76b54-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "tamtriluc-76b54",
      storageBucket: "tamtriluc-76b54.appspot.com",
      messagingSenderId: "465366344602",
      appId: "1:465366344602:web:c83ab3e6f4217ee2d6d023",
      measurementId: "G-Y2EFTL9G4H"
    }
  case "production":
    ENV_ENVIRONMENT_BASE_URL_API_STNHD = "https://apidev.stnhd.com/api"
    ENV_ENVIRONMENT_BASE_URL_API = "https://daotao-apidaisu.stnhd.com/api"
    ENV_ENVIRONMENT_BASE_URL_API_FIRE_BASE =
        "https://us-central1-tamtriluc-76b54.cloudfunctions.net/api"
    ENV_ENVIRONMENT_FIRE_BASE_SECURITY = {
      secretApp: "tamtriluc-firebase",
      appSecretRegisterApp: "666-secret-2-register-3-@@app!",
      email: "tamtriluc-firebase@admin.admin",
      password: "tamtrilucgenerate092123222"
    }
    ENV_ENVIRONMENT_VERSION_DESKTOP = "1.0.3"
    ENV_ENVIRONMENT_mainDir = "dev"
    ENV_ENVIRONMENT_avatarDir = "dev/avatar"
    ENV_ENVIRONMENT_rootDir = "/STNHĐ/v2"
    ENV_ENVIRONMENT_firebaseConfig = {
      apiKey: "AIzaSyBLHUn_Q1PHZc8WsKuc9y45Bz5_iT--2ao",
      authDomain: "tamtriluc-76b54.firebaseapp.com",
      databaseURL:
          "https://tamtriluc-76b54-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "tamtriluc-76b54",
      storageBucket: "tamtriluc-76b54.appspot.com",
      messagingSenderId: "465366344602",
      appId: "1:465366344602:web:c83ab3e6f4217ee2d6d023",
      measurementId: "G-Y2EFTL9G4H"
    }
    break
}

export const ENVIRONMENT_BASE_URL_API_STNHD = ENV_ENVIRONMENT_BASE_URL_API_STNHD
export const ENVIRONMENT_BASE_URL_API = ENV_ENVIRONMENT_BASE_URL_API
export const ENVIRONMENT_BASE_URL_API_FIRE_BASE =
    ENV_ENVIRONMENT_BASE_URL_API_FIRE_BASE
export const ENVIRONMENT_FIRE_BASE_SECURITY = ENV_ENVIRONMENT_FIRE_BASE_SECURITY

//API STATUS
export const ENVIRONMENT_VERSION_DESKTOP = ENV_ENVIRONMENT_VERSION_DESKTOP
export const ENVIRONMENT_mainDir = ENV_ENVIRONMENT_mainDir
export const ENVIRONMENT_avatarDir = ENV_ENVIRONMENT_avatarDir
export const ENVIRONMENT_rootDir = ENV_ENVIRONMENT_rootDir
export const ENVIRONMENT_firebaseConfig = ENV_ENVIRONMENT_firebaseConfig
export const FACEBOOK_PAGE_ID = 469807056541116
