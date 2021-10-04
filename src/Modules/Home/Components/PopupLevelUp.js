import React from "react"
import SlideInModal from "../../../components/SlideInModal"

import levelup1 from "../assets/images/levelup1.png"
import levelup2 from "../assets/images/levelup2.png"
import levelup3 from "../assets/images/levelup3.png"
import levelup4 from "../assets/images/levelup4.png"
const getLevelImage = (level) => {
  switch (level) {
    case "level1": {
      return levelup1
    }
    case "level2": {
      return levelup2
    }
    case "level3": {
      return levelup3
    }
    default: {
      return levelup4
    }
  }
}

const PopupLevelUp = ({ data }) => {
  return (
    <div
      className="popup-levelup-container"
      onClick={() => {
        SlideInModal.hide()
      }}
    >
      <img src={getLevelImage(data?.type)} className="popup-levelup-bg" />
      <div className="popup-levelup-content-wrapper">
        <div>{data?.title}</div>
        <p>{data?.content}</p>
      </div>
    </div>
  )
}
export default PopupLevelUp
