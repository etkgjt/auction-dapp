import React from "react"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { useHistory } from "react-router"
import { AcceptIcon, CancelIcon, PopupBlockWrapper } from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"
import { getUserData } from "../../../store/user/selector"

import popupRed from "../../../assets/images/popup-red.png"

import "./styles.scss"
const { innerWidth: width, innerHeight: height } = window
const NewbiePopup = () => {
  const userData = useSelector(getUserData)
  const history = useHistory()
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
    <div className="popup-newbie-container">
      <img src={popupRed} className="popup-newbie-wrapper" />
      <div className="popup-newbie-content-wrapper">
        <p className="popup-newbie-title">Chúc mừng bạn mới</p>
        <p className="popup-newbie-content">
          Chào mừng bạn đã tham gia sân chơi Đại Sứ Siêu Trí Nhớ Học Đường. BTC
          đã chuẩn bị và dành tặng cho bạn những món quà bất ngờ. Để nhận quà,
          bạn hãy thực hiện ngay nhiệm vụ được giao theo hướng dẫn dưới đây
          nhé!!!
        </p>
        <p className="popup-newbie-subtitle">
          TẢI APP TÂM TRÍ LỰC VÀ TRẢI NGHIỆM SIÊU TRÍ NHỚ HỌC ĐƯỜNG
        </p>
      </div>
      <div className="newbie-icon-wrapper">
        <div
          className="popup-newbie-button-wrapper margin-right"
          onClick={() => {
            SlideInModal.hide()
            setTimeout(() => {
              history.push("/inviter")
            }, 200)
          }}
        >
          <AcceptIcon />
        </div>
        <div
          className="popup-newbie-button-wrapper"
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
export default NewbiePopup
