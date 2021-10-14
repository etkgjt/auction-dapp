import React, { Component, useState } from "react"
import { useHistory } from "react-router"
import { Col, Row, Modal, ModalBody, Container } from "reactstrap"
import {
  getListSelector,
  getListLoadingSelector
} from "../Store/Notification/selector"
import { actions } from "../Store/Notification/reducer"
import { useDispatch, useSelector } from "react-redux"
import { ModalCloseButton } from "../assets/icons"

import { getNotificaitonDetails } from "../Store/Notification/service"
import {
  HOME_RANK_LIMIT_DEFAULT,
  RETCODE_SUCCESS
} from "../../../configs/contants"
import { toast } from "react-toastify"
import AsyncImage from "../../../components/AsyncImage"
import LoadingIndicator from "../../../components/LoadingIndicator"
import { getUserData } from "../../../store/user/selector"

import Pagination from "../../../components/Pagination"
import voi1 from "../assets/images/voi1.png"
import voi2 from "../assets/images/voi2.png"
import voi3 from "../assets/images/voi3.png"
import voi4 from "../assets/images/voi4.png"

const isServer = typeof window === "undefined"
const WOW = !isServer ? require("wowjs") : null

const BlogOne = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const userData = useSelector(getUserData)

  const [isOpen, setIsOpen] = useState(false)
  const [notiDetailLoading, setNotiDetailLoading] = useState(false)
  const [dataDetail, setDataDetail] = useState()
  const [firstTime, setIsFirstTime] = useState(true)

  const listNoti = useSelector(getListSelector)
  const listNotiLoading = useSelector(getListLoadingSelector)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const currentPos = userData?.level?.position
  const getImage = () => {
    if (currentPos === 0 || !currentPos || currentPos === 1) {
      return voi1
    }
    if (currentPos === 2) {
      return voi2
    }
    if (currentPos === 3) {
      return voi3
    }
    if (currentPos === 4) return voi4
    return voi4
  }

  const fetchNotiDetail = async (id = 0) => {
    try {
      setNotiDetailLoading(true)
      const res = await getNotificaitonDetails(id)
      console.log("RES", res.data)
      if (res.data?.retCode === RETCODE_SUCCESS) {
        setDataDetail(res.data.data)
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
    } catch (err) {
    } finally {
      setNotiDetailLoading(false)
    }
  }

  React.useEffect(() => {
    dispatch(
      actions.getList({
        page: 1,
        limit: HOME_RANK_LIMIT_DEFAULT,
        userId: userData?.userId
      })
    )
  }, [])

  const onPageChange = ({ selected }) => {
    dispatch(
      actions.getList({
        page: selected + 1,
        limit: HOME_RANK_LIMIT_DEFAULT,
        userId: userData?.userId
      })
    )
  }
  const { paging } = listNoti

  React.useEffect(() => {
    if (!isOpen && !firstTime) {
      dispatch(
        actions.getList({
          page: listNoti?.paging?.curPage,
          limit: HOME_RANK_LIMIT_DEFAULT,
          userId: userData?.userId
        })
      )
    }
  }, [isOpen])

  return (
    <div className="notification-area">
      <Container>
        <div className="notification-wrapper">
          {listNoti?.listData?.length ? (
            <Row>
              {listNoti?.listData?.map((item, index) => (
                <Col
                  key={item?.id}
                  xl="12"
                  lg="12"
                  className="d-flex flex-column"
                  onClick={() => {
                    if (firstTime) {
                      setIsFirstTime(false)
                    }
                    toggle()
                    fetchNotiDetail(item?.id)
                  }}
                >
                  <div className="notification-item-wrapper">
                    {index !== 0 ? (
                      <hr className="notification-divider" />
                    ) : null}
                    <div className="notification-date">{item?.createdAt}</div>
                    <div className="notification-title">{item?.title}</div>
                    <div className="notification-subtitle">{item?.content}</div>
                    {!item?.seen ? <div className="unseen-badge" /> : null}
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="w-100">
              <h4 className="text-center">Chưa có thông báo nào!</h4>
            </Row>
          )}
          {paging?.totalPage > 1 ? (
            <Row className="w-100 mt-5">
              <div className="d-flex flex-row justify-content-center">
                <Pagination
                  initialPage={paging?.curPage - 1}
                  pageCount={paging?.totalPage}
                  containerClassName={"d-flex flex-row"}
                  onPageChange={onPageChange}
                />
              </div>
            </Row>
          ) : null}
        </div>
      </Container>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        size="lg"
        contentClassName="content-modal"
      >
        <div className="noti-close-btn" onClick={toggle}>
          <ModalCloseButton />
        </div>
        <ModalBody>
          <div className="noti-content-wrapper">
            {notiDetailLoading ? (
              <LoadingIndicator />
            ) : (
              <Row>
                <Col xl="12" lg="12" sm="12" xs="12">
                  <h3 className="noti-title">{dataDetail?.title}</h3>
                </Col>
                <Col xl="5" lg="5" sm="5" xs="5">
                  <div className="noti-image-wrapper">
                    <AsyncImage
                      className={
                        "noti-image" + dataDetail?.urlImage ? " voi-image" : ""
                      }
                      placeholderClassName="noti-image-loading"
                      src={dataDetail?.urlImage || getImage()}
                    />
                  </div>
                </Col>
                <Col xl="7" lg="7" sm="7" xs="7">
                  <p className="noti-content">{dataDetail?.content}</p>
                </Col>
              </Row>
            )}
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default BlogOne
