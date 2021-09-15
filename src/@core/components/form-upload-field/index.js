import './index.scss';

import React, { useState, useEffect } from 'react';
/*Hooks*/
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { Button, FormGroup, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import { UploadFile } from '@components';
import { BsFillImageFill, BsX } from 'react-icons/bs';

import { isFireStoreImages, isFireStoreVideo } from '@utility/Utils';

const StyledError = styled.h5`
  font-size: 0.857rem !important;
  color: #ea5023 !important;
  margin-top: 0.25rem !important;
`;

const FormFieldUpload = ({
  field,
  label,
  borderless,
  children,
  className,
  touched = {},
  errors = {},
  defaultValue = [],
  showImage = true,
  handleChange,
  keyImage = 'url',
  values,
}) => {
  const { t } = useTranslation();

  const [files, setFiles] = useState(defaultValue);
  const touch = touched[field];
  const error = errors[field];
  const value = values[field];

  useEffect(() => {
    handleChange(files);
  }, [JSON.stringify(files)]);

  useEffect(() => {
    setFiles(value);
  }, [JSON.stringify(value)]);

  const renderFiles = () =>
    showImage && files && files.length ? (
      <div className="list__file-wrapper px-2 mt-2">
        <Row xs="1" sm="1" md="2" lg="2">
          {files.map((item, index) => {
            const link = typeof item === 'string' ? item : item[keyImage];
            return (
              <Col key={`img-${index}`}>
                <div className="file-wrapper">
                  {isFireStoreVideo(link) ? (
                    <video className="video-chosen" controls width="auto">
                      <source src={link} type="video/mp4" />
                    </video>
                  ) : isFireStoreImages(link) ? (
                    <img
                      src={link}
                      className="image-chosen"
                      alt={`img-${link}`}
                      width="auto"
                    />
                  ) : null}
                  <div
                    className="remove-action"
                    // onClick={() => removeImage(index)}
                  >
                    <BsX size={32} />
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    ) : null;

  const ErrorField = touch && error ? <StyledError>{error}</StyledError> : null;

  return (
    <div className="form-field-upload">
      <FormGroup
        className={classnames({
          [className]: true,
          borderless,
        })}
      >
        <div className="img-label-cls">
          <div className="img-title">
            <label className="form-label">
              {label || t('CORE:upload_image')}
            </label>
          </div>
          <div>
            <UploadFile
              hiddenImage
              files={files}
              setFiles={setFiles}
              key={keyImage}
            >
              <Button outline color="success" className="btn-upload">
                <BsFillImageFill size={24} />
                &nbsp;
                {t('ImageEditor:upload')}
              </Button>
            </UploadFile>
          </div>
        </div>
        <>
          {renderFiles()}
          {ErrorField}
        </>
        {children}
      </FormGroup>
    </div>
  );
};

FormFieldUpload.propTypes = {
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

FormFieldUpload.defaultProps = {
  className: '',
  innerclass: '',
  options: [],
  borderLight: false,
  suggestions: [],
  handleChange: () => {},
};

export default FormFieldUpload;
