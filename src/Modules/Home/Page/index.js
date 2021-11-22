import "../bootstrap.scss"
import "../responsive.scss"

import React, { useState } from "react"
import Banner from "@Modules/Home/Components/Banner"
import CourseList from "../Components/CourseList"

const Home = () => {
  return (
    <div className="home__page">
      {/* <Banner /> */}
      <CourseList />
    </div>
  )
}
export default Home
