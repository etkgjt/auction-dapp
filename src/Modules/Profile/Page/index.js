import "../bootstrap.scss"

import React from "react"
import Banner from "@Modules/Profile/Components/Banner"
import Profile from "@Modules/Profile/Components/Profile"

const Home = () => {
  return (
    <div className="home__page">
      <Banner />
      <Profile />
    </div>
  )
}
export default Home
