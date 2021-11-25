import React, { Component, useState } from "react"
import { connect, useSelector } from "react-redux"

import RelatedProducts from "./RelatedProducts"
import Description from "./Description"
import { useParams } from "react-router"
import Auction from "../../../Firebase/Auction"
import web3_infura from "../../../utility/web3Infura"
import web3Local from "../../../utility/web3Local"
import Web3 from "web3"
import { getUserData } from "../../../store/user/selector"
import { toast } from "react-toastify"

const DetailsBody = () => {
  const { id } = useParams()
  const userData = useSelector(getUserData)

  const [imgIndex, setImgIndex] = useState(0)

  const [productData, setProductData] = useState()

  const [bidVal, setBidVal] = useState(0)

  const [realtimeBidData, setRealtimeBidData] = useState(null)

  const productInfo = productData?.product_info
    ? JSON.parse(productData?.product_info)
    : {}

  const getProductDetails = async () => {
    try {
      const res = await Auction.getListAuction()
      let item = res?.find((item) => item?.id === id)
      setProductData(item)
    } catch (err) {
      console.log("GET DETAIL ERR", err)
    }
  }
  const pushNewBiddingToDB = () => {
    const bid = localStorage.getItem("bid_value")
    const address = localStorage.getItem("user_address")
    const name = localStorage.getItem("name")
    Auction.createBid(id, {
      player_address: address,
      bid_value: bid * 1,
      name: name
    })
  }

  const handleCreateBidding = async () => {
    if (!userData?.address) {
      toast.error("Vui lòng đăng nhập trước khi đấu giá!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      return
    }
    try {
      const contract_MM = new web3Local.eth.Contract(
        JSON.parse(productData?.abi),
        productData?.address
      )
      contract_MM.methods.bid().send({
        from: userData?.address,
        value: getWei(bidVal),
        gas: 500000
      })
      localStorage.setItem("bid_value", getWei(bidVal))
      localStorage.setItem("user_address", userData?.address)
      localStorage.setItem("name", userData?.user_name)
    } catch (err) {
      console.log("CREATE BID ERR", err)
    }
  }

  React.useEffect(() => {
    getProductDetails()
  }, [id])

  React.useEffect(() => {
    if (productData?.abi) {
      try {
        web3_infura.eth.getBlockNumber((err, num) => {
          if (err) {
            return 0
          }
          if (num) {
            const contract_Infura = new web3_infura.eth.Contract(
              JSON.parse(productData?.abi),
              productData?.address
            )
            contract_Infura.events.bidFailed(
              { filter: {}, fromBlock: num },
              (err, data) => {
                if (err) {
                  console.log("BID ERROR", err)
                  toast.error("Đấu giá thất bại", {
                    position: "top-center",
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  })
                } else {
                  toast.error("Đấu giá thất bại", {
                    position: "top-center",
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  })
                }
              }
            )
            contract_Infura.events.bidEvent(
              { filter: {}, fromBlock: num },
              (err, data) => {
                if (err) {
                  console.log("BID ERROR", err)
                  toast.error("Đấu giá thất bại", {
                    position: "top-center",
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  })
                } else {
                  pushNewBiddingToDB()
                  toast.success("Đấu giá thành công", {
                    position: "top-center",
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  })
                  console.log("BID SUCCESS", data)
                }
              }
            )
          }
        })
      } catch (err) {
        toast.error("Đấu giá thất bại", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    }
  }, [productData, userData])

  React.useEffect(() => {
    Auction.registerListenAuctionsChange(id, (snapshot) => {
      setRealtimeBidData(snapshot?.val())
    })
    return () => {
      Auction.unRegisterListenAuctionsChange(id)
    }
  }, [])

  const getWei = (val) => {
    return val * 1000000000000000000
  }
  const getEth = (val) => val / Math.pow(10, 18)

  return (
    <section className="shop-details-area ptb-100">
      <div className="container ptb-100">
        <div className="shop-details">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12">
              <img
                style={{ maxHeight: 300, width: "100%", objectFit: "contain" }}
                src={productInfo?.images?.[imgIndex]}
              />
              <div className="row mt-2">
                {productInfo?.images?.map((item, index) => (
                  <div
                    onClick={() => {
                      setImgIndex(index)
                    }}
                    className="col-lg-3 col-md-3"
                    key={index}
                  >
                    <img
                      className={
                        "prod-image" +
                        (imgIndex === index ? " prod-image-active" : "")
                      }
                      src={item}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="product-entry-summary">
                <h3>{productInfo?.prodName}</h3>
                <h4>
                  Giá hiện tại:
                  {getEth(realtimeBidData?.max_bid || productData?.max_bid)} ETH
                </h4>

                <p>{productInfo?.introduce}</p>

                {/* <ul className="product-categories">
                  <li>Categories:</li>
                  <li>
                    <a href="#">Books</a>,
                  </li>
                  <li>
                    <a href="#">Art</a>
                  </li>
                </ul> */}

                <form>
                  <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    value={bidVal}
                    min={realtimeBidData?.max_bid}
                    max={999999999}
                    contentEditable={false}
                    onChange={(e) => setBidVal(e.target.value)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault()
                      if (getWei(bidVal) <= realtimeBidData?.max_bid) {
                        toast.error(
                          "Giá đấu giá phải cao hơn so với giá hiện tại!",
                          {
                            position: "top-center",
                            autoClose: 5000,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined
                          }
                        )
                        return
                      }
                      handleCreateBidding()
                      setBidVal(0)
                    }}
                  >
                    Đấu giá
                  </button>
                </form>
              </div>
            </div>
          </div>

          <Description
            data={productInfo}
            players={Object.values(realtimeBidData?.players || {})}
          />
        </div>
      </div>

      <RelatedProducts />
    </section>
  )
}

export default DetailsBody
