import React, {useEffect} from "react"
import { Row, Col } from "reactstrap"
import threeReasonImg from "../assets/images/three-reason.png"
import reason1 from "../assets/images/reason1.png"
import reason2 from "../assets/images/reason2.png"
import reason3 from "../assets/images/reason3.png"

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

const Reason = () => {

  useEffect(() => {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }, []);

  return (
    <div className="py-5 reason-area">
      <div data-wow-offset="150" className="wow slideInDown reason-container">
        <Row className="p-0">
          <Col xl="6" lg="6" md="6" className="p-0">
            <div data-wow-delay="0.5s"
                className="reason-title wow fadeInLeft">
              <img alt="three-reason" src={threeReasonImg} />
            </div>
          </Col>
          <Col xl="6" lg="6" md="6" className="p-0">
            <div className="list-reason-item-container">
              <div data-wow-delay="0.7s" className="wow fadeInDown reason-item-container">
                <img src={reason1} className="reason-item__image" alt="img" />
                <span>
                  Trải nghiệm
                  <br />
                  học tập bổ ích
                </span>
              </div>
              <div data-wow-delay="0.9s" className="wow fadeInRight reason-item-container">
                <img className="reason-item__image" alt="img" src={reason2} />
                <span>
                  Lan toả
                  <br />
                  giá trị
                </span>
              </div>
              <div data-wow-delay="1s" className="wow fadeInUp reason-item-container">
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
