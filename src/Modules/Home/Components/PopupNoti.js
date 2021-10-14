import React from "react"
import { useMediaQuery } from "react-responsive"
import {
  PopupBlockWrapper,
  CircleCloseButton,
  CancelIcon
} from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"
const { innerWidth: width, innerHeight: height } = window
const PopupNoti = ({ onSubmitPress = () => {}, data = {} }) => {
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
    <div
      className="popup-home-noti-container"
      style={{ width: getModalWidth(), height: getModalHeight() }}
    >
      <PopupBlockWrapper width={getModalWidth()} height={getModalHeight()} />
      <div className="popup-home-noti-content-wrapper">
        <h2>{data?.title}</h2>
        <p>{data?.content}</p>
      </div>

      <div
        className="popup-home-noti-button-wrapper"
        onClick={() => {
          SlideInModal.hide()
        }}
      >
        <CircleCloseButton />
      </div>
    </div>
  )
}
export default PopupNoti
