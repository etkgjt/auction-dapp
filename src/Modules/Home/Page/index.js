import "../bootstrap.scss"

import React from "react"
import Banner from "@Modules/Home/Components/Banner"
import Reason from "@Modules/Home/Components/Reason"
import Rules from "@Modules/Home/Components/Rules"
import News from "@Modules/Home/Components/News"

import { actions as NotiAction } from "../../../Modules/Notification/Store/Notification/reducer"
import { useDispatch, useSelector } from "react-redux"
import { getUserData } from "../../../store/user/selector"
import { getCountNotiSelector } from "../../Notification/Store/Notification/selector"

import PopupNoti from "../Components/PopupNoti"
import PopupVoucher from "../Components/PopupVoucher"
import SlideInModal from "../../../components/SlideInModal"
const Home = () => {
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const countNoti = useSelector(getCountNotiSelector)
  const { notification } = countNoti

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  React.useEffect(() => {
    dispatch(
      NotiAction.getCountUnreadNoti({
        userid: userData?.userId
      })
    )
  }, [])

  React.useEffect(() => {
    if (notification) {
      if (notification.type === "popup") {
        SlideInModal.show(
          () => {},
          <PopupNoti data={notification} />,
          "home-noti-popup-modal-wrapper"
        )
      } else {
        SlideInModal.show(
          () => {},
          <PopupVoucher />,
          "popup-voucher-modal-wrapper"
        )
      }
    }
  }, [notification])

  return (
    <div className="home__page">
      <Banner />
      <Reason />
      <Rules />
      <News />
    </div>
  )
}
export default Home
