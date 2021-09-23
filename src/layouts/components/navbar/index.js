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

import {
  UserIcon,
  UserPointerWrapper,
  DoneProgress,
  PendingProgress
} from "./icon"
import Dropdown from "./Dropdown"

const PROGRESS_LENGTH = 250
const PROGRESS_DONE_PERCENT = 90
const PROGRES_DONE_LENGTH = parseInt((250 * PROGRESS_DONE_PERCENT) / 100)

const Navbar = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { url } = useRouteMatch()

  /*Selectors*/
  const lang = useSelector((state) => getCodeLanguage(state))

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
    // const elementId = document.getElementById('navbar');
    // document.addEventListener('scroll', () => {
    //   if (window.scrollY > 170) {
    //     elementId.classList.add('is-sticky');
    //   } else {
    //     elementId.classList.remove('is-sticky');
    //   }
    // });
    window.scrollTo(0, 0)
    return () => {
      setIsMounted(true)
    }
  }, [])

  const handleOnSubmit = (e) => {
    dispatch(actionsCommon.setLanguage(e.target.value))
  }
  const isLogin = false
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

            <button
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
            </button>

            <div className="ms-auto others-option">
              {isLogin ? (
                <div className="nav-user-progress-container">
                  <div className="progress-info-wrapper">
                    <span>Cấp 10 | Voi con thông minh</span>
                    <div className="progress-bar-wrapper">
                      <div className="done-progress-wrapper">
                        <DoneProgress width={PROGRES_DONE_LENGTH} />
                      </div>
                      <PendingProgress width={PROGRESS_LENGTH} />
                    </div>
                  </div>
                  <div className="user-point-wrapper">
                    <UserPointerWrapper />
                    <span>340K</span>
                  </div>
                </div>
              ) : null}
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
                {isDropdownOpen ? <Dropdown isLogin={isLogin} /> : null}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
