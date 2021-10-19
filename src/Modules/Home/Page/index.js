import "../bootstrap.scss"
import "../responsive.scss"

import React, { useState } from "react"
import Banner from "@Modules/Home/Components/Banner"
import Reason from "@Modules/Home/Components/Reason"
import Rules from "@Modules/Home/Components/Rules"
import News from "@Modules/Home/Components/News"
import Intro from "@Modules/Home/Components/Intro"

import { actions as NotiAction } from "../../../Modules/Notification/Store/Notification/reducer"
import { useDispatch, useSelector } from "react-redux"
import {
  getIsShowedPopupNewbie,
  getUserData,
  getIsShowedPopupDrawEvent
} from "../../../store/user/selector"
import {
  getCountNotiSelector,
  getCountNotiLoadingSelector
} from "../../Notification/Store/Notification/selector"

import PopupNoti from "../Components/PopupNoti"
import PopupVoucher from "../Components/PopupVoucher"
import PopupLevelUp from "../Components/PopupLevelUp"
import PopupNotiDrawEvent from "../Components/PopupNotiDrawEvent"

import SlideInModal from "../../../components/SlideInModal"
import { loginSuccessSelector } from "../../Authenticate/store/auth/selectors"
import moment from "moment"

import PopupNewbie from "../../../layouts/components/popupNewbie"
import { actions as userActions } from "../../../store/user/reducer"

import bgLeft from "../assets/images/bg-left.png"
import bgRight from "../assets/images/bg-right.png"

import { getReadNotify } from "@store/common/selectors"
import { readNotifyAction } from "@store/common/actions"

const getEndFridayOfMonth = () => {
  const result = moment().endOf("month")

  while (result.day() !== 4) {
    result.subtract(1, "day")
  }
  return result
}

const eventData = {
  title: (
    <>
      THÔNG BÁO
      <br />
      LỊCH QUAY SỐ MAY MẮN
    </>
  ),
  content: (
    <>
      Vào ngày
      {getEndFridayOfMonth().format(" DD/MM/YYYY")}
      , bạn sẽ có cơ hội
      <br /> tham gia VÒNG QUAY MAY MẮN <br /> và nhận ngay giải thưởng
      <br /> trị giá 5.000.000đ.
    </>
  )
}

const Home = () => {
  const dispatch = useDispatch()

  const isLogin = useSelector(loginSuccessSelector)
  const userData = useSelector(getUserData)
  const readNotify = useSelector((state) => getReadNotify(state))
  const isShowPopupEvent = useSelector(getIsShowedPopupDrawEvent)

  const countNoti = useSelector(getCountNotiSelector)
  const { notification } = countNoti
  const countLoading = useSelector(getCountNotiLoadingSelector)

  const [firstTime, setFirstTime] = useState(true)
  const isWedDayOrSunDay = moment().day() === 3 || moment().day() === 0

  const [isFetched, setIsFetched] = useState(false)
  const [isStartFetch, setIsStartFetch] = useState(false)

  const isShowedNewBie = useSelector(getIsShowedPopupNewbie)

  React.useEffect(() => {
    dispatch(NotiAction.setCountNotiLoading(true))
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    if (isLogin && userData?.userId) {
      setIsFetched(false)
      setFirstTime(true)
      setIsStartFetch(true)
      dispatch(
        NotiAction.getCountUnreadNoti({
          userid: userData?.userId
        })
      )
    }
  }, [isLogin, userData?.userId])

  React.useEffect(() => {
    if (isStartFetch && !countLoading) {
      setIsFetched(true)
    }
  }, [isStartFetch, countLoading])

  React.useEffect(() => {
    if (notification) {
      setFirstTime(false)
      dispatch(readNotifyAction(true))
      if (notification.type === "popup") {
        SlideInModal.show(
          () => {},
          <PopupNoti data={notification} />,
          "home-noti-popup-modal-wrapper",
          () => {
            dispatch(NotiAction.setCountUnreadNoti({}))
          }
        )
      } else if (notification.type === "level1") {
        SlideInModal.show(
          () => {},
          <PopupLevelUp data={notification} />,
          "popup-voucher-modal-wrapper",
          () => {
            setTimeout(() => {
              SlideInModal.show(
                () => {},
                <PopupVoucher />,
                "popup-voucher-modal-wrapper",
                () => {
                  dispatch(NotiAction.setCountUnreadNoti({}))
                }
              )
            }, 200)
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
      } else if (notification.type === "gift") {
        SlideInModal.show(
          () => {},
          <PopupNewbie data={notification} isTicket={true} />,
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
  }, [countNoti])

  React.useEffect(() => {
    if (
      isWedDayOrSunDay &&
      isFetched &&
      !notification &&
      firstTime &&
      !readNotify &&
      !isShowPopupEvent &&
      isLogin
    ) {
      SlideInModal.show(
        () => {},
        <PopupNotiDrawEvent data={eventData} />,
        "popup-voucher-modal-wrapper",
        () => {
          dispatch(readNotifyAction(true))
          dispatch(NotiAction.setCountUnreadNoti({}))
          setFirstTime(false)
          dispatch(userActions.setIsShowPopupDrawEvent(true))
        }
      )
    } else if (isFetched) {
      setFirstTime(false)
      dispatch(readNotifyAction(true))
    }
  }, [notification, isFetched])

  React.useEffect(() => {
    if (
      ((!firstTime && isWedDayOrSunDay) ||
        (!isWedDayOrSunDay && !notification)) &&
      userData?.flagDaisu === 0 &&
      !isShowedNewBie
    ) {
      SlideInModal.show(
        () => {},
        <PopupNewbie />,
        "invite-popup-modal-wrapper",
        () => {
          dispatch(userActions.setIsShowPopuoNewBie(true))
        }
      )
    }
  }, [firstTime])

  console.log("HOME INFO", userData)

  return (
    <div className="home__page">
      <img src={bgLeft} style={{ position: "fixed", left: 0, zIndex: -1 }} />
      <img
        src={bgRight}
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: -1 }}
      />
      <Banner />
      <Reason />
      <Intro />
      <Rules />
      <News />
    </div>
  )
}
export default Home
