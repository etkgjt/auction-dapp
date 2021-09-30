import React, { Component, useState } from "react"
import { useHistory } from "react-router"
import { Col, Row, Modal } from "reactstrap"

const BlogOne = () => {
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)

  const onItemPress = (id) => {
    history.push(`/news/${id}`)
  }
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="notification-area">
      <div className="notification-wrapper">
        <Row>
          {Array.apply(null, {
            length: 8
          }).map((item, index) => (
            <Col
              xl="12"
              lg="12"
              className="d-flex flex-column"
              onClick={toggle}
            >
              <div className="notification-item-wrapper">
                {index !== 0 ? <hr className="notification-divider" /> : null}
                <span className="notification-date">
                  07:00 | Ngày 23.09.2021
                </span>
                <span className="notification-title">
                  [Chúc mừng] Bạn đã đạt Huy Hiệu Voi Thông Minh, nhận ngay 10K
                  VoiCoin!
                </span>
                <span className="notification-subtitle">
                  Nội dung của thông báo thể hiện một phần, khi bấm vào sẽ popup
                  để thể hiNội dung của thông báo thể hiện một phần, khi bấm vào
                  sẽ popup để thể hiNội dung của thông báo thể hiện một phần,
                  khi bấm vào sẽ popup để thể hi
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <Modal isOpen={isOpen} toggle={toggle} modalClassName="modal-container">
        <div className="modal-container">
          <h1>AAA</h1>
        </div>
      </Modal>
    </div>
  )
}

export default BlogOne
