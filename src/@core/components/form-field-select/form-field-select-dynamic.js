import './index.scss';
import '@styles/react/libs/react-select/_react-select.scss';

import React, { useEffect, useState } from 'react';

/*Hooks*/
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

/*Proptypes*/
import PropTypes from 'prop-types';

/*Components*/
import Select from 'react-select';
import { Label, FormGroup } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';

/* Actions */
import {
  get_data_for_select_action,
  set_default_identity_data_select_action,
  clear_identity_data_select,
} from '@store/dataForSelect/actions';

/* Selectors */
import { select_identity_data_select_dynamic_key } from '@store/dataForSelect/selectors';

/*Helper*/
import { removeAccents } from '@utils';

const StyledError = styled.h5`
  font-size: 0.857rem !important;
  color: #ea5023 !important;
  margin-top: 0.25rem !important;
`;

const FormFieldSelect = ({
  field,
  label,
  borderless,
  placeholder,
  children,
  handleChange,
  className,
  touched = {},
  errors = {},
  borderLight,
  multiple = false,
  allowClear = false,
  defaultDataSource,
  refreshKey,
  values,
  identity,
  api,
  dynamicKey,
  selectLabel,
  selectValue,
  dynamicMode = false,
  defaultPageSize = 100,
  stillRefreshWhenDataExist = true,
  clearTableAfterChangeRoute = true,
  defaultPrefixRouteKey,
  renderOption,
}) => {
  /* Redux */
  const history = useHistory();
  const dispatch = useDispatch();
  /* Identity data */
  let identityData;
  if (dynamicMode) {
    identityData = useSelector(
      select_identity_data_select_dynamic_key(identity, dynamicKey)
    );
  } else {
    identityData = useSelector((state) => state[identity]);
  }

  const { list = [] } = identityData;

  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const [prefixRouteKey] = useState(
    defaultPrefixRouteKey || history.location.pathname.split('/')[1]
  );

  const touch = touched[field];
  const error = errors[field];

  useEffect(() => {
    const options = list.length
      ? list.map((item) => ({
          label: item[selectLabel],
          value: item[selectValue],
          ...item,
        }))
      : [];
    setData(options);
  }, [list]);

  useEffect(() => {
    if (
      values &&
      values[field] &&
      Array.isArray(values[field]) &&
      values[field].length
    ) {
      const vl = data.filter((item) => values[field].includes(item.id));
      setValue(vl);
    }
  }, [JSON.stringify(values[field], JSON.stringify(data))]);

  useEffect(() => {
    if (Array.isArray(defaultDataSource)) {
      dispatch(
        set_default_identity_data_select_action(identity, defaultDataSource)
      );
    } else {
      const current = 1,
        pageSize = defaultPageSize;
      if (stillRefreshWhenDataExist) {
        getData(current, pageSize);
      } else if (list.length === 0) {
        getData(current, pageSize);
      }
    }
    return () => {
      const { pathname } = history.location;
      if (clearTableAfterChangeRoute && !pathname.includes(prefixRouteKey)) {
        dispatch(clear_identity_data_select(identity));
      }
    };
  }, [
    identity,
    stillRefreshWhenDataExist,
    refreshKey,
    JSON.stringify(defaultDataSource),
  ]);

  const getData = (current, pageSize) => {
    dispatch(get_data_for_select_action(identity, api, current, pageSize));
  };

  const OptionComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        {renderOption ? renderOption(data) : data.email}
      </components.Option>
    );
  };

  const SelectField = (
    <Select
      value={value}
      className={classnames({
        [className]: true,
        'react-select': true,
        'react-select-light': borderLight,
      })}
      classNamePrefix="select"
      placeholder={placeholder}
      options={data}
      onChange={(option) => {
        handleChange(option.map((item) => item.id));
      }}
      components={{ OptionComponent }}
      isMulti={multiple}
      isClearable={allowClear}
      onInputChange={onSearch}
      isClearable={true}
    />
  );

  const onSearch = (input) => {
    const newData = list.length
      ? list
          .filter((el) =>
            removeAccents(el[selectLabel].toLowerCase()).includes(
              removeAccents(input.toLowerCase())
            )
          )
          .map((item) => ({
            label: item[selectLabel],
            value: item[selectValue],
            ...item,
          }))
      : [];

    setData(newData);
  };

  const ErrorField = touch && error ? <StyledError>{error}</StyledError> : null;

  return (
    <div className="form-field-select">
      <FormGroup
        className={classnames({
          [className]: true,
          borderless,
        })}
      >
        {label && typeof label === 'string' ? (
          <Label className="form-label">{label}</Label>
        ) : (
          label
        )}
        <>
          {SelectField}
          {ErrorField}
        </>
        {children}
      </FormGroup>
    </div>
  );
};

FormFieldSelect.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  borderless: PropTypes.bool,
  prepend: PropTypes.any,
  append: PropTypes.any,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  className: PropTypes.string,
  innerClass: PropTypes.string,
  touched: PropTypes.object,
  errors: PropTypes.object,
  onSubmit: PropTypes.any,
  options: PropTypes.array,
  borderLight: PropTypes.bool,
  api: PropTypes.func.isRequired,
  identity: PropTypes.string.isRequired,
};

FormFieldSelect.defaultProps = {
  className: '',
  innerclass: '',
  options: [],
  borderLight: false,
};

export default FormFieldSelect;
