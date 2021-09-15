import './index.scss';

import React, { useRef, useState, useEffect } from 'react';

/*Hooks*/
import { useTranslation } from 'react-i18next';

/*Proptypes*/
import PropTypes from 'prop-types';

/*Components*/
import { Button, Row, Col, Modal, ModalBody } from 'reactstrap';
import ImageEditor from '../image-editor';

const UploadImage = ({
  color,
  children,
  setFieldValue,
  field,
  hiddenImage,
  value,
}) => {
  const { i18n } = useTranslation();
  const inputFile = useRef();
  const [src, setSrc] = useState('');
  const [oldSrc, setOldSrc] = useState('');
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal((prevState) => !prevState);
  const onSubmit = (data) => {
    setSrc(data.imgSrc);
    setOldSrc(data.oldSrc);
    toggleModal();
    // setFieldValue(field, data)
  };

  useEffect(() => {
    let src = '';
    // if (value instanceof File) {
    //     src = URL.createObjectURL(value);
    // }
    if (value) {
      src = value;
    }
    setOldSrc(src);
    setSrc(src);
  }, [value]);

  return (
    <Row className="upload_image" noGutters>
      {!hiddenImage && (
        <Col xs={12}>
          <img src={src} alt="" />
        </Col>
      )}
      <Col xs={12}>
        {children ? (
          <div onClick={toggleModal}>{children}</div>
        ) : (
          <Button color={color} onClick={toggleModal}>
            {i18n.t('CORE:upload')}
          </Button>
        )}
        {/* <input 
                    accept='image/*'
                    ref={inputFile} 
                    name={field} 
                    type="file"
                    hidden 
                    onChange={(event) => {
                        return typeof setFieldValue === "function" && setFieldValue(field, event.currentTarget.files[0])
                    }} /> */}
      </Col>
      <Modal
        size="sm"
        className="text-center"
        isOpen={modal}
        toggle={toggleModal}
        className="modal-dialog-centered"
      >
        <ModalBody>
          <ImageEditor image={oldSrc} onSubmit={onSubmit} />
        </ModalBody>
      </Modal>
    </Row>
  );
};

UploadImage.propTypes = {
  color: PropTypes.string,
  btnText: PropTypes.string,
  children: PropTypes.node,
  setFieldValue: PropTypes.func,
  field: PropTypes.string,
  value: PropTypes.any,
};

UploadImage.defaultProps = {
  color: 'primary',
  btnText: '',
};

export default UploadImage;
