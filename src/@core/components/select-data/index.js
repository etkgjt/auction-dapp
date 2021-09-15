import { useEffect, useState } from 'react';

/*Hooks*/
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Actions */
import {
  get_data_for_select_action,
  clear_identity_data_select,
} from '@store/dataForSelect/actions';

export const get_data_select_by_identity = (
  value,
  identity,
  api,
  keyData = 'id',
  labelData = 'name'
) => {
  /* Redux */
  const history = useHistory();
  const dispatch = useDispatch();
  /* Identity data */
  const identityData = useSelector((state) => state[identity]);

  const { list = [] } = identityData;

  const [prefixRouteKey] = useState(history.location.pathname.split('/')[1]);

  useEffect(() => {
    const current = 1,
      pageSize = 5000;
    if (list.length === 0) {
      getData(current, pageSize);
    }
    return () => {
      const { pathname } = history.location;
      if (!pathname.includes(prefixRouteKey)) {
        dispatch(clear_identity_data_select(identity));
      }
    };
  }, [identity]);

  const getData = (current, pageSize) => {
    dispatch(get_data_for_select_action(identity, api, current, pageSize));
  };

  const item = list.find((el) => el[keyData] === value) || {};

  return item[labelData];
};
