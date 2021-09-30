import React from "react"
import {
  UserPointWrapper,
  ButtonWrapper,
  ButtonWrapperWhite,
  ButtonWrapperBlue
} from "../assets/icon"
import voiSilver from "../assets/images/voidaisu-silver.png"
import voiGold from "../assets/images/voidaisu-gold.png"
const ORIGIN_WIDTH = 952
const PROGRESS_WIDTH = (window.innerWidth * 0.84) / 2 - 70

const ratio = PROGRESS_WIDTH / ORIGIN_WIDTH

const Progress = () => {
  const percent = 55
  const getProgessbarWidth = () => {
    return parseInt((ORIGIN_WIDTH / 100) * percent) * ratio
  }

  return (
    <div className="gifts-progress-area">
      <div className="gifts-progress__point-container">
        <div className="gifts-progress__point-wrapper">
          <UserPointWrapper />
          <p className="gifts-progress__point">340K</p>
        </div>
      </div>

      <div className="gifts-progress__button-wrapper">
        <ButtonWrapper />
        <p className="gifts-progress__button-text">Nhận thêm voi Coin</p>
      </div>
      <div className="gifts-progress__button-wrapper">
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
