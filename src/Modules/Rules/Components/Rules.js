import React, { useRef, useState } from "react"
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

import table1 from "../assets/images/table1.png"
import bangtuan from "../assets/images/bangtuan.png"
import bangquy from "../assets/images/bangquy.png"
import bangthang from "../assets/images/bangthang.png"
import gifts from "../assets/images/gifts.png"

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

  const calendarRef = useRef()
  const rulesRef = useRef()

  const stickyCalendar = (e) => {
    if (isMobile) return
    if (window.scrollY > rulesRef?.current?.offsetTop) {
      calendarRef.current.style.position = "fixed"
      calendarRef.current.style.top = 0
    } else {
      calendarRef.current.style.position = "static"
    }
  }

  React.useEffect(() => {
    dispatch(actions.getList())
    dispatch(calendarActions.getList())
  }, [])

  React.useEffect(() => {
    window.addEventListener("scroll", stickyCalendar)
    return () => {
      window.removeEventListener("scroll", stickyCalendar)
    }
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
                <div className="rules-detail__content">
                  <ul style={{ color: "#1E3D74" }}>
                    <li className="rule-title">Cách thức tính điểm</li>
                    <div>
                      Với 1 lượt học viên được mời thành công tham gia chương
                      trình, các bạn sẽ nhận được 1K. Ngoài ra, bạn còn nhận
                      được điểm thưởng từ một số hoạt động khác:{" "}
                    </div>
                    <h4>Bảng cộng điểm thành tích</h4>
                    <img
                      src={table1}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <h4>BẢNG CỘNG ĐIỂM THÀNH TÍCH THEO TUẦN, THÁNG, NĂM</h4>
                    <Row>
                      <Col xl="4" lg="4" md="4" sm="4" xs="4">
                        <div>
                          <h4>BXH Tuần</h4>
                          <img
                            src={bangtuan}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </Col>
                      <Col xl="4" lg="4" md="4" sm="4" xs="4">
                        <div>
                          <h4>BXH THÁNG</h4>
                          <img
                            src={bangthang}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </Col>
                      <Col xl="4" lg="4" md="4" sm="4" xs="4">
                        <div>
                          <h4>BXH QUÝ</h4>
                          <img
                            src={bangquy}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <li className="rule-title">Giải thưởng</li>
                    <div>E-Voucher 100K khi đăng ký thành công tài khoản </div>
                    <div>Các giải thưởng khi tích lũy:</div>
                    <Row className="d-flex flex-row justify-content-center mt-2">
                      <Col xl="10" lg="10" md="10" sm="10" xs="10">
                        <img src={gifts} width="100%" height="auto" />
                      </Col>
                    </Row>
                    <div style={{ color: "#F68317", marginTop: 10 }}>
                      Lưu ý: 1K Coin (Coin là số tiền bạn của bạn khi tham gia
                      Chương trình) = 1.000 VNĐ
                    </div>
                    <div style={{ marginTop: 10 }}>
                      Giải thưởng trị giá 5.000.000đ dành cho người tham gia may
                      mắn trong Chương trình VÒNG QUAY MAY MẮN - chương trình
                      nằm trong khuôn khổ Đại Sứ Siêu Trí Nhớ Học Đường được tổ
                      chức vào 21h ngày thứ 5 cuối cùng mỗi tháng.
                    </div>
                  </ul>
                </div>
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col xl="7" lg="7" md="7">
              <div className="rules-detail-container" ref={rulesRef}>
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
                <div className="rules-detail__content">
                  <ul style={{ color: "#1E3D74" }}>
                    <li className="rule-title">Cách thức tính điểm</li>
                    <div>
                      Với 1 lượt học viên được mời thành công tham gia chương
                      trình, các bạn sẽ nhận được 1K. Ngoài ra, bạn còn nhận
                      được điểm thưởng từ một số hoạt động khác:{" "}
                    </div>
                    <h4>Bảng cộng điểm thành tích</h4>
                    <img
                      src={table1}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <h4>BẢNG CỘNG ĐIỂM THÀNH TÍCH THEO TUẦN, THÁNG, NĂM</h4>
                    <Row>
                      <Col xl="4" lg="4" md="4" sm="4" xs="4">
                        <div>
                          <h4>BXH Tuần</h4>
                          <img
                            src={bangtuan}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </Col>
                      <Col xl="4" lg="4" md="4" sm="4" xs="4">
                        <div>
                          <h4>BXH THÁNG</h4>
                          <img
                            src={bangthang}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </Col>
                      <Col xl="4" lg="4" md="4" sm="4" xs="4">
                        <div>
                          <h4>BXH QUÝ</h4>
                          <img
                            src={bangquy}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <li className="rule-title">Giải thưởng</li>
                    <div>E-Voucher 100K khi đăng ký thành công tài khoản </div>
                    <div>Các giải thưởng khi tích lũy:</div>
                    <Row className="d-flex flex-row justify-content-center mt-2">
                      <Col xl="10" lg="10" md="10" sm="10" xs="10">
                        <img src={gifts} width="100%" height="auto" />
                      </Col>
                    </Row>
                    <div style={{ color: "#F68317", marginTop: 10 }}>
                      Lưu ý: 1K Coin (Coin là số tiền bạn của bạn khi tham gia
                      Chương trình) = 1.000 VNĐ
                    </div>
                    <div style={{ marginTop: 10 }}>
                      Giải thưởng trị giá 5.000.000đ dành cho người tham gia may
                      mắn trong Chương trình VÒNG QUAY MAY MẮN - chương trình
                      nằm trong khuôn khổ Đại Sứ Siêu Trí Nhớ Học Đường được tổ
                      chức vào 21h ngày thứ 5 cuối cùng mỗi tháng.
                    </div>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl="5" lg="5" md="5" style={{ position: "relative" }}>
              <div className="event-calendar-container" ref={calendarRef}>
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
