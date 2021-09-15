import list_users from '@assets/json/users.json';
import list_categories from '@assets/json/categories.json';

export const getListUserSTNHĐ = () => {
  return Promise.resolve(list_users);
};

export const getListCategorySTNHĐ = () => {
  return Promise.resolve(list_categories);
};
