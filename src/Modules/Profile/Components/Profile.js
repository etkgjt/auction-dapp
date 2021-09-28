import React from "react"
import { Row, Col } from "reactstrap"

import Progress from "./Progress"
import Armorial from "./Armorial"
import FriendList from "./FriendList"

import FormProfile from "./FormProfile"
const Profile = () => {
  return (
    <div className="profile-area">
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
    </div>
  )
}
export default Profile
