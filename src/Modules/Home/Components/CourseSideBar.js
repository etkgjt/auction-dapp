import React, { useState } from "react"
import InputRange from "react-input-range"
import { Collapse, Input } from "reactstrap"
import { ChervonDown } from "../assets/icon"
import { currencyFormat } from "../../../utility/currency"

const ratingData = [
  "5 sao",
  "4 sao và cao hơn",
  "3 sao và cao hơn",
  "2 sao và cao hơn",
  "1 sao và cao hơn"
]
const multiSelectData = {
  label: "Điện tử viễn thông",
  children: [
    {
      label: "An ninh mạng",
      value: "anm"
    },
    {
      label: "An ninh mạng 1",
      value: "anm1"
    },
    {
      label: "An ninh mạng 2",
      value: "anm2"
    }
  ]
}

const category = [
  multiSelectData,
  multiSelectData,
  multiSelectData,
  multiSelectData
]

const MultiLevelSelect = ({ hasChildren, data }) => {
  const [state, setState] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className={"multi-level-select__container"}>
      <div className="multi-level__content d-flex flex-row align-items-center justify-content-between">
        <div
          className="d-flex flex-row align-items-center dropdown-btn"
          onClick={toggle}
        >
          <Input type="checkbox" className="mt-0" />
          &nbsp;&nbsp;
          <p className="item-label">{data?.label}</p>
        </div>
        {data?.children?.length && (
          <div
            onClick={toggle}
            className={
              "dropdown-btn" +
              (isOpen ? " dropdown-btn-down" : " dropdown-btn-up")
            }
          >
            <ChervonDown />
          </div>
        )}
      </div>
      {data?.children?.length && (
        <Collapse isOpen={isOpen}>
          {data.children.map((item, index) => (
            <div
              key={index}
              className="multi-level-select__children-item d-flex flex-row align-items-center"
            >
              <Input type="checkbox" className="mt-0" />
              &nbsp;&nbsp;
              <p className="item-label">{item?.label}</p>
            </div>
          ))}
        </Collapse>
      )}
    </div>
  )
}

const CourseSideBar = () => {
  const [price, setPrice] = useState({
    min: 0,
    max: 0
  })

  return (
    <div className="course-sidebar__container">
      <div className="course-sidebar__block">
        <h2 className="course-sidebar__block-title">Danh mục</h2>
        {category?.map((item, index) => (
          <MultiLevelSelect data={item} key={index} />
        ))}
      </div>
      <div className="course-sidebar__block">
        <h2 className="course-sidebar__block-title">Giá khoá học</h2>
        <div className="mt-3">
          <p>hhaa</p>
          <InputRange
            maxValue={99999999}
            minValue={10000}
            formatLabel={(value) => `${value} kg`}
            value={price}
            onChange={(value) => setPrice(value)}
          />
          <div className="row mt-3 mb-1">
            <div className="col col-xl-6 col-lg-6">
              <div className="price-value__wrapper">
                {currencyFormat(price.min, "đ")}
              </div>
            </div>
            <div className="col col-xl-6 col-lg-6">
              <div className="price-value__wrapper">
                {currencyFormat(price.max, "đ")}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="course-sidebar__block">
        <h2 className="course-sidebar__block-title">Đánh giá</h2>
        {ratingData.map((item, index) => (
          <div
            key={index}
            className="rating-item d-flex flex-row align-items-center justify-content-between"
          >
            <div className="d-flex flex-row align-items-center dropdown-btn">
              <Input type="checkbox" className="mt-0" />
              &nbsp;&nbsp;
              <p className="item-label">{item}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}
export default CourseSideBar
