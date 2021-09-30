import React, { useRef } from "react"
import Carousel from "react-owl-carousel3"
import { useDispatch, useSelector } from "react-redux"
import { ArrowLeftIcon, ArrowRightIcon } from "../assets/icon"

import { actions } from "../Store/News/reducer"
import { getListSelector, getListLoadingSelector } from "../Store/News/selector"

const News = () => {
  const dispatch = useDispatch()
  const listNews = useSelector(getListSelector)
  const listNewsLoading = useSelector(getListLoadingSelector)

  const carouselRef = useRef()

  React.useEffect(() => {
    dispatch(
      actions.getList({
        limit: 12,
        page: 1
      })
    )
  }, [])
  console.log("LIST NEWS", listNews)
  return (
    <div className="news-area">
      <div className="news-container">
        <h1 className="news-container__title">Tin tức nổi bật</h1>
        <h1 className="news-container__subtitle">
          Theo dõi để không bỏ lỡ cơ hội nhận và đổi hàng nghìn quà tặng hấp dẫn
        </h1>
        <div style={{ position: "relative" }}>
          {listNews?.length < 5 ? null : (
            <>
              <div
                onClick={() => {
                  carouselRef?.current?.prev()
                }}
                className="arrow-left"
              >
                <ArrowLeftIcon />
              </div>
              <div
                onClick={() => {
                  carouselRef?.current?.next()
                }}
                className="arrow-right"
              >
                <ArrowRightIcon />
              </div>
            </>
          )}

          <Carousel ref={carouselRef} items={4}>
            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <div className="news-item__container">
                <div className="news-item__image"></div>
                <p className="news-item__title">{`Thông báo lịch quay số tuần${item}`}</p>
                <p className="news-item__subtitle">
                  Một phần nội dung hiển thị của bài viết...Một phần nội dung
                  hiển thị của bài viết... Một phần nội dung hiển thị của bài
                  viết...{" "}
                </p>
              </div>
            ))} */}
            {listNews.map((item, index) => (
              <div className="news-item__container" key={item?.id}>
                <div className="news-item__image">
                  <img src={item?.urlImage} alt="news-image" />
                </div>
                <p className="news-item__title">{item?.title}</p>
                <p className="news-item__subtitle">{item?.content}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
export default News
