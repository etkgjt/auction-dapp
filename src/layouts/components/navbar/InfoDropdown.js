import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router"

/*REDUX */
import { actions as NotiAction } from "../../../Modules/Notification/Store/Notification/reducer"
import { getCountNotiSelector } from "../../../Modules/Notification/Store/Notification/selector"
import { getUserData } from "../../../store/user/selector"

/*STYLE ASSET*/
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
    key: "/notifications",
    flag: "noti"
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
    onClick: () => {
      window.location.assign("https://sieutrinhohocduong.com/")
    },
    icon: <StarIcon />
  },
  {
    title: "Mời bạn mới",
    onClick: () => {}
  }
]

const InfoDropdown = ({ setIsDropdownOpen = () => {} }) => {
  //HOOK
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  //SELECTOR
  const userData = useSelector(getUserData)
  const countNoti = useSelector(getCountNotiSelector)

  React.useEffect(() => {
    dispatch(
      NotiAction.getCountUnreadNoti({
        userid: 1
      })
    )
  }, [])

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
              {item?.flag === "noti" && countNoti ? (
                <div className="noti-badge" />
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InfoDropdown
