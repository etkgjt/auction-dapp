import React from "react"
import voiSilver from "../assets/images/voidaisu-silver.png"
import voiGold from "../assets/images/voidaisu-gold.png"
import voicon from "../assets/images/voicon.png"
import voichamchi from "../assets/images/voichamchi.png"
const Armorial = () => {
  return (
    <div className="profile-armorial-area">
      <h1 className="profile-armorial__title">Huy Hiệu</h1>
      <div className="profile-armorial__list-wrapper">
        <div className="group-icon-row">
          <img src={voicon} alt="image" className="profile-armorial__img1" />
          <img
            src={voichamchi}
            alt="image"
            className="profile-armorial__img2"
          />
        </div>

        <div className="group-icon-column">
          <img src={voiGold} alt="image" className="profile-armorial__img3" />
          <img src={voiSilver} alt="image" className="profile-armorial__img4" />
        </div>
      </div>
    </div>
  )
}
export default Armorial
