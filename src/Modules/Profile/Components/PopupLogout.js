import React from "react"
import { useMediaQuery } from "react-responsive"
import { PopupBlockWrapper, AcceptIcon, CancelIcon } from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"

import popupRed from "../../../assets/images/popup-red.png"
const { innerWidth: width, innerHeight: height } = window

const PopupLogout = ({ onSubmitPress = () => {} }) => {
  return (
    <div className="popup-logout-container">
      <img src={popupRed} className="popup-loggout-image-wrapper" />
      <div className="popup-logout-content-wrapper">
        <p>Bạn có muốn đăng xuất ?</p>
      </div>
      <div className="logout-icon-wrapper">
        <div
          className="popup-logout-button-wrapper margin-right"
          onClick={onSubmitPress}
        >
          <AcceptIcon />
        </div>
        <div
          className="popup-logout-button-wrapper"
          onClick={() => {
            SlideInModal.hide()
          }}
        >
          <CancelIcon />
        </div>
      </div>
    </div>
  )
}
export default PopupLogout
