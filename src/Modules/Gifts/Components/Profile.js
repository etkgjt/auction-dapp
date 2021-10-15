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

import bgLeft from "../assets/images/bg-left.png"
import bgRight from "../assets/images/bg-right.png"

const isServer = typeof window === "undefined"
const WOW = !isServer ? require("wowjs") : null

const Profile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  React.useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true
    }).init()
  }, [])
  return (
    <div className="gifts-area">
      <img
        src={bgLeft}
        style={{ position: "fixed", left: 0, bottom: 0, zIndex: -2 }}
      />
      <img
        src={bgRight}
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: -2 }}
      />
      {isMobile ? (
        <Row>
          <Col xl="6" lg="6" md="6">
            <Row>
              <Col xs="8" sm="8">
                <Progress />
              </Col>
              <Col xs="4" sm="4">
                <div className="banner-image-wrapper wow animate__animated animate__slow animate__headShake animate__infinite">
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
          <Col xl="7" lg="7" md="7">
            <Gifts />
          </Col>
          <Col xl="5" lg="5" md="5">
            <Progress />
            <img
              src={adImage}
              width="114%"
              height="auto"
              className="mt-5 wow animate__animated animate__slow animate__headShake animate__infinite"
              style={{ maxWidth: "none", marginLeft: -20 }}
            />
          </Col>
        </Row>
      )}
    </div>
  )
}
export default Profile
