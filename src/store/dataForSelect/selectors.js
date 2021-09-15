const defaultValue = {
  listIds: [],
  list: [],
  hash: {},
  pagination: {
    current: 1,
    pageSize: 50,
    pageSizeOptions: ['5', '10', '20', '50', '100', '200', '500'],
    showSizeChanger: true,
    total: 0,
  },
  sorter: {},
  filters: {},
};

export const select_identity_data_select_dynamic_key =
  (identity, key) => (state) => {
    return state[identity][key] || defaultValue;
  };
