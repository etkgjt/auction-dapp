import React from "react"
import { Col, Row } from "reactstrap"
import banner from "../assets/images/rule-top-banner.png"

import { HornorTable, ButtonSvg } from "../assets/icon"
import { useHistory } from "react-router"

const data = [
  {
    level: 10,
    name: "Trần Thanh Nguyên",
    point: 432000
  },
  {
    level: 9,
    name: "Trần Thanh Nguyên",
    point: 425000
  },
  {
    level: 9,
    name: "Trần Thanh Nguyên",
    point: 412500
  },
  {
    level: 8,
    name: "Trần Thanh Nguyên",
    point: 232000
  },
  {
    level: 7,
    name: "Trần Thanh Nguyên",
    point: 132000
  }
]

const Rules = () => {
  const history = useHistory()

  const getHornorTableWidth = () => {
    const width = window.innerWidth
    const paddingWidth = width * 0.8
    return (paddingWidth / 12) * 5
  }
  const getHornorTableHeight = () => {
    const ratio = 461 / 841
    return getHornorTableWidth() / ratio
  }
  const onSeemorePress = () => {
    history.push("/rules")
  }
  return (
    <div className="rules-area">
      <div className="rules-container">
        <Row>
          <Col xl="7" lg="7" md="7">
            <div className="rules-board">
              <img src={banner} alt="banner" className="rule-top-banner" />
              <ul>
                <li className="rule-title">Mục đích ý nghĩa:</li>
                <li className="rule-title">
                  <ul>
                    <li className="rule-subtitle">
                      Thu hút học sinh tham gia vào hoạt động học tập thực tế và
                      hữu ích khi học Siêu Trí Nhớ Học Đường.
                    </li>
                    <li className="rule-subtitle">
                      Lan tỏa giá trị của Siêu Trí Nhớ Học Đường đến với cộng
                      đồng.
                    </li>
                  </ul>
                </li>

                <li className="rule-title rule-margin">Thời gian tổ chức:</li>
                <li className="rule-title">
                  <ul>
                    <li className="rule-subtitle">
                      Kể từ ngày 16/09/2021 đến ngày 14/10/2021
                    </li>
                  </ul>
                </li>

                <li className="rule-title rule-margin">
                  Đối tượng tham gia Chương trình:
                </li>
                <li className="rule-title">
                  <ul>
                    <li className="rule-subtitle">
                      Tất cả các bạn học sinh trên cả nước từ lớp 1 đến lớp 12
                    </li>
                  </ul>
                </li>

                <li className="rule-title rule-margin">
                  Cách thức tham gia chương trình:
                </li>
                <li className="rule-title">
                  <ul>
                    <li className="rule-subtitle">
                      Bước 1: Đăng nhập tài khoản vào trang
                      <span className="rule_subtitle_red">
                        &nbsp;www.stnhd.com
                      </span>
                    </li>
                    <li className="rule-subtitle">
                      Bước 2: Copy đường dẫn Mời bạn mới{" "}
                    </li>
                    <li className="rule-subtitle">
                      Bước 3: Gửi tin nhắn mời bạn bè cùng tham gia{" "}
                    </li>
                    <li className="rule-subtitle">
                      Giải thưởng trị giá 5.000.000đ dành cho người tham gia may
                      mắn trong Chương trình VÒNG QUAY MAY MẮN - chương trình
                      nằm trong khuôn khổ Đại Sứ Siêu Trí Nhớ Học Đường được tổ
                      chức vào 21h ngày thứ 5 cuối cùng mỗi tháng.
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="seemore-button" onClick={onSeemorePress}>
                <ButtonSvg />
                <p className="seemore-button__text">Xem thêm</p>
              </div>
            </div>
          </Col>
          <Col xl="5" lg="5" md="5">
            <div className="hornor-table-container">
              <HornorTable
                width={getHornorTableWidth()}
                height={getHornorTableHeight()}
              />
              <div className="seemore-button">
                <ButtonSvg />
                <p className="seemore-button__text">Xem thêm</p>
              </div>
              <div className="hornor-table-list-container">
                <h1 className="hornor-table-list__title">
                  Bảng <br />
                  xếp hạng
                </h1>
                {data.map((item, index) => (
                  <div key={index} className="hornor-item-wrapper">
                    <p className="item-rank">{index + 1}</p>
                    <div className="item-avatar"></div>
                    <div className="item-info">
                      <span className="item-level">{"Cấp " + item.level}</span>
                      <span className="item-name">{item.name}</span>
                      <span className="item-point">{`${Math.round(
                        item.point / 1000
                      )}k`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Rules
