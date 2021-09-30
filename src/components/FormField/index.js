import React from "react"

import PropTypes from "prop-types"

import "./style.scss"

import {
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  InputGroupText,
  FormGroup
} from "reactstrap"
import classnames from "classnames"

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
  disabled = false,
  multiline = false,
  onBlurCustom
}) => {
  const touch = touched[field]
  const error = errors[field]
  const value = values[field] || ""

  const InputField = (
    <Input
      disabled={disabled}
      className={"form-field-rounded " + innerClass}
      invalid={Boolean(error && touch)}
      onBlur={onBlurCustom || handleBlur(field)}
      onChange={handleChange(field)}
      value={value}
      placeholder={placeholder}
      required={required}
      type={type}
      multiple={multiline}
      onKeyUp={(ev) =>
        (ev.key === "Enter" || ev.keyCode === 13) &&
        submitOnEnter &&
        typeof handleSubmit === "function" &&
        handleSubmit()
      }
    />
  )
  const ErrorField = touch && <p className="field-error">{error}</p>

  return (
    <>
      <FormGroup
        className={classnames({
          [className]: true,
          borderless
        })}
        style={{ position: "relative" }}
      >
        {label && <Label className="form-label">{label}</Label>}
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
  )
}

FormField.propTypes = {
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
  onSubmit: PropTypes.any
}

FormField.defaultProps = {
  className: "",
  innerclass: "",
  submitOnEnter: true
}

export default FormField
