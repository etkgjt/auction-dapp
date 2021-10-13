import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { Col, Row } from "reactstrap"
import {
  YoutubeIcon,
  FacebookIcon,
  TiktokIcon,
  TTLIcon,
  STNHDIcon
} from "./icon"
import "./index.scss"
const logo = require("@src/assets/images/logo.png").default
const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [footerBackground, setFooterBackground] = useState("#fff")
  const location = useLocation()

  const getFooterBg = () => {
    const { pathname } = window.location
    if (
      pathname.indexOf("news") !== -1 ||
      pathname.indexOf("notifications") !== -1
    ) {
      if (footerBackground !== "#F26F1A") setFooterBackground("#F26F1A")
      return
    }
    if (footerBackground !== "#fff") setFooterBackground("#fff")
  }
  React.useEffect(() => {
    getFooterBg()
  }, [location])
  return (
    <footer className="footer-area" style={{ background: footerBackground }}>
      <div className="copyright-area">
        <div className="container">
          <Row className="m-0 h-100 justify-content-center align-items-center">
            <Col lg="8" md="8" sm="8" xs="8" className="left-footer-wrapper">
              <span
                className="ttl-footer"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://tamtriluc.com/", "_blank")
                }}
              >
                <TTLIcon />
              </span>
              <span className="stnhd-footer">
                {isMobile ? <img src={logo} /> : <STNHDIcon />}
              </span>
            </Col>

            <Col lg="4" md="4" xs="4" sm="4" className="footer-right">
              <p className="company-name">© 2021 Tâm Trí Lực</p>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}
              >
                <li>
                  <Link
                    to="#"
                    className="facebook-footer"
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/tamtriluc/",
                        "_blank"
                      )
                    }}
                  >
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="youtube-footer"
                    onClick={() => {
                      window.open(
                        "https://www.youtube.com/channel/UCgrOFNSSuzp6dIlpMWhUnCQ",
                        "_blank"
                      )
                    }}
                  >
                    <YoutubeIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open("https://vt.tiktok.com/ZSJKKuFoq", "_blank")
                    }}
                    className="titktok-footer"
                  >
                    <TiktokIcon />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  )
}

export default Footer
