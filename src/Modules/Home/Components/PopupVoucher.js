import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { Row } from "reactstrap"
import { CircleCloseButton } from "../../../assets/svg"
import PaginationBoxView from "../../../components/Pagination"
import SlideInModal from "../../../components/SlideInModal"
import {
  GIFT_LIST_LIMIT_DETAULT,
  RETCODE_SUCCESS
} from "../../../configs/contants"
import { getUserData } from "../../../store/user/selector"
import {
  CheckedIcon,
  UnCheckIcon,
  GoldIcon
} from "../../Achievement/assets/icon"
import { ButtonWrapperWhite } from "../../Gifts/assets/icon"
import { actions } from "../Store/VoucherList/reducer"
import {
  getListSelector,
  getListLoadingSelector
} from "../Store/VoucherList/selector"
import { postRequestGiftCard } from "../Store/VoucherList/service"
const PopupVoucher = () => {
  const [selectedItem, setSelectedItem] = useState()

  const userData = useSelector(getUserData)
  const dispatch = useDispatch()
  const listVoucher = useSelector(getListSelector)
  const listLoading = useSelector(getListLoadingSelector)

  React.useEffect(() => {
    dispatch(
      actions.getList({
        page: 1,
        limit: GIFT_LIST_LIMIT_DETAULT
      })
    )
  }, [])

  React.useEffect(() => {
    if (listVoucher && listVoucher?.listData?.length && !selectedItem)
      setSelectedItem(listVoucher?.listData?.[0])
  }, [listVoucher])

  const handleSubmit = async () => {
    try {
      const res = await postRequestGiftCard({
        userid: userData?.userId,
        type: "evoucher",
        name: selectedItem?.name,
        value: selectedItem?.value,
        description: selectedItem?.description,
        status: 0
      })
      if (res.data.retCode === RETCODE_SUCCESS) {
        toast.success(
          "Nhận quà thành công, vui lòng kiểm tra lại trong Quà của tôi!",
          {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          }
        )
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
      SlideInModal.hide()
    } catch (err) {}
  }

  return (
    <div className="popup-voucher-container">
      <div
        className="popup-voucher__close-button"
        onClick={() => {
          SlideInModal.hide()
        }}
      >
        <CircleCloseButton />
      </div>
      <p className="popup-voucher-list-title">Chọn một phần quà</p>
      <div className="popup-voucher-list-wrapper">
        {listVoucher?.listData?.map((item, index) => (
          <>
            <div
              key={item?.id}
              className="popup-voucher-item-wrapper"
              onClick={() => {
                setSelectedItem(item)
              }}
            >
              <div>
                <p className="popup-voucher-item-title">{item?.name}</p>
                <p className="popup-voucher-item-subtitle">
                  {item?.description}
                </p>
                <span className="d-flex flex-row">
                  <p className="popup-voucher-item-cost">
                    {item?.value}k&nbsp;
                  </p>
                  <GoldIcon />
                </span>
              </div>
              {item?.id === selectedItem?.id ? (
                <CheckedIcon />
              ) : (
                <UnCheckIcon />
              )}
            </div>
          </>
        ))}
      </div>
      {/* <Row className="w-100 mt-2">
        <div className="d-flex flex-row justify-content-center">
          <PaginationBoxView
            initialPage={0}
            forcePage={listVoucher?.paging?.curPage - 1}
            pageCount={listVoucher?.paging?.totalPage}
            containerClassName={"d-flex flex-row"}
            // onPageChange={onPageChange}
          />
        </div>
      </Row> */}
      <div className="submit-button-wrapper" onClick={handleSubmit}>
        <ButtonWrapperWhite />
        <p className="submit-button-text">Xác nhận</p>
      </div>
    </div>
  )
}
export default PopupVoucher
