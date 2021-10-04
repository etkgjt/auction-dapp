import React from "react"
import {
  PopupBlockWrapper,
  CircleCloseButton,
  CancelIcon
} from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"
const { innerWidth: width, innerHeight: height } = window
const PopupNoti = ({ onSubmitPress = () => {}, data = {} }) => {
  return (
    <div className="popup-home-noti-container">
      <PopupBlockWrapper width={width * 0.3} height={height * 0.4} />
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
