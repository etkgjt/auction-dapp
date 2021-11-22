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
    <div className="single-product">
      <div className="product-img">
        <img
          src="https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
          alt="item"
        />

        <Link href="/cart">
          <a className="add-to-cart-btn">
            Add to Cart <i className="icofont-shopping-cart"></i>
          </a>
        </Link>
      </div>

      <div className="product-content">
        <h3>
          <Link href="/shop-details">
            <a>Drop Side Watch</a>
          </Link>
        </h3>

        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-5">
            <h5>
              $8.50 <span>$12.00</span>
            </h5>
          </div>

          <div className="col-lg-7">
            <h5 style={{ textAlign: "right" }} className="text-right">
              Còn lại:
              {` ${moment.duration(countDown).hours()}:${moment
                .duration(countDown)
                .minutes()}:${moment.duration(countDown).seconds()}`}
            </h5>
          </div>
        </div>
      </div>
    </div>
    // <div className="course-item__container d-flex flex-column">
    //   <div className="course-item__image-wrapper">
    //     <img
    //       src={
    //         "https://image.freepik.com/free-vector/modern-black-friday-sale-background-with-abstract-red-dots_1361-3648.jpg"
    //       }
    //       className="course-item__image"
    //       alt="course_image"
    //     />
    //     <div className="course-item__image-bottom-layer">
    //       <div>
    //         <p className="course-item__price">Giá hiện tại: {1500}</p>
    //       </div>
    //       <div>
    // <span className="course-item__chapter">
    //   {`${moment.duration(countDown).hours()}:${moment
    //     .duration(countDown)
    //     .minutes()}:${moment.duration(countDown).seconds()}`}
    // </span>
    //       </div>
    //     </div>
    //   </div>
    //   <h3 className="course-item__title">{data?.name}</h3>
    //   <p className="course-item__subtitle">{data?.description}</p>
    // </div>
  )
}
export default CourseItem
