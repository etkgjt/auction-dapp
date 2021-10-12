import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Achievement/Components/Banner"
import Profile from "@Modules/Achievement/Components/Profile"

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="achievement__page">
      <Banner />
      <Profile />
    </div>
  )
}
export default Home
