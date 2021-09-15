import './index.scss';
import '@styles/react/libs/react-select/_react-select.scss';

import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Label, FormGroup } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import { WithContext as TagInput } from 'react-tag-input';

const StyledError = styled.h5`
  font-size: 0.857rem !important;
  color: #ea5023 !important;
  margin-top: 0.25rem !important;
`;

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

const FormUploadField = ({
  field,
  label,
  borderless,
  placeholder,
  children,
  handleChange,
  className,
  touched = {},
  errors = {},
  values,
  suggestions = [],
  inline,
  inputFieldPosition = 'top',
}) => {
  const [value, setValue] = useState([]);
  const touch = touched[field];
  const error = errors[field];

  useEffect(() => {
    if (
      values &&
      values[field] &&
      Array.isArray(values[field]) &&
      values[field].length
    ) {
      const vl = values[field].map((item) => ({ id: item, text: item }));
      setValue(vl);
    }
  }, [JSON.stringify(values), field]);

  const handleDeleteTag = (i) => {
    const newTag = value.filter((tag, index) => index !== i);
    handleChange(newTag.map((item) => item.id));
  };

  const handleAddition = (tag) => {
    const newTag = [...value, tag];
    console.log(
      'new',
      newTag.map((item) => item.id)
    );
    handleChange(newTag.map((item) => item.id));
  };

  const handleDrag = (tag, currPos, newPos) => {
    const tags = [...value];
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setValue(newTags);
    handleChange(newTags);
  };

  const TagField = (
    <TagInput
      tags={value}
      suggestions={suggestions}
      handleDelete={handleDeleteTag}
      handleAddition={handleAddition}
      handleDrag={handleDrag}
      delimiters={delimiters}
      placeholder={placeholder}
      classNames={{
        tags: `form-control ${touch && error ? 'tag-error' : ''}`,
      }}
      inputFieldPosition={inline ? undefined : inputFieldPosition}
      inline={inline}
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
          {TagField}
          {ErrorField}
        </>
        {children}
      </FormGroup>
    </div>
  );
};

FormUploadField.propTypes = {
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

FormUploadField.defaultProps = {
  className: '',
  innerclass: '',
  options: [],
  borderLight: false,
  suggestions: [],
};

export default FormUploadField;
