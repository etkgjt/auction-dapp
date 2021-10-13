import React from "react"
import { useMediaQuery } from "react-responsive"
import { CircleCloseButton, PopupNotiWrapper } from "../../../assets/svg"

import SlideInModal from "../../../components/SlideInModal"
import VoiImg from "../assets/images/voi.png"

const { innerWidth: width, innerHeight: height } = window
const PopupNotiDraw = ({ data }) => {
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
    <div className="popup-noti-draw-container">
      <PopupNotiWrapper width={getModalWidth()} height={getModalHeight()} />
      <div
        className="popup-noti-draw-close-btn"
        onClick={() => {
          SlideInModal.hide()
        }}
      >
        <CircleCloseButton />
      </div>
      <div className="popup-noti-draw-image-wrapper">
        <img src={VoiImg} className="popup-noti-draw-image" />
      </div>
      <div className="popup-noti-draw-content-wrapper">
        <h1 className="content-title">{data?.title}</h1>
        <p className="content-subtitle">{data?.content}</p>
      </div>
    </div>
  )
}
export default PopupNotiDraw
