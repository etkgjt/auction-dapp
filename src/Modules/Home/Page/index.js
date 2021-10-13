import "../bootstrap.scss"
import "../responsive.scss"

import React, { useState } from "react"
import Banner from "@Modules/Home/Components/Banner"
import Reason from "@Modules/Home/Components/Reason"
import Rules from "@Modules/Home/Components/Rules"
import News from "@Modules/Home/Components/News"

import { actions as NotiAction } from "../../../Modules/Notification/Store/Notification/reducer"
import { useDispatch, useSelector } from "react-redux"
import {
  getIsShowedPopupNewbie,
  getUserData
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
      <br /> trị giá 5.000.000đ."
    </>
  )
}

const Home = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector(loginSuccessSelector)
  const userData = useSelector(getUserData)
  const countNoti = useSelector(getCountNotiSelector)
  const { notification } = countNoti

  const [firstTime, setFirstTime] = useState(true)
  const countLoading = useSelector(getCountNotiLoadingSelector)
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
          <PopupNoti data={notification} />,
          "home-noti-popup-modal-wrapper",
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

  React.useEffect(() => {
    if (isWedDayOrSunDay && isFetched && !notification && firstTime) {
      SlideInModal.show(
        () => {},
        <PopupNotiDrawEvent data={eventData} />,
        "popup-voucher-modal-wrapper",
        () => {
          dispatch(NotiAction.setCountUnreadNoti({}))
          setFirstTime(false)
        }
      )
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
