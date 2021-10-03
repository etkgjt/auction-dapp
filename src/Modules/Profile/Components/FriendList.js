import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PROFILE_LIST_LIMIT_DEFAULT } from "../../../configs/contants"
import { getUserData } from "../../../store/user/selector"
import { ListFriendWrapper } from "../assets/icon"
import { actions } from "../Store/FriendList/reducer"
import {
  getListSelector,
  getListLoadingSelector
} from "../Store/FriendList/selector"

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
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const listFriend = useSelector(getListSelector)
  const listFriendLoading = useSelector(getListLoadingSelector)

  const getFriendListWrapperWidth = () => {
    const width = window.innerWidth
    const paddingWidth = width * 0.84
    return (paddingWidth / 12) * 6
  }
  const getFriendListWrapperHeight = () => {
    const ratio = 558 / 949
    return getFriendListWrapperWidth() / ratio
  }
  useEffect(() => {
    dispatch(
      actions.getList({
        prefix: `/${userData?.userId}`,
        page: 1,
        limit: PROFILE_LIST_LIMIT_DEFAULT
      })
    )
  }, [])

  return (
    <div className="profile-friendlist-area">
      <div className="profile-friendlist-container">
        <ListFriendWrapper
          width={getFriendListWrapperWidth()}
          height={getFriendListWrapperHeight()}
        />
        <div className="profile-friendlist-inner">
          <h1>Vòng tròn bạn bè</h1>
          {listFriend?.listData?.map((item, index) => (
            <div key={index} className="friendlist-item-wrapper">
              <p className="friendlist-item-rank">{index + 1}</p>
              <div className="friendlist-item-avatar"></div>
              <div className="friendlist-item-info">
                <span className="friendlist-item-level">
                  {item?.level?.name}
                </span>
                <span className="friendlist-item-name">
                  {item.childFullName1}
                </span>
                <span className="friendlist-item-point">{`${item?.totalPoint}k`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default FriendList
