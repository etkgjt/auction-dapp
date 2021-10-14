import React from "react"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { CircleCloseButton, PopupNotiWrapper } from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"
import { getUserData } from "../../../store/user/selector"
import popupInvite from "../../../assets/images/popup-invite.png"

import "./styles.scss"
import { toast } from "react-toastify"
const { innerWidth: width, innerHeight: height } = window
const InvitePopup = () => {
  const userData = useSelector(getUserData)
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
    <div className="invite-popup-container">
      <img src={popupInvite} className="popup-invite-img" />
      <div className="invite-popup-content-wrapper">
        <h1>Mời bạn mới</h1>
        <p>
          Thêm bạn thêm vui!
          <br /> Mời bạn mới và nhận ngay VoiCoin,
          <br /> đổi ngàn quà tặng hấp dẫn
        </p>
        <div className="invite-popup-copyfield-wrapper">
          <div className="invite-popup-copyfield">{`${window.location.origin}/signup/${userData?.codeInvite}`}</div>
          <div
            className="invite-popup-copybutton"
            onClick={() => {
              toast.success("Sao chép thành công", {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              })
              navigator.clipboard.writeText(
                `${window.location.origin}/signup/${userData?.codeInvite}`
              )
            }}
          >
            Sao chép
          </div>
        </div>
      </div>
      <div
        className="invite-popup-close-button"
        onClick={() => SlideInModal.hide()}
      >
        <CircleCloseButton />
      </div>
    </div>
  )
}
export default InvitePopup
