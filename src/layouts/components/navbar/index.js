import "./index.scss"
import "./responsive.scss"

import React, { useState, useEffect } from "react"
import Web3 from "web3"
import Identicon from "identicon.js"
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
import { actions } from "../../../store/user/reducer"
import { loginSuccessSelector } from "../../../Modules/Authenticate/store/auth/selectors"
import { SIGN_IN_SUCCESS } from "../../../Modules/Authenticate/store/auth/constants"

/*COMPONENT*/

import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { Button } from "reactstrap"
import SlideInModal from "../../../components/SlideInModal"
import SigninForm from "./SigninForm"
import User from "../../../Firebase/User"

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

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
      setIsMounted(true)
    }
  }, [])
  const showLoginModal = () => {
    SlideInModal.show(() => {}, <SigninForm />)
  }

  const connectMetaMask = () => {
    let web3 = null
    if (window.ethereum) {
      web3 = new Web3(window.ethereum)
      try {
        window.ethereum.enable().then(function (address, b) {
          User.login(
            address[0],
            (data) => {
              SlideInModal.show(() => {}, <SigninForm address={data} />)
            },
            () => {
              toast.success("Có lỗi xảy ra, xin vui lòng thử lại!", {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              })
            },
            (user_info) => {
              dispatch({
                type: SIGN_IN_SUCCESS,
                payload: user_info
              })
              dispatch(
                actions.setInfoData({
                  ...user_info
                })
              )
            }
          )
        })
      } catch (e) {
        console.log("USER DENIED")
      }
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider)
    } else {
      alert("You have to install MetaMask !")
    }
  }
  React.useEffect(() => {
    window?.ethereum.on("accountsChanged", function (accounts) {
      console.log("ACCOUNTS", accounts[0])
      User.login(
        accounts[0],
        (data) => {
          SlideInModal.show(() => {}, <SigninForm address={data} />)
        },
        () => {
          toast.success("Có lỗi xảy ra, xin vui lòng thử lại!", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        },
        (user_info) => {
          dispatch({
            type: SIGN_IN_SUCCESS,
            payload: user_info
          })
          dispatch(
            actions.setInfoData({
              ...user_info
            })
          )
        }
      )
    })
  }, [])

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
                  <h5 className="mb-0">Đấu giá</h5>
                </a>
              </Link>
              <Link to="/">
                <a className="nav-list__item">
                  <h5 className="mb-0">Thống kê</h5>
                </a>
              </Link>
              <Link to="/">
                <a className="nav-list__item">
                  <h5 className="mb-0">Hồ sơ</h5>
                </a>
              </Link>
              <Link to="/create">
                <a className="nav-list__item">
                  <h5 className="mb-0">Tạo đấu giá</h5>
                </a>
              </Link>
              {isLogin && userData?.address ? (
                <img
                  className="ml-2"
                  width="30"
                  height="30"
                  src={`data:image/png;base64,${new Identicon(
                    userData?.address,
                    30
                  ).toString()}`}
                />
              ) : (
                <Button onClick={connectMetaMask} color="primary">
                  Đăng nhập
                </Button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
