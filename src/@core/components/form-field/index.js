import React from 'react';

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
import classnames from 'classnames';

const FormField = ({
  field,
  label,
  borderless,
  placeholder,
  required,
  prepend,
  children,
  append,
  type,
  handleChange,
  handleBlur,
  className,
  touched = {},
  errors = {},
  values = {},
  innerClass,
  handleSubmit,
  submitOnEnter,
}) => {
  const error = errors[field];
  const value = values[field] || '';

  const InputField = (
    <Input
      className={innerClass}
      invalid={Boolean(error)}
      onBlur={handleBlur(field)}
      onChange={handleChange(field)}
      value={value}
      placeholder={placeholder}
      required={required}
      type={type}
      onKeyUp={(ev) =>
        (ev.key === 'Enter' || ev.keyCode === 13) &&
        submitOnEnter &&
        typeof handleSubmit === 'function' &&
        handleSubmit()
      }
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

FormField.propTypes = {
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

FormField.defaultProps = {
  className: '',
  innerclass: '',
  submitOnEnter: true,
};

export default FormField;
