import React from "react"
import { Col, Row } from "reactstrap"
import {
  AchievementHeaderTitle,
  GoldIcon,
  CheckedIcon,
  UnCheckIcon
} from "../assets/icon"
import voi1 from "../assets/images/voicon.png"
import voi2 from "../assets/images/voichamchi.png"
import voi3 from "../assets/images/voidaisu-silver.png"
import voi4 from "../assets/images/voidaisu-gold.png"

const data = [
  {
    title: "Lần đầu đăng nhập",
    subtitle: "Nhận Huy Hiệu Voi Con",
    point: 5,
    done: true,
    img: voi1
  },
  {
    title: "Mời thành công 05 bạn",
    subtitle: "Nhận Huy Hiệu Voi Chăm Chỉ",
    point: 5,
    done: true,
    img: voi2
  },
  {
    title: "Mời thành công 15 bạn",
    subtitle: "Nhận Huy Hiệu Voi Thông Minh",
    point: 10,
    done: true,
    img: voi4
  },
  {
    title: "Mời thành công 30 bạn",
    subtitle: "Nhận Huy Hiệu Voi Đại Sứ",
    point: 15,
    done: false,
    img: voi3
  }
]

const Achievement = () => {
  return (
    <div className="achievement-container">
      <div className="achievement-top-header-wrapper">
        <AchievementHeaderTitle />
      </div>
      {data.map((item, index) => {
        return (
          <div key={index} className="achivement-item-wrapper">
            <img className="achivement-item-image" src={item.img} />
            <div className="achivement-item-info-wrapper">
              <p className="achivement-item-title">{item.title}</p>
              <p className="achivement-item-subtitle">{item.subtitle}</p>
              <span className="d-flex flex-row">
                <p className="achivement-item-point">{`+${item.point}k`}</p>
                <GoldIcon />
              </span>
            </div>
            {item.done ? <CheckedIcon /> : <UnCheckIcon />}
          </div>
        )
      })}

      <div className="achievement-footer">
        <Row>
          <Col xl="6" lg="6">
            <span className="copy-btn-title">Mã giới thiệu</span>
            <div className="copy-field">
              XX-XXX
              <div className="copy-code-button">Sao chép</div>
            </div>
          </Col>
          <Col xl="6" lg="6">
            <span className="copy-btn-title">Link giới thiệu</span>
            <div className="copy-field">
              XX-XXX
              <div className="copy-code-button">Sao chép</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Achievement
