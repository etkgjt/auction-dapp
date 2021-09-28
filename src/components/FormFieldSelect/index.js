import React, { useEffect, useState } from "react"
import "./style.scss"

import PropTypes from "prop-types"
import Select from "react-select"

import { Label, FormGroup } from "reactstrap"
import classnames from "classnames"
import styled from "styled-components"

const StyledError = styled.h5`
  font-size: 0.857rem !important;
  color: #ea5023 !important;
  margin-top: 0.25rem !important;
`

const FormFieldSelect = ({
  field,
  label,
  borderless,
  placeholder,
  required,
  children,
  type,
  handleChange,
  handleBlur,
  className,
  touched = {},
  errors = {},
  values = {},
  borderLight,
  innerClass,
  handleSubmit,
  options = [],
  valueDefault = null
}) => {
  const [value, setValue] = useState(valueDefault)

  const touch = touched[field]
  const error = errors[field]
  const valueForm = values[field] || ""

  useEffect(() => {
    if (!valueDefault) {
      setValue("")
    } else if (options?.length) {
      const item = options?.find((v) => v.value * 1 === valueDefault * 1)
      setValue(item)
    }
  }, [valueDefault, options])

  const InputField = (
    <Select    
      defaultValue={value}
      value={value}
      className={classnames({
        [className]: true,
        "react-select": true,
        "react-select-light": borderLight
      })}
      classNamePrefix="select"
      placeholder={placeholder}
      options={options}
      onChange={(option) => {
        handleChange(option.value)
        setValue(option.value)
      }}
      
    />
  )
  const ErrorField = touch && error ? <StyledError>{error}</StyledError> : null
  return (
    <>
      <FormGroup
        className={classnames({
          [className]: true,
          borderless
        })}
      >
        {label && <Label className="form-label">{label}</Label>}
        <>
          {InputField}
          {ErrorField}
        </>

        {children}
      </FormGroup>
    </>
  )
}

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
  values: PropTypes.object,
  onSubmit: PropTypes.any,
  options: PropTypes.array,
  borderLight: PropTypes.bool
}

FormFieldSelect.defaultProps = {
  className: "",
  innerclass: "",
  options: [],
  borderLight: false
}

export default FormFieldSelect
