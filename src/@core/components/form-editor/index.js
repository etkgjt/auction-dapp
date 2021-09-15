import '@styles/react/libs/editor/editor.scss';

import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { InputEditor as Editor } from '@components';

import {
  FormFeedback,
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
  handleChange,
  className,
  touched = {},
  errors = {},
  defaultValue = null,
  innerClass,
  values,
}) => {
  const value = values[field];

  const error = errors[field];

  const EditorField = (
    <Editor
      value={value}
      className={`${innerClass ? innerClass : ''} ${
        Boolean(error) ? 'error__editor' : ''
      }`}
      onChange={(vl) => {
        handleChange(vl);
      }}
      placeholder={placeholder}
      required={required}
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
            {EditorField}
            {append && (
              <InputGroupAddon addonType="append">
                <InputGroupText>{append}</InputGroupText>
              </InputGroupAddon>
            )}
            {ErrorField}
          </InputGroup>
        ) : (
          <>
            {EditorField}
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
