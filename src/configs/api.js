import {
  ENVIRONMENT_BASE_URL_API,
  ENVIRONMENT_BASE_URL_API_STNHD
} from "./environment"
export const BASE_URL_API = ENVIRONMENT_BASE_URL_API
export const BASE_URL_API_STNHD = ENVIRONMENT_BASE_URL_API_STNHD

export default {
  /*Common*/
  GET_COMMON_GET_CITY: "/Province",
  GET_COMMON_GET_DISTRICT: "/District",
  GET_LIST_CLASS: "/SchoolClass",
  POST_SEND_OTP: "/vi-VN/SieuTriNhoHocDuong/SendOTP",
  GET_USER_PROFILE: "/mypage/Getprofile",
  GET_USER_PROFILE_STNHD: "/UserInfo/GetProfile"
  /*End Common*/
}
