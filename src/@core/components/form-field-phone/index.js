import 'react-phone-input-2/lib/style.css';

import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  InputGroup,
  InputGroupAddon,
  Label,
  InputGroupText,
  FormGroup,
  Button,
} from 'reactstrap';

import PhoneInput from 'react-phone-input-2';

import styled from 'styled-components';

const StyledError = styled.h5`
  font-size: 0.857rem !important;
  color: #ea5023 !important;
  margin-top: 0.25rem !important;
`;

const FormFieldPhone = ({
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
  hasSendOtpButton,
  handleSendOtpPress,
  initValue = '',
}) => {
  const touch = touched[field];
  const error = errors[field];
  const value = values[field] || '';
  const [state, setState] = React.useState('');
  const [startCountDown, setStartCountDown] = React.useState(false);
  const [countDown, setCountDown] = React.useState(60);

  useEffect(() => {
    let id = null;
    if (startCountDown) {
      id = setInterval(() => {
        setCountDown((old) => old - 1);
      }, 1000);
    }
    return () => clearInterval(id);
  }, [startCountDown]);

  useEffect(() => {
    if (countDown === 0) {
      setStartCountDown(false);
      setCountDown(60);
    }
  }, [countDown]);

  useEffect(() => {
    if (initValue) {
      setState(initValue);
    }
  }, [initValue]);

  const InputField = (
    <div className="d-flex flex-row">
      <PhoneInput
        // className="w-100"
        className={innerClass}
        onBlur={handleBlur(field)}
        onChange={(val) => {
          setState(val);
          handleChange(val);
        }}
        value={state}
        placeholder={placeholder}
        required={required}
        country="vn"
      />
      <Button
        onClick={() => {
          handleSendOtpPress(state.replace('84', '0'));
          setStartCountDown(true);
        }}
        disabled={startCountDown}
        className={
          'sendOtpButton' + startCountDown ? ' sendOtpButtonActive' : ''
        }
      >
        {startCountDown ? countDown : 'Gửi mã xác nhận'}
      </Button>
    </div>
  );
  const ErrorField = touch && error ? <StyledError>{error}</StyledError> : null;

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

FormFieldPhone.propTypes = {
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
  values: PropTypes.object,
  submitOnEnter: PropTypes.bool,
  onSubmit: PropTypes.any,
};

FormFieldPhone.defaultProps = {
  className: '',
  innerclass: '',
  submitOnEnter: true,
  handleSendOtpPress: () => {},
};

export default FormFieldPhone;
