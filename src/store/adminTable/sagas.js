import { takeEvery, call, put, all, select } from 'redux-saga/effects';

/* Actions */
import * as actions from './actions';

import { get_action_table } from './reducers';

function* get_indentity_table_data_worker({ payload }) {
  const { identity, api, current, pageSize, filter } = payload;

  const opts = {
    page: current,
    limit: pageSize,
    ...filter,
  };

  yield put({
    type: get_action_table(identity, actions.GET_IDENTITY_TABLE_DATA_REQUEST),
  }); // Trigger loading

  try {
    const res = yield call(api, opts);
    const payload = {
      list: res.data?.data,
      pagination: { current, pageSize, total: res.totalRows },
    };

    yield put({
      type: get_action_table(identity, actions.GET_IDENTITY_TABLE_DATA_SUCCESS),
      payload,
    });
  } catch (error) {
    console.error(error.response?.data);
    yield put({
      type: get_action_table(identity, actions.GET_IDENTITY_TABLE_DATA_FAILURE),
    });
  }
}

export function* get_indentity_table_data_watcher() {
  yield takeEvery(
    actions.GET_IDENTITY_TABLE_DATA_REQUEST,
    get_indentity_table_data_worker
  );
}

export default function* () {
  yield all([get_indentity_table_data_watcher()]);
}
