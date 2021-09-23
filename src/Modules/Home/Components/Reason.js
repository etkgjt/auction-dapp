import React from "react"
import { Row, Col } from "reactstrap"
import threeReasonImg from "../assets/images/three-reason.png"
import reason1 from "../assets/images/reason1.png"
import reason2 from "../assets/images/reason2.png"
import reason3 from "../assets/images/reason3.png"

const Reason = () => {
  return (
    <div className="py-5 reason-area">
      <div className="reason-container">
        <Row className="p-0">
          <Col xl="6" lg="6" md="6" className="p-0">
            <div className="reason-title">
              <img alt="three-reason" src={threeReasonImg} />
            </div>
          </Col>
          <Col xl="6" lg="6" md="6" className="p-0">
            <div className="list-reason-item-container">
              <div className="reason-item-container">
                <img src={reason1} className="reason-item__image" alt="img" />
                <span>
                  Trải nghiệm
                  <br />
                  học tập bổ ích
                </span>
              </div>
              <div className="reason-item-container">
                <img className="reason-item__image" alt="img" src={reason2} />
                <span>
                  Lan toả
                  <br />
                  giá trị
                </span>
              </div>
              <div className="reason-item-container">
                <img className="reason-item__image" alt="img" src={reason3} />
                <span>
                  Nhận quà
                  <br />
                  không giới hạn
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Reason
