import "../bootstrap.scss"

import React from "react"
import Banner from "@Modules/Home/Components/Banner"
import Reason from "@Modules/Home/Components/Reason"
import Rules from "@Modules/Home/Components/Rules"
import News from "@Modules/Home/Components/News"

const Home = () => {
  return (
    <div className="home__page">
      <Banner />
      <Reason />
      <Rules />
      <News />
    </div>
  )
}
export default Home
