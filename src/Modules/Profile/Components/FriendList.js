import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PROFILE_LIST_LIMIT_DEFAULT } from "../../../configs/contants"
import { getUserData } from "../../../store/user/selector"
import { ListFriendWrapper } from "../assets/icon"
import { actions } from "../Store/FriendList/reducer"

import Pagination from "../../../components/Pagination"

import {
  getListSelector,
  getListLoadingSelector
} from "../Store/FriendList/selector"
import { Row } from "reactstrap"
import listWrapper from "../assets/images/list.png"
import { GoldIcon } from "../../Achievement/assets/icon"

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

  const paging = { listFriend }

  const onPageChange = ({ selected }) => {
    dispatch(
      actions.getList({
        prefix: `/${userData?.userId}`,
        page: selected + 1,
        limit: PROFILE_LIST_LIMIT_DEFAULT
      })
    )
  }

  return (
    <div className="profile-friendlist-area">
      <div className="profile-friendlist-container">
        <img src={listWrapper} width="100%" height="auto" />
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
                <span className="friendlist-item-point">
                  {`${item?.totalPoint}k`}
                  <GoldIcon />{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Row className="w-100 mt-5">
        <div className="d-flex flex-row justify-content-center">
          <Pagination
            initialPage={paging?.curPage || 0}
            pageCount={paging?.totalPage || 1}
            containerClassName={"d-flex flex-row"}
            onPageChange={onPageChange}
          />
        </div>
      </Row>
    </div>
  )
}
export default FriendList
