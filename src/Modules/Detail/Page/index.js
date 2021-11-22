import "../bootstrap.scss"
import "../responsive.scss"
import React from "react"
import DetailsBody from "../Components/DetailsBody"
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="gift__page">
      <DetailsBody />
    </div>
  )
}
export default Home
