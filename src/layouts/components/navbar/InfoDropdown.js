import React from "react"
import { StarIcon } from "./icon"

import "./index.scss"
const data = [
  {
    title: "Tài khoản cá nhân",
    onClick: () => {}
  },
  {
    title: "Thông báo",
    onClick: () => {}
  },
  {
    title: "Thành tựu voi",
    onClick: () => {}
  },
  {
    title: "Danh sách quà",
    onClick: () => {}
  },
  {
    title: "Tin tức",
    onClick: () => {}
  },
  {
    title: "Trờ thành đại sứ",
    onClick: () => {}
  },
  {
    title: "Siêu Trí Nhớ\nHọc Đường",
    onClick: () => {},
    icon: <StarIcon />
  },
  {
    title: "Mời bạn mới",
    onClick: () => {}
  }
]

const InfoDropdown = () => {
  const activeItem = 1
  return (
    <div className="info-dropdown-container">
      <ul className="p-0">
        {data.map((item, index) => (
          <li key={index}>
            {index !== 0 ? <hr color="#F2F2F2" /> : null}
            <span
              className={
                "info-dropdown__item" + (index === activeItem ? " active" : "")
              }
            >
              {item.title}
              {item?.icon}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InfoDropdown
