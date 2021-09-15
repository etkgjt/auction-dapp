import {
  GET_DATA_FOR_SELECT_SUCCESS,
  SET_DEFAULT_IDENTITY_DATA_SELECT_SUCCESS,
  CLEAR_IDENTITY_DATA_SELECT,
} from './actions';
import cloneDeep from 'lodash/cloneDeep';

export const get_action_data_select = (identity, origin) =>
  `${identity}_${origin}`;

const single_mode = (identity) => {
  const initialState = {
    listIds: [],
    list: [],
    hash: {},
    pagination: {
      current: 1,
      pageSize: 50,
      pageSizeOptions: ['5', '10', '15', '20', '50', '100', '200', '500'],
      showSizeChanger: true,
      total: 0,
    },
    sorter: {},
    filters: {},
    extendsData: {},
  };

  return function (state = initialState, action) {
    switch (action.type) {
      case get_action_data_select(identity, GET_DATA_FOR_SELECT_SUCCESS): {
        const {
          list = [],
          pagination,
          filters,
          sorter,
          extendsData = {},
          treeMode,
          treeKey,
        } = action.payload;

        const listIds = [];

        /* Hash data for find item faster */
        const hash = list.reduce((prev, current, index) => {
          listIds.push(current.id);
          current.index = index;
          prev[current.id] = current;
          return prev;
        }, {});

        const newState = {
          ...cloneDeep(state),
          listIds,
          list,
          treeList: treeMode ? create_tree_list(list, hash, treeKey) : [],
          hash,
          pagination: { ...state.pagination, ...pagination },
          filters,
          sorter,
          extendsData,
        };

        return newState;
      }
      case get_action_data_select(
        identity,
        SET_DEFAULT_IDENTITY_DATA_SELECT_SUCCESS
      ): {
        const { list = [], treeMode, treeKey } = action.payload;

        const listIds = [];

        /* Hash data for find item faster */
        const hash = list.reduce((prev, current, index) => {
          listIds.push(current.id);
          current.index = index;
          prev[current.id] = current;
          return prev;
        }, {});

        const newState = {
          ...cloneDeep(state),
          listIds,
          list,
          treeList: treeMode ? create_tree_list(list, hash, treeKey) : [],
          hash,
        };

        return newState;
      }
      case get_action_data_select(identity, CLEAR_IDENTITY_DATA_SELECT): {
        return cloneDeep(initialState);
      }
      default:
        return state;
    }
  };
};

const dynamic_mode = (identity) => {
  const record = {
    listIds: [],
    list: [],
    treeList: [],
    hash: {},
    pagination: {
      current: 1,
      pageSize: 50,
      pageSizeOptions: ['5', '10', '15', '20', '50', '100', '200', '500'],
      showSizeChanger: true,
      total: 0,
    },
    sorter: {},
    filters: {},
    extendsData: {},
  };

  const initialState = {
    // [key]: record
  };

  return function (state = initialState, action) {
    switch (action.type) {
      case get_action_data_select(identity, GET_DATA_FOR_SELECT_SUCCESS): {
        const {
          list = [],
          pagination,
          filters,
          sorter,
          extendsData = {},
          treeMode,
          treeKey,
          dynamicKey,
        } = action.payload;

        const listIds = [];

        /* Hash data for find item faster */
        const hash = list.reduce((prev, current, index) => {
          listIds.push(current.id);
          current.index = index;
          prev[current.id] = current;
          return prev;
        }, {});

        const newRecord = {
          ...cloneDeep(record),
          listIds,
          list,
          treeList: treeMode ? create_tree_list(list, hash, treeKey) : [],
          hash,
          pagination: { ...state.pagination, ...pagination },
          filters,
          sorter,
          extendsData,
        };

        const newState = { ...state, [dynamicKey]: newRecord };
        return newState;
      }
      case get_action_data_select(
        identity,
        SET_DEFAULT_IDENTITY_DATA_SELECT_SUCCESS
      ): {
        const { list = [], treeMode, treeKey, dynamicKey } = action.payload;

        const listIds = [];

        /* Hash data for find item faster */
        const hash = list.reduce((prev, current, index) => {
          listIds.push(current.id);
          current.index = index;
          prev[current.id] = current;
          return prev;
        }, {});

        const newRecord = {
          ...cloneDeep(record),
          listIds,
          list,
          treeList: treeMode ? create_tree_list(list, hash, treeKey) : [],
          hash,
        };

        const newState = { ...state, [dynamicKey]: newRecord };
        return newState;
      }
      case get_action_data_select(identity, ADD_IDENTITY_TABLE_DATA_SUCCESS): {
        const { res, dynamicKey } = action.payload;
        const newRecord = { ...(state[dynamicKey] || cloneDeep(record)) };
        newRecord.listIds = [res.id, ...newRecord.listIds];
        newRecord.hash = { ...newRecord.hash, [res.id]: res };
        newRecord.list = [res, ...newRecord.list];
        newRecord.pagination = {
          ...newRecord.pagination,
          total: newRecord.pagination.total + 1,
        };

        const newState = { ...state, [dynamicKey]: newRecord };
        return newState;
      }
      case get_action_data_select(
        identity,
        UPDATE_IDENTITY_TABLE_DATA_SUCCESS
      ): {
        const { id, column, data, rowMode, dynamicKey } = action.payload;
        const newRecord = { ...(state[dynamicKey] || cloneDeep(record)) };

        newRecord.list = newRecord.list.map((item) => {
          if (item.id === id) {
            let newItem;

            if (rowMode) {
              newItem = data;
            } else {
              newItem = { ...item, [column]: data };
            }

            return newItem;
          }

          return item;
        });
        newRecord.hash = {
          ...newRecord.hash,
          [id]: rowMode ? data : { ...newRecord.hash[id], [column]: data },
        };

        const newState = { ...state, [dynamicKey]: newRecord };
        return newState;
      }
      case get_action_data_select(
        identity,
        UPDATE_IDENTITY_TABLE_MANY_DATA_SUCCESS
      ): {
        const { ids, column, data, rowMode, dynamicKey } = action.payload;
        const newRecord = { ...(state[dynamicKey] || cloneDeep(record)) };

        newRecord.list = newRecord.list.map((item) => {
          if (ids.includes(item.id)) {
            let newItem;

            if (rowMode) {
              newItem = data;
            } else {
              newItem = { ...item, [column]: data };
            }

            return newItem;
          }

          return item;
        });
        const newHash = { ...newRecord.hash };
        ids.forEach((id) => {
          newHash[id] = rowMode
            ? data
            : { ...newRecord.hash[id], [column]: data };
        });
        newRecord.hash = newHash;

        const newState = { ...state, [dynamicKey]: newRecord };
        return newState;
      }
      case get_action_data_select(identity, CLEAR_IDENTITY_DATA_SELECT): {
        const { dynamicKey } = action.payload;
        const newState = { ...state, [dynamicKey]: cloneDeep(record) };
        return newState;
      }
      default:
        return state;
    }
  };
};

export default function (identity, dynamicMode) {
  if (dynamicMode) {
    return dynamic_mode(identity);
  }

  return single_mode(identity);
}
