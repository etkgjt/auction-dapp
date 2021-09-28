import React from "react"
import { ListFriendWrapper } from "../assets/icon"

const data = [
  {
    level: 10,
    name: "Trần Thanh Nguyên",
    point: 432000
  },
  {
    level: 9,
    name: "Trần Thanh Nguyên",
    point: 425000
  },
  {
    level: 9,
    name: "Trần Thanh Nguyên",
    point: 412500
  },
  {
    level: 8,
    name: "Trần Thanh Nguyên",
    point: 232000
  },
  {
    level: 7,
    name: "Trần Thanh Nguyên",
    point: 132000
  },
  {
    level: 8,
    name: "Trần Thanh Nguyên",
    point: 232000
  },
  {
    level: 7,
    name: "Trần Thanh Nguyên",
    point: 132000
  }
]

const FriendList = () => {
  const getFriendListWrapperWidth = () => {
    const width = window.innerWidth
    const paddingWidth = width * 0.84
    return (paddingWidth / 12) * 6
  }
  const getFriendListWrapperHeight = () => {
    const ratio = 558 / 949
    return getFriendListWrapperWidth() / ratio
  }

  return (
    <div className="profile-friendlist-area">
      <div className="profile-friendlist-container">
        <ListFriendWrapper
          width={getFriendListWrapperWidth()}
          height={getFriendListWrapperHeight()}
        />
        <div className="profile-friendlist-inner">
          <h1>Vòng tròn bạn bè</h1>
          {data.map((item, index) => (
            <div key={index} className="friendlist-item-wrapper">
              <p className="friendlist-item-rank">{index + 1}</p>
              <div className="friendlist-item-avatar"></div>
              <div className="friendlist-item-info">
                <span className="friendlist-item-level">
                  {"Cấp " + item.level}
                </span>
                <span className="friendlist-item-name">{item.name}</span>
                <span className="friendlist-item-point">{`${Math.round(
                  item.point / 1000
                )}k`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default FriendList
