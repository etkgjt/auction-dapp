import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import { AcceptIcon, CancelIcon, PopupBlockWrapper } from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"
import { getUserData } from "../../../store/user/selector"
import "./styles.scss"
const { innerWidth: width, innerHeight: height } = window
const NewbiePopup = () => {
  const userData = useSelector(getUserData)
  const history = useHistory()
  return (
    <div className="popup-newbie-container">
      <PopupBlockWrapper width={width * 0.3} height={height * 0.5} />
      <div className="popup-newbie-content-wrapper">
        <p>Hãy trở thành Đại sứ Tâm Trí Lực</p>
      </div>
      <div className="newbie-icon-wrapper">
        <div
          className="popup-newbie-button-wrapper margin-right"
          onClick={() => {
            SlideInModal.hide()
            setTimeout(() => {
              history.push("/inviter")
            }, 200)
          }}
        >
          <AcceptIcon />
        </div>
        <div
          className="popup-newbie-button-wrapper"
          onClick={() => {
            SlideInModal.hide()
          }}
        >
          <CancelIcon />
        </div>
      </div>
    </div>
  )
}
export default NewbiePopup
