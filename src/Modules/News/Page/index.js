import "../bootstrap.scss"
import "../responsive.scss"

import React, { useState, useEffect, Fragment } from "react"

/*Hooks*/
import { useTranslation } from "react-i18next"

/*Components*/
import BlogList from "@Modules/News/Components/BlogList"

const translateKey = "News"

const News = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="news__page">
      <BlogList />
    </div>
  )
}

export default News
