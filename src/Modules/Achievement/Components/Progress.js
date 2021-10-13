import React from "react"
import {
  UserPointWrapper,
  DoneProgressBar,
  PendingProgressBar,
  ButtonWrapper
} from "../assets/icon"
// import voiSilver from "../assets/images/voidaisu-silver.png"
// import voiGold from "../assets/images/voidaisu-gold.png"
import { getUserData } from "../../../store/user/selector"
import { useSelector } from "react-redux"
import PopupInvite from "../../../layouts/components/popupInvite"
import PopupNewBie from "../../../layouts/components/popupNewbie"
import SlideInModal from "../../../components/SlideInModal"

import voi4 from "../assets/images/voidaisu-silver.png"
import voi3 from "../assets/images/voidaisu-gold.png"
import voi1 from "../assets/images/voicon.png"
import voi2 from "../assets/images/voichamchi.png"

import pending from "../assets/images/pending.png"
import done from "../assets/images/done.png"

const ORIGIN_WIDTH = 952
const PROGRESS_WIDTH = (window.innerWidth * 0.84) / 2 - 70

const ratio = PROGRESS_WIDTH / ORIGIN_WIDTH

const Progress = () => {
  const userData = useSelector(getUserData)

  const percent =
    userData?.levelProgress * 100 > 100 ? 100 : userData?.levelProgress * 100
  const getProgessbarWidth = () => {
    return parseInt((ORIGIN_WIDTH / 100) * percent) * ratio
  }

  const onVoicoinClick = () => {
    if (userData?.flagDaisu === 1) {
      SlideInModal.show(() => {}, <PopupInvite />, "invite-popup-modal-wrapper")
    } else {
      SlideInModal.show(() => {}, <PopupNewBie />, "invite-popup-modal-wrapper")
    }
  }

  const currentPos = userData?.level?.position
  const getProgressImage = () => {
    if (currentPos === 0) {
      return {
        start: null,
        end: voi1
      }
    }
    if (currentPos === 1) {
      return {
        start: voi1,
        end: voi2
      }
    }
    if (currentPos === 2) {
      return {
        start: voi2,
        end: voi3
      }
    }
    if (currentPos === 3) {
      return {
        start: voi3,
        end: voi4
      }
    }
    return {
      start: null,
      end: voi1
    }
  }
  return (
    <div className="profile-progress-area">
      <h1 className="profile-progress__title">Hành trình</h1>
      <div className="profile-progress__point-wrapper">
        <UserPointWrapper />
        <p className="profile-progress__point">{`${userData?.totalVoicoin}k`}</p>
      </div>
      <div className="profile-progress__progress-bar-wrapper">
        <div style={{ width: "100%", overflow: "hidden" }}>
          <img src={pending} width="100%" className="pending-progress" />
        </div>
        <div className="profile-progress__done-progress-wrapper">
          <img
            src={done}
            width={getProgessbarWidth()}
            className="done-progress"
          />
        </div>
        <div className="profile-progress__left-icon-wrapper">
          {getProgressImage().start ? (
            <img
              src={getProgressImage().start}
              width={78}
              height={50}
              alt="icon"
            />
          ) : null}
        </div>
        <div className="profile-progress__right-icon-wrapper">
          <img src={getProgressImage().end} alt="icon" width={78} height={50} />
        </div>
      </div>
      <div
        className="profile-progress__button-wrapper"
        onClick={onVoicoinClick}
      >
        <ButtonWrapper />
        <p className="profile-progress__button-text">Nhận thêm voi Coin</p>
      </div>
    </div>
  )
}
export default Progress
