import React, { useState } from "react"
import { Row, Col, Container } from "reactstrap"
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
import { useMediaQuery } from "react-responsive"
import calendarImg from "../assets/images/calendar.png"
import moment from "moment"
const getEndFridayOfMonth = () => {
  const result = moment().endOf("month")
  while (result.day() !== 4) {
    result.subtract(1, "day")
  }
  return result
}

const Rules = ({ setIsOpen }) => {
  const dispatch = useDispatch()
  const isMobile = useMediaQuery({ maxWidth: 767 })
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
        {isMobile ? (
          <>
            <Col xl="5" lg="5" md="5">
              <div className="event-calendar-container">
                <Row>
                  <Col sm="6" xs="6">
                    <div className="calendar-icon__container">
                      <div style={{ position: "relative" }}>
                        <img
                          src={calendarImg}
                          style={{
                            width: "70%",
                            height: "auto",
                            marginLeft: "15%"
                          }}
                        />
                        <p className="calendar-date">
                          {getEndFridayOfMonth().date()}
                        </p>
                        <p className="calendar-month">
                          {getEndFridayOfMonth().month() + 1}
                        </p>
                      </div>
                      <img
                        src={coinIcon}
                        alt="img"
                        className="calender-coin-icon"
                      />
                    </div>
                  </Col>
                  <Col sm="6" xs="6">
                    <h1 className="calendar-title">Lịch Sự Kiên</h1>
                    <p className="calendar-text-black">
                      Tất cả điểm của các bạn
                      <br /> được tính đến
                    </p>
                  </Col>
                </Row>
                <span className="notic-text-black">{calendar?.value}</span>
                <span
                  className="social-link"
                  onClick={() => {
                    window.open("https://www.facebook.com/tamtriluc/", "_blank")
                  }}
                >
                  <FacebookIcon size={14} />
                  <p>Fanpage Tâm Trí Lực</p>
                </span>
                <span
                  className="social-link"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/nguyenphungphongvn",
                      "_blank"
                    )
                  }}
                >
                  <FacebookIcon size={14} />
                  <p>Facebook Nguyễn Tùng Phong</p>
                </span>
                <span
                  className="social-link"
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/channel/UCM0bv1L91C8-z71gAzrLBCQ",
                      "_blank"
                    )
                  }}
                >
                  <YoutubeIcon size={14} />
                  <p>Youtube Nguyễn Phùng Phong</p>
                </span>
                <span
                  className="social-link"
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/channel/UC-VY_kqMNBaTvMmDYFdUt-A",
                      "_blank"
                    )
                  }}
                >
                  <YoutubeIcon size={14} />
                  <p>Youtube Siêu Trí Nhớ Học Đường</p>
                </span>
              </div>
            </Col>
            <Col xl="7" lg="7" md="7">
              <div className="rules-detail-container">
                <div className="rules-detail__title-container">
                  <RulesTopBannerTitle />
                </div>
                <div
                  className="rules-detail__content"
                  dangerouslySetInnerHTML={{ __html: rules?.value }}
                ></div>
                <div
                  className="rules-details-button-wrapper"
                  onClick={() => setIsOpen(true)}
                >
                  <DetailButton />
                  <span className="rules-details-button-text">
                    Xem Video hướng dẫn
                  </span>
                </div>
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col xl="7" lg="7" md="7">
              <div className="rules-detail-container">
                <div className="rules-detail__title-container">
                  <RulesTopBannerTitle />
                </div>
                <div
                  className="rules-detail__content"
                  dangerouslySetInnerHTML={{ __html: rules?.value }}
                ></div>
                <div
                  className="rules-details-button-wrapper"
                  onClick={() => setIsOpen(true)}
                >
                  <DetailButton />
                  <span className="rules-details-button-text">
                    Xem Video hướng dẫn
                  </span>
                </div>
              </div>
            </Col>
            <Col xl="5" lg="5" md="5">
              <div className="event-calendar-container">
                <h1 className="calendar-title">Lịch Sự Kiên</h1>
                <p className="calendar-text-black">
                  VÒNG QUAY MAY MẮN
                  <br /> được tổ chức vào
                </p>
                <div className="calendar-icon__container">
                  <div style={{ position: "relative" }}>
                    <img
                      src={calendarImg}
                      style={{
                        width: "70%",
                        height: "auto",
                        marginLeft: "15%"
                      }}
                    />
                    <p className="calendar-date">
                      {getEndFridayOfMonth().date()}
                    </p>
                    <p className="calendar-month">
                      {getEndFridayOfMonth().month() + 1}
                    </p>
                  </div>
                  {/* <CalendarIcon /> */}
                  <img
                    src={coinIcon}
                    alt="img"
                    className="calender-coin-icon"
                  />
                </div>

                {/* <p className="notic">Lưu ý:</p> */}

                <span className="notic-text-black">{calendar?.value}</span>
                <div className="my-3" />
                <span
                  className="social-link"
                  onClick={() => {
                    window.open("https://www.facebook.com/tamtriluc/", "_blank")
                  }}
                >
                  <FacebookIcon size={32} />
                  <p>Fanpage Tâm Trí Lực</p>
                </span>
                <span
                  className="social-link"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/nguyenphungphongvn",
                      "_blank"
                    )
                  }}
                >
                  <FacebookIcon size={32} />
                  <p>Facebook Nguyễn Tùng Phong</p>
                </span>
                <span
                  className="social-link"
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/channel/UCM0bv1L91C8-z71gAzrLBCQ",
                      "_blank"
                    )
                  }}
                >
                  <YoutubeIcon size={32} />
                  <p>Youtube Nguyễn Phùng Phong</p>
                </span>
                <span
                  className="social-link"
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/channel/UC-VY_kqMNBaTvMmDYFdUt-A",
                      "_blank"
                    )
                  }}
                >
                  <YoutubeIcon size={32} />
                  <p>Youtube Siêu Trí Nhớ Học Đường</p>
                </span>
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  )
}
export default Rules
