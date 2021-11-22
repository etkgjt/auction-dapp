import "../bootstrap.scss"
import "../responsive.scss"

import React, { useState, useEffect, Fragment } from "react"

/*Hooks*/
import { useTranslation } from "react-i18next"

/*Components*/
import CheckoutBody from "../Components/CheckoutBody"
import OrderSummary from "../Components/OrderSummary"
const translateKey = "News"

const News = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="notification__page">
      <CheckoutBody />
    </div>
  )
}

export default News
