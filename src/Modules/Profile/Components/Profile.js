import React from "react"
import { Row, Col } from "reactstrap"

import Progress from "./Progress"
import Armorial from "./Armorial"
import FriendList from "./FriendList"
import FormProfile from "./FormProfile"
import { useMediaQuery } from "react-responsive"

import bgLeft from "../assets/images/bg-left.png"
import bgRight from "../assets/images/bg-right.png"

const Profile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <div className="profile-area">
      <img
        src={bgLeft}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: -2
        }}
      />
      <img
        src={bgRight}
        style={{ position: "fixed", bottom: 100, right: 0, zIndex: -2 }}
      />
      {isMobile ? (
        <Row noGutters>
          <Col>
            <Row noGutters>
              <Col xs="8" sm="8">
                <Progress />
              </Col>
              <Col xs="4" sm="4" className="no-padding-left">
                <Armorial />
              </Col>
            </Row>
          </Col>
          <Col xl="6" lg="6" md="6">
            <FormProfile />

            <FriendList />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col xl="6" lg="6" md="6">
            <FormProfile />
          </Col>
          <Col xl="6" lg="6" md="6">
            <Progress />
            <Armorial />
            <FriendList />
          </Col>
        </Row>
      )}
    </div>
  )
}
export default Profile
