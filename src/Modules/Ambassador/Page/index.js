import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Ambassador/Components/Banner"
import Step from "@Modules/Ambassador/Components/Step"

import bgRight from "../assets/images/bg-right.png"
import bgLeft from "../assets/images/bg-left.png"

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="ambassador__page">
      <img src={bgLeft} style={{ position: "fixed", left: 0, zIndex: -1 }} />
      <img
        src={bgRight}
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: -1 }}
      />
      <Banner />
      <Step />
    </div>
  )
}
export default Home
