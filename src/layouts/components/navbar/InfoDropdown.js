import React from "react"
import { useHistory, useLocation } from "react-router"
import { StarIcon } from "./icon"

import "./index.scss"
const data = [
  {
    title: "Tài khoản cá nhân",
    onClick: (history) => {
      history.push("/profile")
    },
    key: "/profile"
  },
  {
    title: "Thông báo",
    onClick: (history) => {
      history.push("/notifications")
    },
    key: "/notifications"
  },
  {
    title: "Thành tựu voi",
    onClick: (history) => {
      history.push("/achievement")
    },
    key: "/achievement"
  },
  {
    title: "Danh sách quà",
    onClick: (history) => {
      history.push("/gifts")
    },
    key: "/gifts"
  },
  {
    title: "Tin tức",
    onClick: (history) => {
      history.push("/news")
    },
    key: "/news"
  },
  {
    title: "Trờ thành đại sứ",
    onClick: (history) => {
      history.push("/inviter")
    },
    key: "/inviter"
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

const InfoDropdown = ({ setIsDropdownOpen = () => {} }) => {
  const activeItem = 1
  const history = useHistory()
  const location = useLocation()
  return (
    <div className="info-dropdown-container">
      <ul className="p-0">
        {data.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              item.onClick(history)
              setIsDropdownOpen(false)
            }}
          >
            {index !== 0 ? <hr color="#F2F2F2" /> : null}
            <span
              className={
                "info-dropdown__item" +
                (location.pathname === item.key ? " active" : "")
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
