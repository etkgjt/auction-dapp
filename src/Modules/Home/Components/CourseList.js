import React, { Component, useState } from "react"
import { Link } from "react-router-dom"

import Categories from "../../../Firebase/Categories"
import Auction, { AUCTION_STATUS } from "../../../Firebase/Auction"
import CourseItem from "./CourseItem"
import { Spinner } from "reactstrap"
import { nonAccentVietnamese } from "../../../utility/helpers"

const LIMIT = 6

export default function ShopVTwo() {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState([])

  const [listAuction, setListAuction] = useState([])

  const [listAuctionFilter, setListAuctionFilter] = useState([])

  const fetchListCate = async () => {
    try {
      const res = await Categories.getAllCategori()
      setCategory(res?.sort((a, b) => b?.id * 1 - a?.id * 1))
    } catch (err) {
      console.log("FETCH LIST CATE ERR", err)
    }
  }

  const fetchListAuction = async () => {
    try {
      const res = await Auction.getListAuction()
      setListAuction(
        res
          ?.sort((a, b) => b?.id * 1 - a?.id * 1)
          .filter(
            (item) =>
              item?.status === AUCTION_STATUS.ENDED ||
              item?.status === AUCTION_STATUS.BIDDING
          )
      )
      setListAuctionFilter(
        res
          ?.sort((a, b) => b?.id * 1 - a?.id * 1)
          .filter(
            (item) =>
              item?.status === AUCTION_STATUS.ENDED ||
              item?.status === AUCTION_STATUS.BIDDING
          )
      )
    } catch (err) {
      console.log("FETCH LIST CATE ERR", err)
    } finally {
      setLoading(false)
    }
  }

  const _handleSearch = (val) => {
    if (!val) {
      setListAuctionFilter(listAuction)
      return
    } else {
      let newList = listAuction?.filter((item) => {
        let proData = JSON.parse(item?.product_info)
        if (
          nonAccentVietnamese(proData?.prodName)?.indexOf(
            nonAccentVietnamese(val)
          ) !== -1
        )
          return true
        return false
      })
      setListAuctionFilter(newList)
    }
  }
  const _filter = (val) => {
    if (!val || val === "all") {
      setListAuctionFilter(listAuction)
      return
    } else {
      let newList = listAuction?.filter((item) => {
        let proData = JSON.parse(item?.product_info)
        if (proData?.category == val) return true
        return false
      })
      setListAuctionFilter(newList)
    }
  }

  React.useEffect(() => {
    fetchListCate()
    fetchListAuction()
  }, [])
  React.useEffect(() => {
    Auction.registerListenListAuctionsChange(() => {
      fetchListAuction()
    })
    return () => {
      Auction.unRegisterListenListAuctionsChange(() => {})
    }
  }, [])
  return (
    <section className="product-area ptb-100">
      <div className="container px-5">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-lg-12 col-md-12"></div>
              {loading && (
                <div className="w-100 d-flex justify-content-center p-5 mt-5">
                  <Spinner color="warning" />
                </div>
              )}
              {listAuctionFilter?.map((data, idx) =>
                idx + 1 <= page * LIMIT && idx + 1 > (page - 1) * LIMIT ? (
                  <CourseItem key={idx} data={data} />
                ) : null
              )}
              {listAuctionFilter?.length ? (
                <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        {page !== 1 && (
                          <li className="page-item">
                            <a
                              className="page-link"
                              onClick={(e) => {
                                e.preventDefault()
                                window.scrollTo(0, 0)
                                setPage(page - 1)
                              }}
                            >
                              <i className="icofont-double-left"></i>
                            </a>
                          </li>
                        )}
                        {Array.from(
                          Array(
                            Math.round(listAuctionFilter?.length / LIMIT)
                          ).keys()
                        ).map((item, index) => (
                          <li
                            className={
                              "page-item" +
                              (page === index + 1 ? " active" : "")
                            }
                          >
                            <a
                              className="page-link"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                window.scrollTo(0, 0)
                                setPage(index + 1)
                              }}
                            >
                              {index + 1}
                            </a>
                          </li>
                        ))}
                        {page !==
                          Math.round(listAuctionFilter?.length / LIMIT) && (
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                window.scrollTo(0, 0)
                                setPage(page + 1)
                              }}
                            >
                              <i className="icofont-double-right"></i>
                            </a>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="sidebar-area">
              <div className="widget widget-search">
                <form>
                  <input
                    onChange={(e) => {
                      _handleSearch(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm"
                  />
                  <button type="submit">
                    <i className="icofont-search-2"></i>
                  </button>
                </form>
              </div>

              <div className="widget widget_product_categories">
                <h3 className="widget-title">Danh mục</h3>
                <div className="bar"></div>

                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        _filter("all")
                      }}
                    >
                      <i className="icofont-bubble-right"></i> Tất cả
                    </a>
                  </li>
                  {category?.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          _filter(item?.id)
                        }}
                      >
                        <i className="icofont-bubble-right"></i> {item?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
