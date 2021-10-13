import React from "react"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { useHistory } from "react-router"
import { AcceptIcon, CancelIcon, PopupBlockWrapper } from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"
import { getUserData } from "../../../store/user/selector"
import "./styles.scss"
const { innerWidth: width, innerHeight: height } = window
const NewbiePopup = () => {
  const userData = useSelector(getUserData)
  const history = useHistory()
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 })
  const getModalWidth = () => {
    return !isMobile && !isTablet
      ? width * 0.3
      : isMobile
      ? width * 0.9
      : width * 0.6
  }
  const getModalHeight = () => {
    return !isMobile && !isTablet
      ? height * 0.5
      : isMobile
      ? height * 0.4
      : height * 0.4
  }
  return (
    <div className="popup-newbie-container">
      <PopupBlockWrapper width={getModalWidth()} height={getModalHeight()} />
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
