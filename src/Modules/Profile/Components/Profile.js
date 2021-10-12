import React from "react"
import { Row, Col } from "reactstrap"

import Progress from "./Progress"
import Armorial from "./Armorial"
import FriendList from "./FriendList"
import FormProfile from "./FormProfile"
import { useMediaQuery } from "react-responsive"
const Profile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <div className="profile-area">
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
