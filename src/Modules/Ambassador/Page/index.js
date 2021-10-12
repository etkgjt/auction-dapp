import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Ambassador/Components/Banner"
import Step from "@Modules/Ambassador/Components/Step"

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="ambassador__page">
      <Banner />
      <Step />
    </div>
  )
}
export default Home
