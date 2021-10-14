import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Profile/Components/Banner"
import Profile from "@Modules/Profile/Components/Profile"
import { Container } from "reactstrap"

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="profile__page">
      <Banner />
      <Container>
        <Profile />
      </Container>
    </div>
  )
}
export default Home
