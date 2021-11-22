import { Button } from "reactstrap"
import React from "react"
import OrderSummary from "./OrderSummary"
import useForm from "./userForm"
import { Formik } from "formik"

function CheckoutBody({ total, shipping }) {
  const handleOnchange = (e, formik) => {
    formik.setFieldValue(e.target.name, e.target.value)
  }
  function handleSubmit(values) {
    console.log("Form submitted.")
    console.log(values)
  }

  return (
    <section className="checkout-area ptb-100">
      <div className="container">
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            locale: 0,
            savedLocale: "",
            address: "",
            city: "",
            district: "",
            email: "",
            phone: "",
            introduce: "",
            prodName: "",
            initBidValue: "",
            stepValue: "",
            unlockValue: ""
          }}
        >
          {(formik) => {
            return (
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="billing-details">
                      <h3 className="title">Thông tin vật phẩm</h3>
                      <div className="bar"></div>

                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Xuất xứ <span className="required">*</span>
                            </label>

                            <div className="select-box">
                              <select
                                name="locale"
                                onChange={(e) => {
                                  handleOnchange(e, formik)
                                }}
                                className="form-control"
                              >
                                <option value="5">Việt Nam</option>
                                <option value="1">Mỹ</option>
                                <option value="2">Trung Quốc</option>
                                <option value="0">Nhật Bản</option>
                                <option value="3">Pháp</option>
                                <option value="4">Tây Ban Nha</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Nơi bảo lưu</label>
                            <input
                              name="savedLocale"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6">
                          <div className="form-group">
                            <label>
                              Địa chỉ <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="address"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6">
                          <div className="form-group">
                            <label>
                              Tỉnh/Thành phố <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Quận/Huyện <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="district"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              value={formik.values["email"]}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Điện thoại <span className="required">*</span>
                            </label>
                            <input
                              type="number"
                              name="phone"
                              className="form-control"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Giới thiệu <span className="required">*</span>
                            </label>
                            <textarea
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              name="introduce"
                              cols="30"
                              rows="4"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <OrderSummary
                    handleOnchange={handleOnchange}
                    handleSubmit={formik.handleSubmit}
                    formik={formik}
                  />
                </div>
              </form>
            )
          }}
        </Formik>
      </div>
    </section>
  )
}

export default CheckoutBody
