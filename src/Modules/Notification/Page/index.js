import "../bootstrap.scss"
import "../responsive.scss"

import React, { useState, useEffect, Fragment } from "react"

/*Hooks*/
import { useTranslation } from "react-i18next"

/*Components*/
import BlogList from "@Modules/Notification/Components/BlogList"
import { Container } from "reactstrap"

const translateKey = "News"

const News = () => {
  const { t } = useTranslation()

  return (
    <div className="notification__page">
      <BlogList />
    </div>
  )
}

export default News
