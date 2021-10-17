import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { PopupBlockWrapper, AcceptIcon, CancelIcon } from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"

import popupRed from "../../../assets/images/popup-red.png"
const { innerWidth: width, innerHeight: height } = window

const PopupDownload = ({ data = {} }) => {
  const [error, setError] = useState(false)
  const [version, setVersion] = useState()
  const onChoose32 = () => {
    setError(false)
    setVersion("32")
    window.open(data?.link_TaiDesktop32Bit, "_blank")
    SlideInModal.hide()
  }

  const onChoose64 = () => {
    setError(false)
    setVersion("64")
    window.open(data?.link_TaiDesktop, "_blank")
    SlideInModal.hide()
  }

  const onCancel = () => {
    setError(false)
    setVersion(undefined)
    SlideInModal.hide()
  }

  const onSubmit = () => {
    if (version) {
      if (version === "32") {
        window.open(data?.link_TaiDesktop32Bit, "_blank")
      }
      if (version === "64") {
        window.open(data?.link_TaiDesktop, "_blank")
      }
      SlideInModal.hide()
    } else {
      setError(true)
    }
  }

  return (
    <div className="popup-download-container">
      <div className="popup-download-content-wrapper">
        <div className="popup-download-content-wrapper__title">
          Chọn phiên bản phù hợp?
        </div>
        <div className="popup-download-content-wrapper__content">
          <div
            className={`popup-download-content-wrapper__content32 ${
              version === "32" ? "choose" : ""
            } btn-version`}
            onClick={onChoose32}
          >
            32-BIT
          </div>
          <div
            className={`popup-download-content-wrapper__content64 ${
              version === "64" ? "choose" : ""
            } btn-version`}
            onClick={onChoose64}
          >
            64-BIT
          </div>
        </div>
        {error && (
          <div className="popup-download-content-wrapper__error">
            Vui lòng chọn phiên bản download
          </div>
        )}
      </div>
      <div className="download-icon-wrapper">
        <div
          className="popup-download-button-wrapper margin-right"
          onClick={onCancel}
        >
          <CancelIcon />
        </div>
        <div className="popup-download-button-wrapper" onClick={onSubmit}>
          <AcceptIcon />
        </div>
      </div>
    </div>
  )
}
export default PopupDownload
