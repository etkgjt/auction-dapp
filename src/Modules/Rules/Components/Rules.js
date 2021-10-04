import React from "react"
import { Row, Col } from "reactstrap"
import {
  RulesTopBannerTitle,
  CalendarIcon,
  FacebookIcon,
  YoutubeIcon,
  DetailButton
} from "../assets/icon"

import coinIcon from "../assets/images/coin-icon.png"

import {
  getListLoadingSelector,
  getListSelector
} from "../../Home/Store/Rules/selector"
import { actions } from "../../Home/Store/Rules/reducer"
import { useDispatch, useSelector } from "react-redux"

import { actions as calendarActions } from "../Store/EventCalendar/reducer"
import {
  getListSelector as getCalendar,
  getListLoadingSelector as getCalendarLoading
} from "../Store/EventCalendar/selector"

const Rules = () => {
  const dispatch = useDispatch()

  const rules = useSelector(getListSelector)
  const rulesLoading = useSelector(getListLoadingSelector)

  const calendar = useSelector(getCalendar)
  const calendarLoading = useSelector(getCalendarLoading)

  React.useEffect(() => {
    dispatch(actions.getList())
    dispatch(calendarActions.getList())
  }, [])

  return (
    <div className="rules-area">
      <Row>
        <Col xl="7" lg="7" md="7">
          <div className="rules-detail-container">
            <div className="rules-detail__title-container">
              <RulesTopBannerTitle />
            </div>
            <div dangerouslySetInnerHTML={{ __html: rules?.value }}></div>
          </div>
        </Col>
        <Col xl="5" lg="5" md="5">
          <div className="event-calendar-container">
            <h1 className="calendar-title">Lịch Sự Kiên</h1>
            <p className="calendar-text-black">
              Tất cả điểm của các bạn
              <br /> được tính đến
            </p>
            <div className="calendar-icon__container">
              <CalendarIcon />
              <img src={coinIcon} alt="img" className="calender-coin-icon" />
            </div>

            {/* <p className="notic">Lưu ý:</p> */}

            <span className="notic-text-black">{calendar?.value}</span>
            <div className="my-3" />
            <span
              className="social-link"
              onClick={() => {
                window.location.assign("https://www.facebook.com/tamtriluc/")
              }}
            >
              <FacebookIcon size={32} />
              <p>Fanpage Tâm Trí Lực</p>
            </span>
            <span
              className="social-link"
              onClick={() => {
                window.location.assign(
                  "https://www.facebook.com/nguyenphungphongvn"
                )
              }}
            >
              <FacebookIcon size={32} />
              <p>Facebook Nguyễn Tùng Phong</p>
            </span>
            <span
              className="social-link"
              onClick={() => {
                window.location.assign(
                  "https://www.youtube.com/channel/UCM0bv1L91C8-z71gAzrLBCQ"
                )
              }}
            >
              <YoutubeIcon size={32} />
              <p>Youtube Nguyễn Phùng Phong</p>
            </span>
            <span
              className="social-link"
              onClick={() => {
                window.location.assign(
                  "https://www.youtube.com/channel/UC-VY_kqMNBaTvMmDYFdUt-A"
                )
              }}
            >
              <YoutubeIcon size={32} />
              <p>Youtube Siêu Trí Nhớ Học Đường</p>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Rules
