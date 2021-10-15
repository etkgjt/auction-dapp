import "../bootstrap.scss"
import "../responsive.scss"

import React, { useState, useEffect, Fragment } from "react"

/*Hooks*/
import { useTranslation } from "react-i18next"

/*Components*/
import BlogList from "@Modules/News/Components/BlogList"
import bgLeft from "../assets/images/bg-left.png"
import bgRight from "../assets/images/bg-right.png"

const translateKey = "News"

const News = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="news__page">
      <img src={bgLeft} style={{ position: "fixed", left: 0 }} />
      <img src={bgRight} style={{ position: "fixed", right: 0 }} />
      <BlogList />
    </div>
  )
}

export default News
