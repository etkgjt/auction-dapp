import "./index.scss"
import "./responsive.scss"

import React, { useState, useEffect } from "react"

/*Hooks*/
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useRouteMatch } from "react-router"

/*Navigation*/
import navigation from "@src/navigation"

/*Redux*/
import * as actionsCommon from "@store/common/actions"
import { getCodeLanguage } from "@store/common/selectors"
import { getUserData } from "../../../store/user/selector"
import { loginSuccessSelector } from "../../../Modules/Authenticate/store/auth/selectors"

/*COMPONENT*/
import {
  UserIcon,
  UserPointerWrapper,
  DoneProgress,
  PendingProgress
} from "./icon"
import DropdownCustom from "./Dropdown"
import { useMediaQuery } from "react-responsive"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap"

const PROGRESS_LENGTH = 250

const Navbar = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const location = useLocation()

  /*Selectors*/
  const lang = useSelector((state) => getCodeLanguage(state))
  const userData = useSelector(getUserData)
  const isLogin = useSelector(loginSuccessSelector)

  /*State*/
  const [collapsed, setCollapsed] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const layOutCls = ""
  const logo = require("@src/assets/images/logo-gif.gif").default

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    setIsDropdownOpen(false)
  }, [location])
  const percent =
    userData?.levelProgress * 100 > 100 ? 100 : userData?.levelProgress * 100
  const PROGRES_DONE_LENGTH = parseInt((250 * percent) / 100)

  return (
    <header id="header" className="header-inner">
      <div id="navbar" className={`crake-nav ${layOutCls}`}>
        <div>
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/">
              <a className="navbar-brand">
                <h3 style={{ fontWeight: "900", color: "#335dff" }}>
                  BidChain
                </h3>
              </a>
            </Link>

            <div className="ms-auto others-option">
              <Link to="/">
                <a className="nav-list__item">
                  <h5>Đấu giá</h5>
                </a>
              </Link>
              <Link to="/">
                <a className="nav-list__item">
                  <h5>Thống kê</h5>
                </a>
              </Link>
              <Link to="/">
                <a className="nav-list__item">
                  <h5>Lịch sử</h5>
                </a>
              </Link>
              <Link to="/">
                <a className="nav-list__item">
                  <h5>Danh mục</h5>
                </a>
              </Link>
              <Button color="primary">Đăng nhập</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
