import { takeEvery, call, put, all } from 'redux-saga/effects';
import { get_action_data_select } from './reducers';
/* Actions */
import * as actions from './actions';

function* get_data_for_select_worker({ payload }) {
  const { identity, api, current = 1, pageSize = 50, filter } = payload;
  const opts = {
    page: current,
    limit: pageSize,
  };

  yield put({
    type: get_action_data_select(identity, actions.GET_DATA_FOR_SELECT_REQUEST),
  }); // Trigger loading

  try {
    const res = yield call(api, opts);
    const payload = {
      list: res.data?.data,
      pagination: { current, pageSize },
    };
    yield put({
      type: get_action_data_select(
        identity,
        actions.GET_DATA_FOR_SELECT_SUCCESS
      ),
      payload,
    });
  } catch (error) {
    console.error(error.response?.data);
    console.error('Có lỗi xảy ra, không thể lấy dữ liệu');
    yield put({ type: actions.GET_DATA_FOR_SELECT_FAILURE });
  }
}

export function* get_data_for_select_watcher() {
  yield takeEvery(
    actions.GET_DATA_FOR_SELECT_REQUEST,
    get_data_for_select_worker
  );
}

export default function* () {
  yield all([get_data_for_select_watcher()]);
}
