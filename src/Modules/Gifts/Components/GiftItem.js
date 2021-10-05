import moment from "moment"
import React from "react"
import { toast } from "react-toastify"
import PopupUseGift from "./PopupUseGift"
//Asset
import { GoldIcon } from "../assets/icon"
import card from "../assets/images/card.png"
import ticket from "../assets/images/ticket.png"
import voucher from "../assets/images/voucher.png"
import evoucher from "../assets/images/evoucher.png"
//REDUx
import { postRequestGift } from "../Store/AllGifts/service"
import { useDispatch, useSelector } from "react-redux"
import { getUserData } from "../../../store/user/selector"
import {
  GIFT_LIST_LIMIT_DETAULT,
  RETCODE_SUCCESS
} from "../../../configs/contants"
import SlideInModal from "../../../components/SlideInModal"
import { actions } from "../Store/MyGifts/reducer"
import { actions as userActions } from "../../../store/user/reducer"

const getGiftImage = (type) => {
  switch (type) {
    case "ticket": {
      return ticket
    }
    case "voucher": {
      return voucher
    }
    case "card": {
      return card
    }
    default: {
      return evoucher
    }
  }
}
const getGiftBackground = (type) => {
  switch (type) {
    case "ticket": {
      return "#FFC61A"
    }
    case "voucher": {
      return "#555AFF"
    }
    case "card": {
      return "#F68317"
    }
    default: {
      return "#EA5023"
    }
  }
}
const getGiftSubtitle = (type, subtitle) => {
  switch (type) {
    case "ticket": {
      return "Ngày quay: " + moment(subtitle).format("DD/MM/YYYY")
    }
    case "voucher": {
      return "Ngày quay: " + moment(subtitle).format("DD/MM/YYYY")
    }
    case "card": {
      return "#F68317"
    }
    default: {
      return "#EA5023"
    }
  }
}
const GiftItem = ({
  item,
  index,
  isUsed = false,
  isTrade = false,
  setActiveTab = () => {}
}) => {
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)

  const onRequestGift = async () => {
    try {
      const res = await postRequestGift({
        userid: userData?.userId,
        type: item?.type,
        name: item?.name,
        value: item?.value,
        description: item?.description,
        status: 0
      })
      if (res.data.retCode === RETCODE_SUCCESS) {
        toast.success(
          "Đổi quà thành công, vui lòng kiểm tra lại trong Quà của tôi!",
          {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          }
        )
        setActiveTab(1)
        dispatch(
          actions.getList({
            limit: GIFT_LIST_LIMIT_DETAULT,
            page: 1,
            userid: userData?.userId
          })
        )
        dispatch(actions.getInfoUser({ userid: userData?.userId }))
      } else {
        toast.error(res.data.retText, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    } catch (err) {}
  }
  const onUseGiftPress = () => {
    SlideInModal.show(
      () => {},
      <PopupUseGift item={item} />,
      "invite-popup-modal-wrapper"
    )
  }
  return (
    <div className="d-flex flex-row justify-content-between">
      <div key={index} className="gifts-item-wrapper">
        <div
          className="d-flex flex-row ticket-left"
          style={{
            backgroundColor: getGiftBackground(`${item?.type}`.toLowerCase())
          }}
        >
          <img
            className="gifts-item-image"
            src={getGiftImage(`${item?.type}`.toLowerCase())}
          />
          <div className="gifts-item-info-wrapper">
            <p className="gifts-item-title">{item.name}</p>
            <p className="gifts-item-subtitle">{`${
              item?.type === "ticket"
                ? "Ngày quay: " + moment(item?.expDate).format("DD/MM/YYYY")
                : "Hạn sử dụng : " + moment(item?.expDate).format("DD/MM/YYYY")
            }`}</p>
            {item.type === "ticket" ? (
              <p className="gifts-item-point">{`+${item.code}`}</p>
            ) : (
              <span className="d-flex flex-row">
                <p className="gifts-item-point">{`+${item.value}k`}</p>
                <GoldIcon />
              </span>
            )}
          </div>
        </div>
        {isUsed || item?.status === 1 ? null : (
          <div
            onClick={
              item?.type === "ticket"
                ? () => {}
                : isTrade
                ? onRequestGift
                : onUseGiftPress
            }
            className="ticket-right"
            style={{
              backgroundColor: getGiftBackground(`${item?.type}`.toLowerCase())
            }}
          >
            <p>
              {isTrade ? (
                <>
                  Đổi
                  <br />
                  quà
                </>
              ) : (
                <>
                  Sử <br /> dụng
                </>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
export default GiftItem
