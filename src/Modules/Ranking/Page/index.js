import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Ranking/Components/Banner"
import RankingTable from "@Modules/Ranking/Components/RankingTable"

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="ranks__page">
      <Banner />
      <RankingTable />
    </div>
  )
}
export default Home
