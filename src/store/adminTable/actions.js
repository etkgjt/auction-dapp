import { get_action_table } from './reducers';

export const GET_IDENTITY_TABLE_DATA_REQUEST =
  'GET_IDENTITY_TABLE_DATA_REQUEST';
export const GET_IDENTITY_TABLE_DATA_SUCCESS =
  'GET_IDENTITY_TABLE_DATA_SUCCESS';
export const GET_IDENTITY_TABLE_DATA_FAILURE =
  'GET_IDENTITY_TABLE_DATA_FAILURE';
export const SET_DEFAULT_IDENTITY_TABLE_DATA_SUCCESS =
  'SET_DEFAULT_IDENTITY_TABLE_DATA_SUCCESS';
export const ADD_IDENTITY_TABLE_DATA_SUCCESS =
  'ADD_IDENTITY_TABLE_DATA_SUCCESS';
export const UPDATE_IDENTITY_TABLE_DATA_SUCCESS =
  'UPDATE_IDENTITY_TABLE_DATA_SUCCESS';
export const UPDATE_IDENTITY_TABLE_MANY_DATA_SUCCESS =
  'UPDATE_IDENTITY_TABLE_MANY_DATA_SUCCESS';

export const CLEAR_IDENTITY_TABLE = 'CLEAR_IDENTITY_TABLE';

export function get_identity_table_data_action(
  identity,
  api,
  current = 1,
  pageSize = 50,
  filter = {}
) {
  return {
    type: GET_IDENTITY_TABLE_DATA_REQUEST,
    payload: {
      identity,
      api,
      current,
      pageSize,
      filter,
    },
  };
}

export function set_default_identity_table_data_action(identity, list) {
  return {
    type: get_action_table(identity, SET_DEFAULT_IDENTITY_TABLE_DATA_SUCCESS),
    payload: { list, treeMode },
  };
}

export function add_identity_table_data_success(identity, res, dynamicKey) {
  return {
    type: get_action_table(identity, ADD_IDENTITY_TABLE_DATA_SUCCESS),
    payload: { res, dynamicKey },
  };
}

export function update_identity_table_data_success(
  identity,
  recordUpdate = {
    id: '',
    column: '',
    data: '',
    rowMode: false,
    extendsData: null,
  },
  dynamicKey
) {
  return {
    type: get_action_table(identity, UPDATE_IDENTITY_TABLE_DATA_SUCCESS),
    payload: { ...recordUpdate, dynamicKey },
  };
}

export function clear_identity_table(identity, dynamicKey) {
  return {
    type: get_action_table(identity, CLEAR_IDENTITY_TABLE),
    payload: { dynamicKey },
  };
}
