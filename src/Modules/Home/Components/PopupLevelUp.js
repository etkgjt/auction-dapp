import React from "react"
import SlideInModal from "../../../components/SlideInModal"

import levelup1 from "../assets/images/levelup1.png"
import levelup2 from "../assets/images/levelup2.png"
import levelup3 from "../assets/images/levelup3.png"
import levelup4 from "../assets/images/levelup4.png"

const PopupLevelUp = () => {
  return (
    <div
      className="popup-levelup-container"
      onClick={() => {
        SlideInModal.hide()
      }}
    >
      <img src={levelup1} className="popup-levelup-bg" />
      <div className="popup-levelup-content-wrapper">
        <div>Chào bạn</div>
        <p>
          Bạn đã lên cấp độ Voi Chăm Chỉ. Hãy tiếp tục chia sẻ Chương Trình Đại
          Sứ Siêu Trí Nhớ Học Đường và dùng điểm đổi các món quà hấp dẫn của Tâm
          Trí Lực nhé!
        </p>
      </div>
    </div>
  )
}
export default PopupLevelUp
