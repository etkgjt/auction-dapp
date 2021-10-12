import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Rules/Components/Banner"
import Rules from "@Modules/Rules/Components/Rules"

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="rules__page">
      <Banner />
      <Rules />
    </div>
  )
}
export default Home
