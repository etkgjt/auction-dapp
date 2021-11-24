import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"
import Auction, { AUCTION_STATUS } from "../../../Firebase/Auction"
import useCoundDown from "../../../hook/useCountDown"

const CourseItem = ({ data }) => {
  const info = data?.product_info
  const productData = JSON.parse(info)
  const countDown = useCoundDown(productData?.endDate - moment().valueOf())

  React.useEffect(() => {
    if (data?.status !== AUCTION_STATUS.ENDED) {
      if (productData?.endDate - moment().valueOf() <= 0) {
        Auction.endAuctions(data?.id)
      }
    }
  }, [data])

  return (
    <div className="col-lg-6 col-md-6">
      <div className="single-product" style={{ position: "relative" }}>
        <div className="product-img">
          <img
            src={
              productData?.images?.[0] ||
              "https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
            }
            alt="item"
            style={{ height: 250, width: "100%", objectFit: "cover" }}
          />

          <Link to="/detail/1637680403895">
            <a className="add-to-cart-btn" onClick={(e) => {}}>
              Bid now <i className="icofont-shopping-cart"></i>
            </a>
          </Link>
        </div>

        <div className="product-content">
          <h3>
            <Link to={`/detail/${data?.id}`}>
              <a>{productData?.prodName}</a>
            </Link>
          </h3>

          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-7">
              <h5>{`Giá hiện tại: ${data?.max_bid}`}</h5>
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
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.7,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff"
          }}
        >
          <h5>Đã hết thời gian đấu giá</h5>
        </div> */}
      </div>
    </div>
  )
}
export default CourseItem
