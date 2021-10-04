import moment from "moment"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row } from "reactstrap"
import { CircleCloseButton } from "../../../assets/svg"
import SlideInModal from "../../../components/SlideInModal"
import { HOME_RANK_LIMIT_DEFAULT } from "../../../configs/contants"
import { getUserData } from "../../../store/user/selector"
import { GoldIcon } from "../assets/icon"
import Pagination from "../../../components/Pagination"
//REDUX
import { actions } from "../Store/History/reducer"
import {
  getListLoadingSelector,
  getListSelector
} from "../Store/History/selector"

const PopupHistory = () => {
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const listHistory = useSelector(getListSelector)
  const listHistoryLoading = useSelector(getListLoadingSelector)
  useEffect(() => {
    dispatch(
      actions.getList({
        page: 1,
        limit: HOME_RANK_LIMIT_DEFAULT,
        userid: userData?.userId
      })
    )
  }, [])
  const onPageChange = ({ selected }) => {
    dispatch(
      actions.getList({
        page: selected + 1,
        limit: HOME_RANK_LIMIT_DEFAULT,
        userid: userData?.userId
      })
    )
  }

  return (
    <div className="popup-history-container">
      <div
        className="popup-history__close-button"
        onClick={() => {
          SlideInModal.hide()
        }}
      >
        <CircleCloseButton />
      </div>
      <div className="history-list-wrapper">
        {listHistory?.listData?.map((item, index) => (
          <>
            {index !== 0 ? <hr /> : null}
            <div key={item?.id} className="history-item-wrapper">
              <p className="history-item-date">{`${moment(
                item?.createdAt
              ).format("HH:mm")} | ${moment(item?.createdAt).format(
                "DD.MM.YYYY"
              )}`}</p>
              <span className="d-flex flex-row justify-content-between">
                <span
                  className="history-item-title"
                  style={
                    item?.type !== 1
                      ? {
                          color: "#EA5023"
                        }
                      : null
                  }
                >
                  {item?.title}
                </span>
                <span className="history-item-point">
                  {item?.changeValue}
                  <GoldIcon />
                </span>
              </span>
              <p className="history-item-subtitle">{item?.description}</p>
            </div>
          </>
        ))}
      </div>
      <Row className="w-100 mt-2">
        <div className="d-flex flex-row justify-content-center">
          <Pagination
            initialPage={0}
            forcePage={listHistory?.paging?.curPage - 1}
            pageCount={listHistory?.paging?.totalPage}
            containerClassName={"d-flex flex-row"}
            onPageChange={onPageChange}
          />
        </div>
      </Row>
    </div>
  )
}
export default PopupHistory
