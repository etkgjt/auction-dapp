import React, { useState } from 'react';

import PropTypes from 'prop-types';

import {
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  InputGroupText,
  FormGroup,
  UncontrolledPopover,
} from 'reactstrap';

import ColorPicker from 'react-pick-color';
import classnames from 'classnames';

const FormFieldColor = ({
  field,
  label,
  borderless,
  placeholder,
  required,
  children,
  append,
  type,
  handleChange,
  className,
  errors = {},
  values = {},
  innerClass,
}) => {
  const error = errors[field];
  const [value, setValue] = useState(values[field] || '#FFFFFF');

  const InputField = (
    <Input
      className={innerClass}
      invalid={Boolean(error)}
      value={value}
      onChange={setValue}
      placeholder={placeholder}
      required={required}
      type={type}
      id="readonlyInput"
      readOnly
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
        <InputGroup>
          <InputGroupAddon addonType="prepend" style={{ zIndex: 0 }}>
            <button
              className="waves-effect btn"
              style={{ backgroundColor: value, border: '1px solid #d8d6de' }}
              id="PopoverLegacy"
            />
            <UncontrolledPopover
              placement="top"
              trigger="legacy"
              target="PopoverLegacy"
            >
              <ColorPicker
                color={value}
                theme={{
                  borderRadius: '8px',
                  color: 'black',
                  width: '320px',
                }}
                hideAlpha={true}
                onChange={(color) => {
                  setValue(color.hex);
                  handleChange(color.hex);
                }}
              />
            </UncontrolledPopover>
          </InputGroupAddon>
          {InputField}
          {append && (
            <InputGroupAddon addonType="append">
              <InputGroupText>{append}</InputGroupText>
            </InputGroupAddon>
          )}
          {ErrorField}
        </InputGroup>
        {children}
      </FormGroup>
    </>
  );
};

FormFieldColor.propTypes = {
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

FormFieldColor.defaultProps = {
  className: '',
  innerclass: '',
  submitOnEnter: true,
};

export default FormFieldColor;
