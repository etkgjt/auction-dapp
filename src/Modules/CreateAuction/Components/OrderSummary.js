import { Button } from "reactstrap"
import React, { Component } from "react"

export default function OrderSummary({
  handleSubmit = () => {},
  formik,
  handleOnchange
}) {
  return (
    <div className="col-lg-6 col-md-12">
      <div className="order-details">
        <h3 className="title">Thông tin đấu giá</h3>
        <div className="bar"></div>

        <div className="col-lg-12 col-md-12">
          <div className="form-group">
            <label>Giá khởi điểm</label>
            <input
              name="initBidValue"
              onChange={(e) => {
                handleOnchange(e, formik)
              }}
              type="number"
              className="form-control"
            />
          </div>
        </div>

        <div className="col-lg-12 col-md-6">
          <div className="form-group">
            <label>Bước giá</label>
            <input
              type="number"
              name="stepValue"
              onChange={(e) => {
                handleOnchange(e, formik)
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-6">
          <div className="form-group">
            <label>Giá Unlock</label>
            <input
              type="number"
              name="unlockValue"
              onChange={(e) => {
                handleOnchange(e, formik)
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-6">
          <div className="form-group">
            <label>Thời gian kết thúc</label>
            <input
              type="date"
              name="endDate"
              onChange={(e) => {
                handleOnchange(e, formik)
              }}
              className="form-control"
            />
            <input
              type="time"
              name="endTime"
              onChange={(e) => {
                handleOnchange(e, formik)
              }}
              className="form-control mt-2"
            />
          </div>
        </div>

        {/* <Payment amount={totalAmount * 100} disabled={this.props.disabled} /> */}
      </div>
      <Button
        onClick={handleSubmit}
        type="submit"
        block
        className="mt-5 w-50"
        color="primary"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        Tạo
      </Button>
    </div>
  )
}
