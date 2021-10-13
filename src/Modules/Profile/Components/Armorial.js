import React from "react"
import voiSilver from "../assets/images/voidaisu-silver.png"
import voiGold from "../assets/images/voidaisu-gold.png"
import voicon from "../assets/images/voicon.png"
import voichamchi from "../assets/images/voichamchi.png"

import d1 from "../assets/images/d1.png"
import d2 from "../assets/images/d2.png"
import d3 from "../assets/images/d3.png"
import d4 from "../assets/images/d4.png"

import { useSelector } from "react-redux"
import { getUserData } from "../../../store/user/selector"
const Armorial = () => {
  const userData = useSelector(getUserData)
  const currentPos = userData?.level?.position
  return (
    <div className="profile-armorial-area">
      <h1 className="profile-armorial__title">Huy Hiệu</h1>
      <div className="profile-armorial__list-wrapper">
        <div className="group-icon-row">
          <img
            src={currentPos >= 1 ? voicon : d1}
            alt="image"
            className="profile-armorial__img1"
          />
          <img
            src={currentPos >= 2 ? voichamchi : d2}
            alt="image"
            className="profile-armorial__img2"
          />
        </div>

        <div className="group-icon-column">
          <img
            src={currentPos >= 3 ? voiGold : d3}
            alt="image"
            className="profile-armorial__img3"
          />
          <img
            src={currentPos >= 4 ? voiSilver : d4}
            alt="image"
            className="profile-armorial__img4"
          />
        </div>
      </div>
    </div>
  )
}
export default Armorial
