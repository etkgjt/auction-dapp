import React, { Component } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { Col, Row } from "reactstrap"
import { ButtonBlue, ButtonOrange } from "../assets/icons"
import { getListLoadingSelector, getListSelector } from "../Store/News/selector"

import { actions } from "../Store/News/reducer"
import AsyncImage from "../../../components/AsyncImage"
import { NEWS_LIST_LIMIT_DEFAULT } from "../../../configs/contants"
import Pagination from "../../../components/Pagination"

const BlogOne = () => {
  const dispatch = useDispatch()

  const listNews = useSelector(getListSelector)
  const listNewsLoading = useSelector(getListLoadingSelector)

  const history = useHistory()
  const onItemPress = (id) => {
    history.push(`/news/${id}/news`)
  }

  React.useEffect(() => {
    dispatch(
      actions.getList({
        page: 1,
        limit: NEWS_LIST_LIMIT_DEFAULT
      })
    )
  }, [])

  const onPageChange = ({ selected }) => {
    dispatch(
      actions.getList({
        page: selected + 1,
        limit: NEWS_LIST_LIMIT_DEFAULT
      })
    )
  }
  const { paging } = listNews
  return (
    <div className="news-list-area">
      <div className="news-list-wrapper">
        <h1 className="news-list-title">Tin tức</h1>
        <h3 className="news-list-subtitle">
          Theo dõi để không bỏ lỡ cơ hội nhận và đổi hàng nghìn quà tặng hấp dẫn{" "}
        </h3>
        <div className="news-search-bar">
          <input
            placeholder="Nhập chủ để để tìm bài viết..."
            className="search-input"
          />
          <div className="search-button">
            <span>Tìm kiếm</span>
          </div>
        </div>
        <Row>
          {listNews?.listData?.map((item, index) => (
            <Col xl="3" lg="3" md="3" sm="4" xs="4" key={item?.id}>
              <div
                className="news-item-wrapper"
                onClick={() => {
                  onItemPress(item?.id)
                }}
              >
                <div className="news-item-image-wrapper">
                  <AsyncImage
                    src={item?.urlImage}
                    className="news-item-image"
                    placeholderClassName="news-item-image-loading"
                  />
                </div>
                <div className="news-item-title">{item?.title}</div>
                <span
                  className="news-item-subtitle"
                  dangerouslySetInnerHTML={{ __html: item?.content }}
                ></span>
              </div>
            </Col>
          ))}
        </Row>
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
      </div>
    </div>
  )
}

export default BlogOne
