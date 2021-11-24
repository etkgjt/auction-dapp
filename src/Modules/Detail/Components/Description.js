import React, { Component } from "react"

const Description = ({ data }) => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <div className="shop-details-tabs">
          <ul id="tabs">
            <li className="active" id="tab_1">
              Chi tiết sản phẩm
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
              <h3>Reviews</h3>
              <p>There are no reviews yet.</p>
              <b>Be the first to review “Make a Presentation”</b>
              <p>Your Rating</p>

              <ul>
                <li>
                  <a href="#">
                    <i className="icofont-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                  </a>
                </li>
              </ul>

              <form className="review-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="review-message"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Your Review.."
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
