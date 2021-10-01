import React from "react"
import { useSelector } from "react-redux"
import { CircleCloseButton, PopupNotiWrapper } from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"
import { getUserData } from "../../../store/user/selector"
import "./styles.scss"
const { innerWidth: width, innerHeight: height } = window
const InvitePopup = () => {
  const userData = useSelector(getUserData)
  return (
    <div className="invite-popup-container">
      <PopupNotiWrapper width={width * 0.3} height={height * 0.5} />
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
            onClick={() =>
              navigator.clipboard.writeText(
                `${window.location.origin}/signup/${userData?.codeInvite}`
              )
            }
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
