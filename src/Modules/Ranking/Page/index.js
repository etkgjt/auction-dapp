import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Ranking/Components/Banner"
import RankingTable from "@Modules/Ranking/Components/RankingTable"
import { Container } from "reactstrap"

import bgLeft from "../assets/images/bg-left.png"
import bgRight from "../assets/images/bg-right.png"

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="ranks__page">
      <img src={bgLeft} style={{ position: "fixed", left: 0, zIndex: -2 }} />
      <img src={bgRight} style={{ position: "fixed", right: 0, zIndex: -2 }} />
      <Banner />
      <Container>
        <RankingTable />
      </Container>
    </div>
  )
}
export default Home
