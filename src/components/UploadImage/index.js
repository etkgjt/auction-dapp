import React, { useRef, useState, useEffect } from "react"

import { Button, Row, Col } from "reactstrap"
import "./index.scss"
import { useTranslation } from "react-i18next"
import defaultAvatar from "./default-avatar.jpg"
import ImageEditor from "../ImageEditor"
import {
  AvatarWrapper,
  EditAvatarButton
} from "../../Modules/Profile/assets/icon"
import AsyncImage from "../AsyncImage"

const UploadImage = (
  {
    color,
    children,
    setFieldValue,
    field,
    value,
    onChange = () => {},
    handleSubmit = () => {},
    bordered = false
  },
  ref
) => {
  const { i18n } = useTranslation()
  const inputFile = useRef()
  const [src, setSrc] = useState("")
  const [oldSrc, setOldSrc] = useState("")

  const uploadRef = useRef()
  const cropperRef = useRef()

  const toggleInput = () => {
    uploadRef.current.click()
  }
  const onSubmit = (data) => {
    setSrc(data.imgSrc)
    setOldSrc(data.oldSrc)
    onChange(data)
  }

  useEffect(() => {
    let src = defaultAvatar
    if (value) {
      src = value
    }
    setSrc(src)
  }, [value])
  const onFileChange = (e) => {
    if (e.target.files[0]) {
      setOldSrc(e.target.files[0])
    }
  }

  React.useImperativeHandle(ref, () => {
    return {
      submitCrop: cropperRef.current?.handleSave
    }
  })

  return (
    <Row className="upload_image" noGutters>
      <Col xs={12}>
        <div className="upload_image_wrapper">
          <AvatarWrapper />
          <div
            className="profile-form-edit-avatar-button"
            onClick={toggleInput}
          >
            <EditAvatarButton />
          </div>
          {oldSrc ? (
            <div className="upload_image_inner">
              <ImageEditor
                ref={cropperRef}
                image={oldSrc}
                onSubmit={onSubmit}
                setOldSrc={setOldSrc}
              />
            </div>
          ) : (
            <img src={src} alt="avatar" className={"upload_image_inner"} />
          )}
        </div>
      </Col>

      {/* <Col xs={12}>
        {children ? (
          <div onClick={toggleInput}>{children}</div>
        ) : (
          <Button color={color} onClick={toggleInput}>
            {i18n.t("button:upload_image")}
          </Button>
        )}
      </Col> */}
      <input
        onClick={(e) => {
          e.target.value = null
        }}
        style={{ position: "absolute", opacity: 0, bottom: 0, width: 0 }}
        multiple
        accept="image/*"
        ref={uploadRef}
        id="uploadPhoto"
        type="file"
        onChange={onFileChange}
      />
    </Row>
  )
}

export default React.forwardRef(UploadImage)
