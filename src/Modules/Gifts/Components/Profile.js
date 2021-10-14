import React from "react"
import { Row, Col, Container } from "reactstrap"

import Progress from "./Progress"
import Gifts from "./Gifts"
import adImage from "../assets/images/doidi.png"
import { useMediaQuery } from "react-responsive"

import gold1 from "../../Achievement/assets/images/gold1.png"
import gold2 from "../../Achievement/assets/images/gold2.png"
import gold3 from "../../Achievement/assets/images/gold3.png"

import title from "../../Achievement/assets/images/title.png"
import voi from "../../Achievement/assets/images/voi.png"

const Profile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <Container>
      <div className="gifts-area">
        {isMobile ? (
          <Row>
            <Col xl="6" lg="6" md="6">
              <Row>
                <Col xs="8" sm="8">
                  <Progress />
                </Col>
                <Col xs="4" sm="4">
                  <div className="banner-image-wrapper">
                    <img src={gold1} className="gold1" />
                    <img src={gold2} className="gold2" />
                    <img src={gold3} className="gold3" />
                    <img src={title} className="title" />
                    <img src={voi} className="voi" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl="6" lg="6" md="6">
              <Gifts />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xl="6" lg="6" md="6">
              <Gifts />
            </Col>
            <Col xl="6" lg="6" md="6">
              <Progress />
              <img
                src={adImage}
                width="114%"
                height="auto"
                className="mt-5"
                style={{ maxWidth: "none", marginLeft: -20 }}
              />
            </Col>
          </Row>
        )}
      </div>
    </Container>
  )
}
export default Profile
