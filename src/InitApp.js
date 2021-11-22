import React, { lazy, useEffect, useState } from "react"

//** Load App
const LazyApp = lazy(() => import("./App"))

/*Hooks*/
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"

/*Redux*/
import * as actionsCommon from "@store/common/actions"
import { getCodeLanguage } from "@store/common/selectors"
import FireBaseSetup from "./Firebase/setup"

const InitApp = ({ DefaultRoute, listRoutes, listNav }) => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const [loaded, setLoaded] = useState(false)

  /*Selectors*/
  const lang = useSelector((state) => getCodeLanguage(state))

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  return (
    <LazyApp DefaultRoute={DefaultRoute} Routes={listRoutes} Nav={listNav} />
  )
}
export default InitApp
