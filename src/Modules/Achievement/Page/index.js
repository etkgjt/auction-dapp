import "../bootstrap.scss"

import React from "react"
import Banner from "@Modules/Achievement/Components/Banner"
import Profile from "@Modules/Achievement/Components/Profile"

const Home = () => {
  return (
    <div className="home__page">
      <Banner />
      <Profile />
    </div>
  )
}
export default Home
