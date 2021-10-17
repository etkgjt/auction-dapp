import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PROFILE_LIST_LIMIT_DEFAULT } from "../../../configs/contants"
import { getUserData } from "../../../store/user/selector"
// import { VoiCon } from "../assets/svg";
import { actions } from "../Store/FriendList/reducer"

import Pagination from "../../../components/Pagination"

import {
  getListSelector,
  getListLoadingSelector
} from "../Store/FriendList/selector"
import { Row } from "reactstrap"
import listWrapper from "../assets/images/list.png"
import { GoldIcon } from "../../Achievement/assets/icon"
import voiRank from "../assets/images/voirank.png"
import AsyncImage from "../../../components/AsyncImage"
import defaultAvatar from "../../../assets/images/default-avatar.jpg"
const FriendList = () => {
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const listFriend = useSelector(getListSelector)
  const listFriendLoading = useSelector(getListLoadingSelector)

  useEffect(() => {
    dispatch(
      actions.getList({
        prefix: `/${userData?.userId}`,
        page: 1,
        limit: PROFILE_LIST_LIMIT_DEFAULT
      })
    )
  }, [])

  const { paging } = listFriend

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
          {listFriend &&
          Array.isArray(listFriend?.listData) &&
          listFriend?.listData?.length ? (
            listFriend?.listData?.map((item, index) => (
              <div key={index} className="friendlist-item-wrapper">
                <p className="friendlist-item-rank">{index + 1}</p>
                <div className="friendlist-item-avatar">
                  <AsyncImage
                    src={item?.avatar || defaultAvatar}
                    className="friendlist-item-avatar-image"
                    placeholderClassName="friendlist-item-avatar-loading"
                  />
                </div>
                <div className="friendlist-item-info">
                  <span className="friendlist-item-level">
                    {`${
                      item?.inviteUserCount
                        ? "Cấp " + item?.inviteUserCount
                        : ""
                    }${
                      item?.inviteUserCount && item?.level?.name ? " | " : ""
                    }${item?.level?.name || ""}`}
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
            ))
          ) : (
            <img
              src={voiRank}
              width="60%"
              height="auto"
              style={{ marginTop: "20%" }}
            />
          )}
        </div>
      </div>
      {paging?.totalPage >= 2 ? (
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
      ) : null}
    </div>
  )
}
export default FriendList
