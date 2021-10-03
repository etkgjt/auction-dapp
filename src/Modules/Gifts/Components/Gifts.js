import React, { useEffect, useState } from "react"
import { GiftsHeaderTitle, GoldIcon } from "../assets/icon"
import voi1 from "../assets/images/voicon.png"

import { actions as allGiftActions } from "../Store/AllGifts/reducer"
import { actions as myGiftActions } from "../Store/MyGifts/reducer"
import { actions as usedGiftActions } from "../Store/UsedGifts/reducer"

import {
  getListSelector as getAllGiftsSelector,
  getListLoadingSelector as getAllGiftLoadingSelector
} from "../Store/AllGifts/selector"

import {
  getListSelector as getMyGiftsSelector,
  getListLoadingSelector as getMyGiftLoadingSelector
} from "../Store/MyGifts/selector"

import {
  getListSelector as getUsedGiftsSelector,
  getListLoadingSelector as getUsedGiftLoadingSelector
} from "../Store/UsedGifts/selector"
import { useDispatch, useSelector } from "react-redux"
import { getUserData } from "../../../store/user/selector"
import GiftItem from "./GiftItem"

import moment from "moment"
import { GIFT_LIST_LIMIT_DETAULT } from "../../../configs/contants"

const Gifts = () => {
  const dispatch = useDispatch()

  const [activeTab, setActiveTabs] = useState(0)
  const userData = useSelector(getUserData)

  const allGift = useSelector(getAllGiftsSelector)
  const allGiftLoading = useSelector(getAllGiftLoadingSelector)
  const myGift = useSelector(getMyGiftsSelector)
  const myGiftLoading = useSelector(getMyGiftLoadingSelector)
  const usedGift = useSelector(getUsedGiftsSelector)
  const usedGiftLoading = useSelector(getUsedGiftLoadingSelector)

  const listAllGift = allGift?.listData || []
  const listUsedGift = usedGift?.listData || []
  const listMyGift = myGift?.listData || []

  useEffect(() => {
    dispatch(
      allGiftActions.getList({
        page: 1,
        limit: GIFT_LIST_LIMIT_DETAULT
      })
    )
    dispatch(
      usedGiftActions.getList({
        page: 1,
        limit: GIFT_LIST_LIMIT_DETAULT,
        status: 1,
        userid: userData?.userId
      })
    )
    dispatch(
      myGiftActions.getList({
        page: 1,
        limit: GIFT_LIST_LIMIT_DETAULT,
        userid: userData?.userId
      })
    )
  }, [])

  const renderAllGift = React.useMemo(() => {
    return listAllGift.map((item, index) => {
      return (
        <GiftItem
          setActiveTab={setActiveTabs}
          item={item}
          index={index}
          key={item?.id}
          isTrade={true}
        />
      )
    })
  }, [JSON.stringify(listAllGift)])
  const renderMyGift = React.useMemo(() => {
    return listMyGift.map((item, index) => {
      return <GiftItem item={item} index={index} key={item?.id} />
    })
  }, [JSON.stringify(listMyGift)])
  const renderUsedGift = React.useMemo(() => {
    return listUsedGift?.length ? (
      listUsedGift.map((item, index) => {
        return (
          <GiftItem item={item} index={index} key={item?.id} isUsed={true} />
        )
      })
    ) : (
      <p className="text-center mt-2">Không có dữ liệu</p>
    )
  }, [JSON.stringify(listUsedGift)])

  return (
    <div className="gifts-container">
      <div className="gifts-top-header-wrapper">
        <GiftsHeaderTitle />
      </div>
      <div className="gifts-tabs-wrapper">
        <span
          className={`${activeTab === 0 && "active"}`}
          onClick={() => setActiveTabs(0)}
        >
          Đã dùng
        </span>
        <span
          className={`${activeTab === 1 && "active"}`}
          onClick={() => setActiveTabs(1)}
        >
          Quà của tôi
        </span>
        <span
          className={`${activeTab === 2 && "active"}`}
          onClick={() => setActiveTabs(2)}
        >
          Tất cả
        </span>
      </div>
      <div className="list-gifts-wrapper">
        {activeTab === 0
          ? renderUsedGift
          : activeTab === 1
          ? renderMyGift
          : renderAllGift}
      </div>
    </div>
  )
}
export default Gifts
