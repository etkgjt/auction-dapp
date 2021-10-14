import React from "react"
import { Row, Col, Container } from "reactstrap"

import Progress from "./Progress"
import Achievement from "./Achievement"
import adImage from "../assets/images/doidi.png"

import { useMediaQuery } from "react-responsive"

import gold1 from "../assets/images/gold1.png"
import gold2 from "../assets/images/gold2.png"
import gold3 from "../assets/images/gold3.png"

import title from "../assets/images/title.png"
import voi from "../assets/images/voi.png"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const isServer = typeof window === "undefined"
const WOW = !isServer ? require("wowjs") : null

const Profile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const history = useHistory()

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
    <Container>
      <div className="profile-area">
        <Row>
          {isMobile ? (
            <>
              <Col xl="6" lg="6" md="6">
                <Row>
                  <Col xs="8" sm="8">
                    <Progress />
                  </Col>
                  <Col xs="4" sm="4">
                    <div
                      className="banner-image-wrapper"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        history.push("/gifts")
                      }}
                    >
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
                <Achievement />
              </Col>
            </>
          ) : (
            <>
              <Col xl="6" lg="6" md="7">
                <Achievement />
              </Col>
              <Col xl="6" lg="6" md="5">
                <Progress />
                <img
                  onClick={() => {
                    history.push("/gifts")
                  }}
                  src={adImage}
                  width="114%"
                  height="auto"
                  className="mt-5 wow animate__animated animate__slow animate__headShake animate__infinite"
                  style={{
                    maxWidth: "none",
                    marginLeft: -20,
                    cursor: "pointer"
                  }}
                />
              </Col>
            </>
          )}
        </Row>
      </div>
    </Container>
  )
}
export default Profile
