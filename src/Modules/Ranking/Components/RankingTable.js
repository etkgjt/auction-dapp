import React from "react"
import goldRank from "../assets/images/gold.png"
import silverRank from "../assets/images/silver.png"
import diamondRank from "../assets/images/diamond.png"
import rank1 from "../assets/images/rank1.png"
import rank2 from "../assets/images/rank2.png"
import rank3 from "../assets/images/rank3.png"

import { SeemoreButton, RankingTopBannerTitle, CoinIcon } from "../assets/icon"
import { Col, Row } from "reactstrap"

import YearRank from "./YearRank"
import QuaterRank from "./QuaterRank"

const RankingTable = () => {
  return (
    <div className="ranking-area">
      <YearRank />
      <QuaterRank
        topLabel={
          <>
            Tháng 9 <br /> năm 2021
          </>
        }
      />
      <QuaterRank
        topLabel={
          <>
            Tuần 02 <br /> XX-xx/09 <br />
            năm 2021
          </>
        }
      />
    </div>
  )
}
export default RankingTable
