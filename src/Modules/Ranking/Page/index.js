import "../bootstrap.scss"

import React from "react"
import Banner from "@Modules/Ranking/Components/Banner"
import RankingTable from "@Modules/Ranking/Components/RankingTable"

const Home = () => {
  return (
    <div className="home__page">
      <Banner />
      <RankingTable />
    </div>
  )
}
export default Home
