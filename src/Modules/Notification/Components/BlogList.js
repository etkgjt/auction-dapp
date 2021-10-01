import React, { Component, useState } from "react"
import { useHistory } from "react-router"
import { Col, Row, Modal, ModalBody } from "reactstrap"
import {
  getListSelector,
  getListLoadingSelector
} from "../Store/Notification/selector"
import { actions } from "../Store/Notification/reducer"
import { useDispatch, useSelector } from "react-redux"
import { ModalCloseButton } from "../assets/icons"

import { getNotificaitonDetails } from "../Store/Notification/service"
import { RETCODE_SUCCESS } from "../../../configs/contants"
import { toast } from "react-toastify"
import AsyncImage from "../../../components/AsyncImage"
import LoadingIndicator from "../../../components/LoadingIndicator"

const BlogOne = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const [notiDetailLoading, setNotiDetailLoading] = useState(false)
  const [dataDetail, setDataDetail] = useState()

  const listNoti = useSelector(getListSelector)
  const listNotiLoading = useSelector(getListLoadingSelector)

  const onItemPress = (id) => {
    history.push(`/news/${id}`)
  }
  const toggle = () => {
    setIsOpen(!isOpen)
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
        limit: 5,
        userId: 1
      })
    )
  }, [])

  return (
    <div className="notification-area">
      <div className="notification-wrapper">
        <Row className="w-100">
          {listNoti?.map((item, index) => (
            <Col
              xl="12"
              lg="12"
              className="d-flex flex-column"
              onClick={() => {
                toggle()
                fetchNotiDetail(item?.id)
              }}
            >
              <div className="notification-item-wrapper w-100">
                {index !== 0 ? <hr className="notification-divider" /> : null}
                <div className="notification-date">{item?.createdAt}</div>
                <div className="notification-title">{item?.title}</div>
                <div className="notification-subtitle">{item?.content}</div>
                {!item?.seen ? <div className="unseen-badge" /> : null}
              </div>
            </Col>
          ))}
        </Row>
      </div>
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
                <Col xl="12" lg="12">
                  <h3 className="noti-title">{dataDetail?.title}</h3>
                </Col>
                <Col xl="5" lg="5">
                  <div className="noti-image-wrapper">
                    <AsyncImage
                      className="noti-image"
                      placeholderClassName="noti-image-loading"
                      src={dataDetail?.urlImage}
                    />
                  </div>
                </Col>
                <Col xl="7" lg="7">
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
