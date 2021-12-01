import Identicon from "identicon.js"
import moment from "moment"
import React, { Component } from "react"
import { useSelector } from "react-redux"
import { getUserData } from "../../../store/user/selector"

const Description = ({ data, players = [], isEnded = false }) => {
  const userData = useSelector(getUserData)

  const newPlayer = players?.sort((a, b) => {
    let keyA = Object.keys(a)[0]
    let keyB = Object.keys(b)[0]
    let dateA = keyA.split("_")[1] * 1
    let dateB = keyB.split("_")[1] * 1
    return dateB - dateA
  })

  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabs_item")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
      // tabcontent[i].className = "inactive";
    }

    tablinks = document.getElementsByTagName("li")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(
        "active",
        "inactive"
      )
    }

    document.getElementById(tabNmae).style.display = "block"
    // document.getElementById(tabNmae).className += "show";
    evt.currentTarget.className = "active"
  }
  const getEth = (val) => val / Math.pow(10, 18)
  const getPlayerInfo = (info) => {
    let key = Object.keys(info)[0]
    let value = Object.values(info)[0]
    let address = key.split("_")[0]
    let date = key.split("_")[1] * 1
    let name = value.split("_")[1]
    let bid_val = value.split("_")[0] * 1
    return {
      address,
      date,
      name,
      bid_val
    }
  }

  // const calcUserWithDrawValue = () => {
  //   if (!userData?.address) {
  //     return {
  //       isHighest: false,
  //       sum: 0
  //     }
  //   }
  //   let isHighest = false
  //   let sum = 0
  //   let highestVal = 0
  //   for (let i = 0; i < newPlayer?.length; i++) {
  //     const info = getPlayerInfo(newPlayer[i])
  //     if (i === 0) {
  //       highestVal = info.bid_val
  //     }
  //     if (info?.address?.toLowerCase() === userData?.address?.toLowerCase()) {
  //       sum += info?.bid_val
  //       if (i == 0) {
  //         isHighest = true
  //       }
  //     }
  //   }

  //   return {
  //     isHighest,
  //     sum,
  //     highestVal
  //   }
  // }
  // const drawVal = calcUserWithDrawValue()
  // const getStatus = (idx, isWithDraw = false) => {
  //   if (idx === 0) {
  //     if (isEnded) return "Thắng cuộc"
  //     return ""
  //   }
  //   if (isWithDraw) {
  //     return "Đã rút"
  //   }
  //   return "Chưa rút"
  // }
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <div className="shop-details-tabs">
          <ul id="tabs">
            <li
              className="active"
              id="tab_1"
              onClick={(e) => openTabSection(e, "tab1")}
            >
              Chi tiết sản phẩm
            </li>
            <li
              className="inactive"
              id="tab_2"
              onClick={(e) => openTabSection(e, "tab2")}
            >
              Lịch sử đấu giá
            </li>
          </ul>
          <div id="tab1" className="tabs_item content show">
            <div className="shop-description">
              <h3>Chi tiết</h3>
              <h5 style={{ fontWeight: "bold" }}>Nơi bảo lưu</h5>
              <p>{data?.savedLocale}</p>
              <h5 style={{ fontWeight: "bold" }}>Địa chỉ</h5>
              <p>{`${data?.address}, ${data?.district}, ${data?.city}`}</p>

              <p>{data?.introduce} </p>
            </div>
          </div>

          <div id="tab2" className="tabs_item content">
            <div className="shop-reviews">
              <div className="row mb-2">
                <div className="col-6">
                  <h3 className="title text-left">Lịch sử đấu giá</h3>
                </div>
                {/* <div className="col-6">
                  <div className="w-100 d-flex flex-row justify-content-end">
                    <button
                      disabled={drawVal.isHighest || !drawVal.sum}
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      Rút{" "}
                      {`${getEth(
                        drawVal.sum -
                          (drawVal.isHighest ? drawVal.highestVal : 0)
                      )} ETH`}
                    </button>
                  </div>
                </div> */}
              </div>
              <div className="bar"></div>

              <div className="order-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">STT</th>
                      <th scope="col">Ảnh</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Địa chỉ ví</th>
                      <th scope="col">Giá Bid</th>
                      <th scope="col">Thời gian</th>
                      {/* <th scope="col">Trạng thái</th> */}
                    </tr>
                  </thead>

                  <tbody>
                    {newPlayer?.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="col">
                          <span
                            style={{
                              color: idx === 0 && isEnded ? "#00C951" : "#000"
                            }}
                          >
                            {idx + 1}
                          </span>
                        </th>
                        <th scope="col">
                          <img
                            width="30"
                            height="30"
                            src={
                              getPlayerInfo(item).address?.length >= 15
                                ? `data:image/png;base64,${new Identicon(
                                    getPlayerInfo(item).address,
                                    30
                                  ).toString()}`
                                : ""
                            }
                          />
                        </th>
                        <td className="product-name">
                          <span
                            style={{
                              color: idx === 0 && isEnded ? "#00C951" : "#000"
                            }}
                          >
                            {getPlayerInfo(item).name}
                          </span>
                        </td>
                        <td className="product-total">
                          <span
                            className="subtotal-amount"
                            style={{
                              color: idx === 0 && isEnded ? "#00C951" : "#000"
                            }}
                          >
                            {getPlayerInfo(item).address}
                          </span>
                        </td>
                        <td className="product-name">
                          <a
                            style={{
                              color: idx === 0 && isEnded ? "#00C951" : "#000"
                            }}
                          >
                            {getEth(getPlayerInfo(item).bid_val)} ETH
                          </a>
                        </td>

                        <td className="product-total">
                          <span
                            style={{
                              color: idx === 0 && isEnded ? "#00C951" : "#000"
                            }}
                            className="subtotal-amount"
                          >
                            {moment(getPlayerInfo(item).date).format(
                              "HH:mm:SS DD/MM/YYYY"
                            )}
                          </span>
                        </td>
                        {/* <td className="product-total">
                          <span
                            style={{
                              color: idx === 0 && isEnded ? "#00C951" : "#000"
                            }}
                            className="subtotal-amount"
                          >
                            {getStatus(idx, false)}
                          </span>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
