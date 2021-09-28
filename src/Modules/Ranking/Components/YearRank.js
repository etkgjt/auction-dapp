import React, { useState } from "react"
import goldRank from "../assets/images/gold.png"
import silverRank from "../assets/images/silver.png"
import diamondRank from "../assets/images/diamond.png"
import rank1 from "../assets/images/rank1.png"
import rank2 from "../assets/images/rank2.png"
import rank3 from "../assets/images/rank3.png"

import { SeemoreButton, RankingTopBannerTitle, CoinIcon } from "../assets/icon"
import { Col, Row, Collapse } from "reactstrap"

const YearRank = () => {
  const [isCollapse, setIsCollapse] = useState(false)

  return (
    <div className="ranking1-container">
      <div className="ranking-top-banner-title">
        <RankingTopBannerTitle />
      </div>
      <div className="ranking1-top-label">
        Quý 4 <br />
        Năm 2021
      </div>
      <div className="medal-container">
        <Row>
          <Col xl="3" lg="3">
            <div className="medal-item-wrapper">
              <div className="medal-image-wrapper">
                <img src={rank2} className="diamon-rank-text" />
                <img
                  src={diamondRank}
                  alt="image"
                  className="diamond-medal-image"
                />
              </div>
              <p className="medal-name">Trần Thanh Nguyên</p>
              <span className="d-flex flex-row">
                <p className="medal-level">Cấp 10 | 340K</p>
                <CoinIcon />
              </span>
            </div>
          </Col>
          <Col xl="6" lg="6">
            <div className="medal-item-wrapper">
              <div className="medal-image-wrapper">
                <img src={rank1} className="gold-rank-text" />
                <img src={goldRank} alt="image" className="gold-medal-image" />
              </div>
              <p className="medal-name">Trần Thanh Nguyên</p>
              <span className="d-flex flex-row">
                <p className="medal-level">Cấp 10 | 340K</p>
                <CoinIcon />
              </span>
            </div>
          </Col>
          <Col xl="3" lg="3">
            <div className="medal-item-wrapper">
              <div className="medal-image-wrapper">
                <img src={rank3} className="silver-rank-text" />
                <img
                  src={silverRank}
                  alt="image"
                  className="silver-medal-image"
                />
              </div>
              <p className="medal-name">Trần Thanh Nguyên</p>
              <span className="d-flex flex-row">
                <p className="medal-level">Cấp 10 | 340K</p>
                <CoinIcon />
              </span>
            </div>
          </Col>
        </Row>
        <Collapse isOpen={isCollapse}>
          <Row className="mt-5 px-5">
            <Col xl="6" lg="6" md="6">
              {[4, 5, 6, 7].map((item, index) => {
                return (
                  <div className="another-rank-item d-flex flex-row">
                    <h1 className="rank-item__index">{item}</h1>
                    <div className="rank-item_avatar-wrapper"></div>
                    <div className="rank-item__info-wrapper">
                      <p className="rank-item__level">{`Cấp ${index + 10}`}</p>
                      <p className="rank-item__name">Trần Thanh Nguyên</p>
                      <span className="d-flex flex-row align-items-center">
                        <p className="rank-item__point">{`${
                          item * 10 + index * 10
                        }k`}</p>
                        <CoinIcon />
                      </span>
                    </div>
                  </div>
                )
              })}
            </Col>
            <Col xl="6" lg="6" md="6">
              {[8, 9, 10].map((item, index) => {
                return (
                  <div className="another-rank-item d-flex flex-row">
                    <h1 className="rank-item__index">{item}</h1>
                    <div className="rank-item_avatar-wrapper"></div>
                    <div className="rank-item__info-wrapper">
                      <p className="rank-item__level">{`Cấp ${index + 10}`}</p>
                      <p className="rank-item__name">Trần Thanh Nguyên</p>
                      <span className="d-flex flex-row align-items-center">
                        <p className="rank-item__point">{`${
                          item * 10 + index * 10
                        }k`}</p>
                        <CoinIcon />
                      </span>
                    </div>
                  </div>
                )
              })}
            </Col>
          </Row>
        </Collapse>
      </div>
      <div
        className="seemore_button"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <SeemoreButton />
        <div
          style={{
            position: "relative"
          }}
        >
          <p className="seemore-button-text">
            {!isCollapse ? "Xem thêm" : "Ẩn bớt"}
          </p>
        </div>
      </div>
    </div>
  )
}
export default YearRank
