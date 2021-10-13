import "./index.scss"

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
import Dropdown from "./Dropdown"
import { useMediaQuery } from "react-responsive"

const PROGRESS_LENGTH = 250

const Navbar = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { url } = useRouteMatch()
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 })

  /*Selectors*/
  const lang = useSelector((state) => getCodeLanguage(state))
  const userData = useSelector(getUserData)
  const isLogin = useSelector(loginSuccessSelector)

  /*State*/
  const [collapsed, setCollapsed] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const layOutCls = ""
  const logo = require("@src/assets/images/logo.png").default

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
  const percent =
    userData?.levelProgress * 100 > 100 ? 100 : userData?.levelProgress * 100
  const PROGRES_DONE_LENGTH = parseInt((250 * percent) / 100)
  return (
    <header id="header" className="header-inner">
      <div id="navbar" className={`crake-nav ${layOutCls}`}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/">
              <a className="navbar-brand">
                <img src={logo} alt="logo" />
              </a>
            </Link>

            {/* <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="ms-auto others-option">
              {!isLogin || isMobile ? null : (
                <div className="nav-user-progress-container">
                  <div className="progress-info-wrapper">
                    <span>{`${userData?.level?.name}` || ""}</span>
                    <div className="progress-bar-wrapper">
                      <div className="done-progress-wrapper">
                        <DoneProgress width={PROGRES_DONE_LENGTH} />
                      </div>
                      <PendingProgress width={PROGRESS_LENGTH} />
                    </div>
                  </div>
                  <div className="user-point-wrapper">
                    <UserPointerWrapper />
                    <span>{`${userData?.totalVoicoin || 0}k`}</span>
                  </div>
                </div>
              )}

              <div className={"nav__select" + (isLogin ? " login" : "")}>
                {isLogin ? null : (
                  <span
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="nav__select-text"
                  >
                    Đăng ký/ Đăng nhập
                  </span>
                )}

                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="user-icon-wrapper"
                >
                  <UserIcon />
                </div>

                {isDropdownOpen ? (
                  <Dropdown
                    setIsDropdownOpen={setIsDropdownOpen}
                    isLogin={isLogin}
                  />
                ) : null}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
