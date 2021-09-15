import '@styles/react/libs/flatpickr/flatpickr.scss';

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import {
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  InputGroupText,
  FormGroup,
} from 'reactstrap';
import Flatpickr from 'react-flatpickr';
import classnames from 'classnames';

const DatePicker = ({
  field,
  label,
  borderless,
  placeholder,
  prepend,
  children,
  append,
  className,
  errors = {},
  values = {},
  innerClass,
  handleChange,
}) => {
  const error = errors[field];
  const value = values[field] || '';

  const InputField = (
    <Flatpickr
      value={value}
      data-enable-time
      id="date-time-picker"
      onChange={(dateSelect) => {
        const date = moment(dateSelect[0]).format('YYYY-MM-DD HH:mm');
        handleChange(date);
      }}
      options={{
        enableTime: true,
        allowInput: true,
      }}
      // onBlur={handleBlur(field)}
      placeholder={placeholder}
      invalid={Boolean(error).toString()}
      className={`form-control ${innerClass ? innerClass : ''}`}
    />
  );

  const ErrorField = <FormFeedback>{error}</FormFeedback>;

  return (
    <>
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
        {append || prepend ? (
          <InputGroup>
            {prepend && (
              <InputGroupAddon addonType="prepend">
                <InputGroupText>{prepend}</InputGroupText>
              </InputGroupAddon>
            )}
            {InputField}
            {append && (
              <InputGroupAddon addonType="append">
                <InputGroupText>{append}</InputGroupText>
              </InputGroupAddon>
            )}
            {ErrorField}
          </InputGroup>
        ) : (
          <>
            {InputField}
            {ErrorField}
          </>
        )}
        {children}
      </FormGroup>
    </>
  );
};

DatePicker.propTypes = {
  field: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
  values: PropTypes.object,
  submitOnEnter: PropTypes.bool,
  onSubmit: PropTypes.any,
};

DatePicker.defaultProps = {
  className: '',
  innerclass: '',
  submitOnEnter: true,
};

export default DatePicker;
