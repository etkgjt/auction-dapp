import React from "react"
import { useSelector } from "react-redux"
import SlideInModal from "../../../components/SlideInModal"
import { getUserData } from "../../../store/user/selector"
import {
  UserPointWrapper,
  ButtonWrapper,
  ButtonWrapperWhite,
  ButtonWrapperBlue
} from "../assets/icon"
import PopupHistory from "./PopupHistory"

const ORIGIN_WIDTH = 952
const PROGRESS_WIDTH = (window.innerWidth * 0.84) / 2 - 70

const ratio = PROGRESS_WIDTH / ORIGIN_WIDTH

const Progress = () => {
  const userData = useSelector(getUserData)

  const onHistoryPress = () => {
    SlideInModal.show(() => {}, <PopupHistory />, "popup-history-modal-wrapper")
  }

  return (
    <div className="gifts-progress-area">
      <div className="gifts-progress__point-container">
        <div className="gifts-progress__point-wrapper">
          <UserPointWrapper />
          <p className="gifts-progress__point">{`${userData?.totalPoint}k`}</p>
        </div>
      </div>

      <div className="gifts-progress__button-wrapper">
        <ButtonWrapper />
        <p className="gifts-progress__button-text">Nhận thêm voi Coin</p>
      </div>
      <div className="gifts-progress__button-wrapper" onClick={onHistoryPress}>
        <ButtonWrapperBlue />
        <p className="gifts-progress__button-text">Lịch sử nhận/ đổi Voicoin</p>
      </div>
      <div className="gifts-progress__button-wrapper">
        <ButtonWrapperWhite />
        <p className="gifts-progress__button-text--red">Liên hện hỗ trợ</p>
      </div>
    </div>
  )
}
export default Progress
