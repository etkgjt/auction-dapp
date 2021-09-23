import React from "react"
import { Link } from "react-router-dom"
import {
  YoutubeIcon,
  FacebookIcon,
  TiktokIcon,
  TTLIcon,
  STNHDIcon
} from "./icon"
import "./index.scss"

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="copyright-area">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-8 col-md-8">
              <TTLIcon />
              <STNHDIcon />
            </div>

            <div className="col-lg-4 col-md-4">
              <p className="company-name">© 2021 Tâm Trí Lực</p>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}
              >
                <li>
                  <Link to="/#">
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link to="/#">
                    <YoutubeIcon />
                  </Link>
                </li>
                <li>
                  <Link to="/#">
                    <TiktokIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
