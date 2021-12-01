import React, { Component, useState } from "react"
import { Link } from "react-router-dom"
import Auction from "../../../Firebase/Auction"
import CourseItem from "../../Home/Components/CourseItem"

export default function RelatedProducts({ category = 1 }) {
  const [listAuction, setListAuction] = useState([])

  const fetchListAuction = async (val = 1) => {
    try {
      const res = await Auction.getListAuction()
      setListAuction(
        res
          ?.sort((a, b) => b?.id * 1 - a?.id * 1)
          .filter((item) => {
            let proData = JSON.parse(item?.product_info)
            if (proData?.category == val) return true
            return false
          })
      )
    } catch (err) {
      console.log("FETCH LIST CATE ERR", err)
    } finally {
    }
  }
  React.useEffect(() => {
    fetchListAuction()
  }, [])
  return (
    <div className="shop-related-prodcut">
      <div className="container">
        <div className="section-title">
          <h2>Sản phẩm tương tự</h2>
          <div className="bar"></div>
        </div>

        <div className="row">
          {listAuction?.map(
            (item, index) =>
              index < 3 && (
                <CourseItem data={item} key={index} isRelated={true} />
              )
          )}
        </div>
      </div>
    </div>
  )
}
