import React, { Component } from "react"
import { useHistory } from "react-router"
import { Col, Row } from "reactstrap"
import { ButtonBlue, ButtonOrange } from "../assets/icons"

const BlogOne = () => {
  const history = useHistory()
  const onItemPress = (id) => {
    history.push(`/news/${id}`)
  }
  return (
    <div className="news-list-area">
      <div className="news-list-wrapper">
        <h1 className="news-list-title">Tin tức</h1>
        <h3 className="news-list-subtitle">
          Theo dõi để không bỏ lỡ cơ hội nhận và đổi hàng nghìn quà tặng hấp dẫn{" "}
        </h3>
        <div className="news-search-bar">
          <input
            placeholder="Nhập chủ để để tìm bài viết..."
            className="search-input"
          />
          <div className="search-button">
            <span>Tìm kiếm</span>
          </div>
        </div>
        <Row>
          {Array.apply(null, {
            length: 8
          }).map((item, index) => (
            <Col xl="3" lg="3">
              <div
                className="news-item-wrapper"
                onClick={() => {
                  onItemPress(index)
                }}
              >
                <div className="news-item-image-wrapper"></div>
                <div className="news-item-title">
                  {`Thông báo lịch quay số tuần ${index + 1}`}
                </div>
                <span className="news-item-subtitle">
                  Một phần nội dung hiển thị của bài viết... Một phần nội dung
                  hiển thị của bài viết...
                </span>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <div className="news-detail-button-wrapper">
            <ButtonOrange />
            <span className="news-detail-button__text">Quay về</span>
          </div>
          <div className="news-detail-button-wrapper">
            <ButtonBlue />
            <span className="news-detail-button__text">Quay về</span>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default BlogOne
