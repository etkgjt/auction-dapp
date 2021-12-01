import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Ambassador/Components/Banner"
import Step from "@Modules/Ambassador/Components/Step"

import bgRight from "../assets/images/bg-right.png"
import bgLeft from "../assets/images/bg-left.png"

import AnimatedTable from "../Components/AnimatedTable"

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="ambassador__page">
      <div className="container pt-5">
        <div className="mt-5">
          <AnimatedTable />
        </div>
      </div>
    </div>
  )
}
export default Home
