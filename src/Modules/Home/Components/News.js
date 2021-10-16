import React, { useRef } from "react";
import Carousel from "react-owl-carousel3";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container } from "reactstrap";
import AsyncImage from "../../../components/AsyncImage";
import { NEWS_LIST_LIMIT_DEFAULT } from "../../../configs/contants";
import { ArrowLeftIcon, ArrowRightIcon } from "../assets/icon";

import { actions } from "../Store/News/reducer";
import {
  getListSelector,
  getListLoadingSelector,
} from "../Store/News/selector";

const News = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const listNews = useSelector(getListSelector);
  const listNewsLoading = useSelector(getListLoadingSelector);

  const carouselRef = useRef();

  React.useEffect(() => {
    dispatch(
      actions.getList({
        limit: NEWS_LIST_LIMIT_DEFAULT,
        page: 1,
      })
    );
  }, []);
  const onItemPress = (id) => {
    history.push(`/news/${id}/home`);
  };
  const width = window.innerWidth;
  const numItems = window.innerWidth < 768 ? 3 : 4;
  return (
    <Container>
      <div className="news-area">
        <div className="news-container">
          <h1 className="news-container__title">Tin tức nổi bật</h1>
          <h1 className="news-container__subtitle">
            Theo dõi để không bỏ lỡ cơ hội nhận và đổi hàng nghìn quà tặng hấp
            dẫn
          </h1>
          <div style={{ position: "relative" }}>
            <div
              onClick={() => {
                carouselRef?.current?.prev();
              }}
              className="arrow-left"
            >
              <ArrowLeftIcon />
            </div>
            <div
              onClick={() => {
                carouselRef?.current?.next();
              }}
              className="arrow-right"
            >
              <ArrowRightIcon />
            </div>
            {listNews && listNews.listData.length && (
              <Carousel
                margin={numItems === 3 ? 20 : 0}
                ref={carouselRef}
                items={numItems}
                loop
              >
                {listNews?.listData?.map((item, index) => (
                  <div
                    className="news-item__container"
                    onClick={() => onItemPress(item?.id)}
                    key={item?.id}
                  >
                    <div className="news-item__image">
                      <AsyncImage
                        src={item?.urlImage}
                        alt="news-image"
                        placeholderClassName="news-item__image-loading"
                      />
                    </div>
                    <p className="news-item__title">{item?.title}</p>
                    <span
                      className="news-item__subtitle"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    ></span>
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default News;
