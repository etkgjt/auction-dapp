import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Auction, { AUCTION_STATUS } from "../../../Firebase/Auction"
import useCoundDown from "../../../hook/useCountDown"

const CourseItem = ({ data, isRelated = false }) => {
  const history = useHistory()
  const info = data?.product_info

  const productData = JSON.parse(info)
  const countDown = useCoundDown(productData?.endDate - moment().valueOf())
  const [realtimeBidData, setRealtimeBidData] = React.useState(null)

  React.useEffect(() => {
    if (data?.status !== AUCTION_STATUS.ENDED) {
      if (productData?.endDate - moment().valueOf() <= 0) {
        Auction.endAuctions(data?.id)
      }
    }
  }, [data])

  React.useEffect(() => {
    Auction.registerListenAuctionsChange(data?.id, (snapshot) => {
      setRealtimeBidData(snapshot?.val())
    })
    return () => {
      Auction.unRegisterListenAuctionsChange(data?.id)
    }
  }, [])
  const getEth = (val) => val / Math.pow(10, 18)
  const goToDetail = (e) => {
    e.preventDefault()
    history.push(`/detail/${data?.id}`)
    if (isRelated) {
      window.scrollTo(0, 0)
    }
  }
  return (
    <div className={isRelated ? "col-lg-4 col-md-4" : "col-lg-6 col-md-6"}>
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

          <Link onClick={goToDetail} to={`/detail/${data?.id}`}>
            <a className="add-to-cart-btn" onClick={(e) => {}}>
              Bid now <i className="icofont-shopping-cart"></i>
            </a>
          </Link>
        </div>

        <div className="product-content">
          <h3>
            <Link onClick={goToDetail} to={`/detail/${data?.id}`}>
              <a className="product-name">{productData?.prodName}</a>
            </Link>
          </h3>

          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-8">
              <h5 className="product-name">{`Giá hiện tại: ${getEth(
                realtimeBidData?.max_bid || data?.max_bid
              )} ETH`}</h5>
            </div>

            <div className="col-lg-4">
              {realtimeBidData?.status !== AUCTION_STATUS.ENDED &&
              countDown > 0 ? (
                <h5
                  style={{ textAlign: "right" }}
                  className="text-danger"
                >{`${moment.duration(countDown).hours()}:${
                  moment.duration(countDown).minutes() < 10
                    ? "0" + moment.duration(countDown).minutes()
                    : moment.duration(countDown).minutes()
                }:${
                  moment.duration(countDown).seconds() < 10
                    ? "0" + moment.duration(countDown).seconds()
                    : moment.duration(countDown).seconds()
                }`}</h5>
              ) : null}
            </div>
            {realtimeBidData?.status === AUCTION_STATUS.ENDED && (
              <div className="mt-2">
                <h5 className="out-date-text">{"Đã hết thời gian đấu giá"}</h5>
              </div>
            )}
            {realtimeBidData?.status === AUCTION_STATUS.STOP && (
              <div className="mt-2">
                <h5 className="out-date-text">{"Đã kết thúc"}</h5>
              </div>
            )}
          </div>
        </div>
        {/* {realtimeBidData?.status === AUCTION_STATUS.ENDED && (
          <div
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
          </div>
        )} */}
      </div>
    </div>
  )
}
export default CourseItem
