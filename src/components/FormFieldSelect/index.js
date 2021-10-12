import React, { useEffect, useState } from "react"
import "./style.scss"

import PropTypes from "prop-types"
import Select from "react-select"

import { Label, FormGroup } from "reactstrap"
import classnames from "classnames"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

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
  const isMobile = useMediaQuery({ maxWidth: 767 })
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
      styles={
        isMobile
          ? {
              control: (base) => ({
                ...base,
                minHeight: 26
              }),
              valueContainer: (base) => ({
                ...base,
                minHeight: 26,
                height: 26
              }),
              dropdownIndicator: (base) => ({
                ...base,
                minHeight: 26,
                height: 26,
                padding: 0
              }),
              indicatorSeparator: (base) => ({
                ...base,
                margin: 0,
                display: "none"
              })
            }
          : undefined
      }
    />
  )
  const ErrorField =
    touch && error ? <p className="field-error">{error}</p> : null
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
