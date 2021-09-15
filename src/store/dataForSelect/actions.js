import { get_action_data_select } from './reducers';

export const GET_DATA_FOR_SELECT_REQUEST = 'GET_DATA_FOR_SELECT_REQUEST';
export const GET_DATA_FOR_SELECT_SUCCESS = 'GET_DATA_FOR_SELECT_SUCCESS';
export const GET_DATA_FOR_SELECT_FAILURE = 'GET_DATA_FOR_SELECT_FAILURE';
export const SET_DEFAULT_IDENTITY_DATA_SELECT_SUCCESS =
  'SET_DEFAULT_IDENTITY_DATA_SELECT_SUCCESS';
export const CLEAR_IDENTITY_DATA_SELECT = 'CLEAR_IDENTITY_DATA_SELECT';

export function get_data_for_select_action(
  identity,
  api,
  current,
  pageSize = 50,
  filter
) {
  return {
    type: GET_DATA_FOR_SELECT_REQUEST,
    payload: { identity, api, current, pageSize, filter },
  };
}

export function set_data_for_select_action(key, list) {
  return {
    type: GET_DATA_FOR_SELECT_SUCCESS,
    payload: { identity, list },
  };
}

export function set_default_identity_data_select_action(identity, list) {
  return {
    type: get_action_data_select(
      identity,
      SET_DEFAULT_IDENTITY_DATA_SELECT_SUCCESS
    ),
    payload: { list, treeMode },
  };
}

export function clear_identity_data_select(identity, dynamicKey) {
  return {
    type: get_action_data_select(identity, CLEAR_IDENTITY_DATA_SELECT),
    payload: { dynamicKey },
  };
}
