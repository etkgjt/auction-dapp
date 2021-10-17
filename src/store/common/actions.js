import * as Actions from "./constants"

export function setLanguage(payload) {
  return {
    type: Actions.SET_LANGUAGE,
    payload
  }
}

export function readNotifyAction(payload) {
  return { type: Actions.READ_NOTIFY, payload }
}
export function getFacebookInfo(payload) {
  return { type: Actions.GET_FACEBOOK_INFO, payload }
}
export function setFacebookInfo(payload) {
  return { type: Actions.SET_FACEBOOK_INFO, payload }
}
