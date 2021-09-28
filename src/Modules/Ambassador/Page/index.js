import "../bootstrap.scss"

import React from "react"
import Banner from "@Modules/Ambassador/Components/Banner"
import Step from "@Modules/Ambassador/Components/Step"

const Home = () => {
  return (
    <div className="home__page">
      <Banner />
      <Step />
    </div>
  )
}
export default Home
