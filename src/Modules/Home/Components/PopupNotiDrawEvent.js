import React from "react"
import { CircleCloseButton, PopupNotiWrapper } from "../../../assets/svg"

import SlideInModal from "../../../components/SlideInModal"
import VoiImg from "../assets/images/voi.png"

const { innerWidth: width, innerHeight: height } = window
const PopupNotiDraw = () => {
  return (
    <div className="popup-noti-draw-container">
      <PopupNotiWrapper width={width * 0.3} height={height * 0.5} />
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
        <h1 className="content-title">THÔNG BÁO LỊCH QUAY SỐ MAY MẮN</h1>
        <p className="content-subtitle">
          Vào thứ 5 cuối tuần mỗi tháng, bạn sẽ có cơ hội tham gia VÒNG QUAY MAY
          MẮN và nhận ngay giải thưởng trị giá 5.000.000đ.
        </p>
        <p className="content-subtitle-bold">
          MỜI CÀNG NHIỀU BẠN CƠ HỘI CÀNG CAO
        </p>
      </div>
    </div>
  )
}
export default PopupNotiDraw
