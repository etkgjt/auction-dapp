import React from "react"
import { PopupBlockWrapper, AcceptIcon, CancelIcon } from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"
const { innerWidth: width, innerHeight: height } = window
const PopupLogout = ({ onSubmitPress = () => {} }) => {
  return (
    <div className="popup-logout-container">
      <PopupBlockWrapper width={width * 0.3} height={height * 0.4} />
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
