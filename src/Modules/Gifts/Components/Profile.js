import React from "react"
import { Row, Col } from "reactstrap"

import Progress from "./Progress"
import Gifts from "./Gifts"
import adImage from "../assets/images/doidi.png"
const getWidth = () => {
  const width = window.innerWidth
  const paddingWidth = width * 0.84
  return (paddingWidth / 12) * 6
}
const Profile = () => {
  return (
    <div className="gifts-area">
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
    </div>
  )
}
export default Profile
