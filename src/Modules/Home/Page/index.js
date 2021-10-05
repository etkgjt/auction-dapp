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
import PopupLevelUp from "../Components/PopupLevelUp"
import PopupNotiDrawEvent from "../Components/PopupNotiDrawEvent"

import SlideInModal from "../../../components/SlideInModal"
import { loginSuccessSelector } from "../../Authenticate/store/auth/selectors"
const Home = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector(loginSuccessSelector)
  const userData = useSelector(getUserData)
  const countNoti = useSelector(getCountNotiSelector)
  const { notification } = countNoti

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  React.useEffect(() => {
    if (isLogin)
      dispatch(
        NotiAction.getCountUnreadNoti({
          userid: userData?.userId
        })
      )
  }, [isLogin])

  React.useEffect(() => {
    if (notification) {
      if (notification.type === "popup") {
        SlideInModal.show(
          () => {},
          <PopupNoti data={notification} />,
          "home-noti-popup-modal-wrapper",
          () => {
            dispatch(NotiAction.setCountUnreadNoti({}))
          }
        )
      } else if (notification.type === "voucher") {
        SlideInModal.show(
          () => {},
          <PopupVoucher />,
          "popup-voucher-modal-wrapper",
          () => {
            dispatch(NotiAction.setCountUnreadNoti({}))
          }
        )
      } else if (notification.type === "event") {
        SlideInModal.show(
          () => {},
          <PopupNotiDrawEvent data={notification} />,
          "popup-voucher-modal-wrapper",
          () => {
            dispatch(NotiAction.setCountUnreadNoti({}))
          }
        )
      } else {
        SlideInModal.show(
          () => {},
          <PopupLevelUp data={notification} />,
          "popup-voucher-modal-wrapper",
          () => {
            dispatch(NotiAction.setCountUnreadNoti({}))
          }
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
