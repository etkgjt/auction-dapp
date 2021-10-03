import React from "react"
import {
  UserPointWrapper,
  DoneProgressBar,
  PendingProgressBar,
  ButtonWrapper
} from "../assets/icon"
import voiSilver from "../assets/images/voidaisu-silver.png"
import voiGold from "../assets/images/voidaisu-gold.png"
import { getUserData } from "../../../store/user/selector"
import { useSelector } from "react-redux"
const ORIGIN_WIDTH = 952
const PROGRESS_WIDTH = (window.innerWidth * 0.84) / 2 - 100

const ratio = PROGRESS_WIDTH / ORIGIN_WIDTH

const Progress = () => {
  const userData = useSelector(getUserData)

  const percent = userData?.levelProgress * 100
  const getProgessbarWidth = () => {
    return parseInt((ORIGIN_WIDTH / 100) * percent) * ratio
  }
  console.log("USER DATA", userData)
  return (
    <div className="profile-progress-area">
      <h1 className="profile-progress__title">Hành trình</h1>
      <div className="profile-progress__point-wrapper">
        <UserPointWrapper />
        <p className="profile-progress__point">{`${userData?.totalPoint}k`}</p>
      </div>
      <div className="profile-progress__progress-bar-wrapper">
        <div style={{ width: "100%", overflow: "hidden" }}>
          <PendingProgressBar />
        </div>
        <div className="profile-progress__done-progress-wrapper">
          <DoneProgressBar width={getProgessbarWidth()} />
        </div>
        <div className="profile-progress__left-icon-wrapper">
          <img src={voiSilver} width={78} height={50} alt="icon" />
        </div>
        <div className="profile-progress__right-icon-wrapper">
          <img src={voiGold} alt="icon" width={78} height={50} />
        </div>
      </div>
      <div className="profile-progress__button-wrapper">
        <ButtonWrapper />
        <p className="profile-progress__button-text">Nhận thêm voi Coin</p>
      </div>
    </div>
  )
}
export default Progress
