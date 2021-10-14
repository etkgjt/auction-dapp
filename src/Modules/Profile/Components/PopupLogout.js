import React from "react"
import { useMediaQuery } from "react-responsive"
import { PopupBlockWrapper, AcceptIcon, CancelIcon } from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"
const { innerWidth: width, innerHeight: height } = window
const PopupLogout = ({ onSubmitPress = () => {} }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 })
  const getModalWidth = () => {
    return !isMobile && !isTablet
      ? width * 0.3
      : isMobile
      ? width * 0.9
      : width * 0.6
  }
  const getModalHeight = () => {
    return !isMobile && !isTablet
      ? height * 0.5
      : isMobile
      ? height * 0.4
      : height * 0.4
  }
  return (
    <div className="popup-logout-container">
      <PopupBlockWrapper width={getModalWidth()} height={getModalHeight()} />
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
