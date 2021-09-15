import './index.scss';

import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Label, FormGroup } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';

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
  options = [],
  defaultValue = [],
  multiple = false,
  allowClear = false,
  values,
  identity,
  api,
}) => {
  const [value, setValue] = useState([]);
  const animatedComponents = makeAnimated();
  const touch = touched[field];
  const error = errors[field];

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
      options={options}
      onChange={(option) => {
        handleChange(option);
        setValue(option);
      }}
      isMulti={multiple}
      isClearable={allowClear}
      components={animatedComponents}
    />
  );

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
};

FormFieldSelect.defaultProps = {
  className: '',
  innerclass: '',
  options: [],
  borderLight: false,
};

export default FormFieldSelect;
