import "../bootstrap.scss"

import React from "react"
import Banner from "@Modules/Rules/Components/Banner"
import Rules from "@Modules/Rules/Components/Rules"

const Home = () => {
  return (
    <div className="home__page">
      <Banner />
      <Rules />
    </div>
  )
}
export default Home
