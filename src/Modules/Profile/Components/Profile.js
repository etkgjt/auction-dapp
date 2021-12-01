import Identicon from "identicon.js"
import React from "react"
import { useSelector } from "react-redux"

import { useMediaQuery } from "react-responsive"
import { getUserData } from "../../../store/user/selector"
import AnimatedTable from "./AnimatedTable"

const Profile = () => {
  const userData = useSelector(getUserData)
  const getMiniAddress = () => {
    let str = userData?.address?.split("")
    str.splice(5, 34, "-")
    return str.join("").replace("-", "...")
  }
  return (
    <div className="pbt-100">
      <div className="container">
        <div style={{ position: "relative" }}>
          <img
            src="https://pancakeswap.finance/images/teams/no-team-banner.png"
            style={{ width: "100%", height: "auto", borderRadius: 50 }}
          />
          {userData?.address && (
            <img
              src={
                userData.address?.length >= 15
                  ? `data:image/png;base64,${new Identicon(
                      userData.address,
                      30
                    ).toString()}`
                  : ""
              }
              style={{
                width: 150,
                height: 150,
                position: "absolute",
                bottom: -75,
                left: "50%",
                transform: "translate(-50%,0)",
                border: "10px solid #fff",
                borderRadius: 40,
                boxSizing: "border-box"
              }}
            />
          )}
        </div>
        <div
          className="d-flex flex-row justify-content-center w-100"
          style={{ marginTop: 90 }}
        >
          <h1 style={{ fontWeight: "bold", color: "#181A20" }}>
            {userData?.name}
          </h1>
        </div>
        <h1
          style={{ fontWeight: "900", textAlign: "center", color: "#F0B90A" }}
        >
          {getMiniAddress()}
        </h1>
        <h5 style={{ fontWeight: "bold" }}>Lịch sử giao dịch</h5>
        <AnimatedTable />
      </div>
    </div>
  )
}
export default Profile
