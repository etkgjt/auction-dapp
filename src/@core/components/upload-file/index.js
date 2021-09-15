import './index.scss';

import React from 'react';

/*Hooks*/
import { useTranslation } from 'react-i18next';

/*Proptypes*/
import PropTypes from 'prop-types';

/*Components*/
import { Button, Row } from 'reactstrap';
import Dropzone from 'react-dropzone';
import { BsFillImageFill } from 'react-icons/bs';

import uploadImage from '@utility/uploadFiles';

const UploadFile = ({
  accept = 'image/*,video/*',
  files,
  setFiles,
  children,
  keyImage = 'url',
}) => {
  const { t } = useTranslation();

  const onDrop = (acceptedFiles, rejectedFiles) => {
    acceptedFiles.map(async (file) => {
      const url = await uploadImage(file, `/upload`, file.name);
      setFiles(files.concat({ [keyImage]: url }));
    });
  };

  return (
    <Row className="upload_image" noGutters>
      <Dropzone accept={accept} onDrop={onDrop}>
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => {
          const additionalClass = isDragAccept
            ? 'accept'
            : isDragReject
            ? 'reject'
            : '';

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              <input {...getInputProps()} />
              {children ? (
                children
              ) : (
                <Button outline color="success" className="btn-upload">
                  <BsFillImageFill size={24} />
                  &nbsp;
                  {t('ImageEditor:upload')}
                </Button>
              )}
            </div>
          );
        }}
      </Dropzone>
    </Row>
  );
};

UploadFile.propTypes = {
  color: PropTypes.string,
  btnText: PropTypes.string,
  children: PropTypes.node,
  setFieldValue: PropTypes.func,
  field: PropTypes.string,
  value: PropTypes.any,
};

UploadFile.defaultProps = {
  color: 'primary',
  btnText: '',
};

export default UploadFile;
