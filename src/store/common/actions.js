import * as Actions from "./constants";

export function setLanguage(payload) {
  return {
    type: Actions.SET_LANGUAGE,
    payload,
  };
}

export function readNotifyAction(payload) {
  return { type: Actions.READ_NOTIFY, payload };
}
