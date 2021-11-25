import Identicon from "identicon.js"
import moment from "moment"
import React, { Component } from "react"

const Description = ({ data, players = [] }) => {
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

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>

          <div id="tab2" className="tabs_item content">
            <div className="shop-reviews">
              <h3 className="title">Lịch sử đấu giá</h3>
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
                    </tr>
                  </thead>

                  <tbody>
                    {newPlayer?.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="col">{idx + 1}</th>
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
                          <a>{getPlayerInfo(item).name}</a>
                        </td>
                        <td className="product-total">
                          <span className="subtotal-amount">
                            {getPlayerInfo(item).address}
                          </span>
                        </td>
                        <td className="product-name">
                          <a>{getEth(getPlayerInfo(item).bid_val)} ETH</a>
                        </td>

                        <td className="product-total">
                          <span className="subtotal-amount">
                            {moment(getPlayerInfo(item).date).format(
                              "HH:mm:SS DD/MM/YYYY"
                            )}
                          </span>
                        </td>
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
