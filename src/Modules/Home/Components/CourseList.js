import React, { Component, useState } from "react"
import { Link } from "react-router-dom"

import Categories from "../../../Firebase/Categories"
import Auction from "../../../Firebase/Auction"
import CourseItem from "./CourseItem"

export default function ShopVTwo() {
  const [category, setCategory] = useState([])

  const [listAuction, setListAuction] = useState([])

  const fetchListCate = async () => {
    try {
      const res = await Categories.getAllCategori()
      setCategory(res)
    } catch (err) {
      console.log("FETCH LIST CATE ERR", err)
    }
  }

  const fetchListAuction = async () => {
    try {
      const res = await Auction.getListAuction()
      setListAuction(res)
    } catch (err) {
      console.log("FETCH LIST CATE ERR", err)
    }
  }

  React.useEffect(() => {
    fetchListCate()
    fetchListAuction()
  }, [])
  console.log(listAuction)
  return (
    <section className="product-area ptb-100">
      <div className="container px-5">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="woocommerce-topbar">
                  <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-7 col-md-7">
                      <div className="woocommerce-result-count">
                        <p>Showing 1–16 of 100 results</p>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-5">
                      <div className="woocommerce-topbar-ordering">
                        <form>
                          <div className="select-box">
                            <select className="form-control">
                              <option value="1">Sort by Popularity</option>
                              <option value="2">Sort by Average Rating</option>
                              <option value="0">Sort by Latest</option>
                              <option value="3">
                                Sort by price: Low to High
                              </option>
                              <option value="4">
                                Sort by price: High to Low
                              </option>
                              <option value="5">Sort by New</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {listAuction?.map((data, idx) => (
                <CourseItem key={idx} data={data} />
              ))}

              <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="icofont-double-left"></i>
                        </a>
                      </li>

                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="icofont-double-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="sidebar-area">
              <div className="widget widget-search">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
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
                  {category?.map((item, index) => (
                    <li key={index}>
                      <a href="#">
                        <i className="icofont-bubble-right"></i> {item?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="widget widget_recent_products">
                <h3 className="widget-title">Recent Post</h3>
                <div className="bar"></div>

                <ul>
                  <li>
                    <div className="recent-products-thumb">
                      <Link href="#">
                        <a>
                          <img src="/images/shop-item1.jpg" alt="blog-image" />
                        </a>
                      </Link>
                    </div>

                    <div className="recent-products-content">
                      <h3>
                        <a href="#">Form Rocking Chair</a>
                      </h3>
                      <ul>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                      </ul>
                      <span className="date">$18.00</span>
                    </div>
                  </li>

                  <li>
                    <div className="recent-products-thumb">
                      <Link href="#">
                        <a>
                          <img
                            src="https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
                            alt="blog-image"
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="recent-products-content">
                      <h3>
                        <a href="#">Form Rocking Chair</a>
                      </h3>
                      <ul>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                      </ul>
                      <span className="date">$18.00</span>
                    </div>
                  </li>

                  <li>
                    <div className="recent-products-thumb">
                      <Link href="#">
                        <a>
                          <img
                            src="https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
                            alt="blog-image"
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="recent-products-content">
                      <h3>
                        <a href="#">Form Rocking Chair</a>
                      </h3>
                      <ul>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                      </ul>
                      <span className="date">$18.00</span>
                    </div>
                  </li>

                  <li>
                    <div className="recent-products-thumb">
                      <Link href="#">
                        <a>
                          <img
                            src="https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
                            alt="blog-image"
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="recent-products-content">
                      <h3>
                        <Link href="#">
                          <a>Form Rocking Chair</a>
                        </Link>
                      </h3>
                      <ul>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                      </ul>
                      <span className="date">$18.00</span>
                    </div>
                  </li>
                </ul>
              </div> */}
              {/* 
              <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>
                <div className="bar"></div>

                <div className="tagcloud">
                  <a href="#">Art</a>
                  <a href="#">Book</a>
                  <a href="#">Watch</a>
                  <a href="#">TV</a>
                  <a href="#">Gifts</a>
                  <a href="#">Smart TV</a>
                  <a href="#">Design</a>
                </div>
              </div> */}
              {/* 
              <div className="widget widget_text">
                <h3 className="widget-title">Instagram</h3>
                <div className="bar"></div>

                <ul>
                  <li>
                    <Link href="#">
                      <a>
                        <img
                          src="https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="#">
                      <a>
                        <img
                          src="https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="#">
                      <a>
                        <img
                          src="https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="#">
                      <a>
                        <img
                          src="https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="#">
                      <a>
                        <img
                          src="https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="#">
                      <a>
                        <img
                          src="https://nextland-react.envytheme.com/_next/static/images/shop-item3-2599099f3131c1f2716d49ccf6c3713c.jpg"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
