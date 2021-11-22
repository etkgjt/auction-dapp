// import { ChapterIcon, StarIcon } from "@public/svg/course"
// import { currencyFormat } from "@utils/currency"
import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"
import useCoundDown from "../../../hook/useCountDown"
import { ChapterIcon, StarIcon } from "../assets/icon"

const CourseItem = ({ data }) => {
  const countDown = useCoundDown(480000000)
  return (
    <div className="col-lg-6 col-md-6">
      <div className="single-product">
        <div className="product-img">
          <img
            src={
              "https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
            }
            alt="item"
          />

          <Link to="/detail">
            <a className="add-to-cart-btn" onClick={(e) => {}}>
              Bid now <i className="icofont-shopping-cart"></i>
            </a>
          </Link>
        </div>

        <div className="product-content">
          <h3>
            <Link to="/detail">
              <a>{"LOREM ILAU"}</a>
            </Link>
          </h3>

          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-7">
              <h5>{`Giá hiện tại: ${1000}`}</h5>
            </div>

            <div className="col-lg-5">
              <h5
                style={{ textAlign: "right" }}
                className="text-danger"
              >{`${moment.duration(countDown).hours()}:${moment
                .duration(countDown)
                .minutes()}:${moment.duration(countDown).seconds()}`}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CourseItem
