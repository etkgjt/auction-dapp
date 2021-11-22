import React from "react"
import Select from "react-select"
const option = [
  {
    value: 0,
    label: "Tất cả"
  },
  {
    value: 1,
    label: "Từ thấp đến cao"
  },
  {
    value: 2,
    label: "Từ cao đến thấp"
  },
  {
    value: 3,
    label: "Bán chạy"
  }
]
const CourseDropdown = () => {
  return (
    <Select
      blurInputOnSelect={true}
      options={option}
      classNamePrefix="course-dropdown"
      placeholder="Sắp xếp"
    />
  )
}
export default CourseDropdown
