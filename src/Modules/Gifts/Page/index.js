import "../bootstrap.scss"
import "../responsive.scss"
import React from "react"
import Banner from "@Modules/Gifts/Components/Banner"
import Profile from "@Modules/Gifts/Components/Profile"

const Home = () => {
  return (
    <div className="gift__page">
      <Banner />
      <Profile />
    </div>
  )
}
export default Home
