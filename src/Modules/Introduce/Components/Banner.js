import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-owl-carousel3';
import {useTranslation} from "react-i18next";

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

const options = {
  autoplay: false,
  nav: false,
  loop: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  margin: 30,
  dots: true,
  lazyLoad: true,
  items: 1,
  autoHeight: true,
};

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="wrap-frame-video">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="frame-title">
                <h1>{t("Introduce:bannerTitle")}</h1>
              </div>
              <div className={"banner-frame-video"}>
                <img
                    src={require('../assets/images/frame-video.png').default}
                    className="wow zoomIn frame-video-frame"
                    alt="frame video"
                />
                <img
                    src={require('../assets/images/star.png').default}
                    className="wow fadeInDown frame-video-star"
                    alt="frame-video"
                    data-wow-delay="0.6s"
                />
                <img
                    src={require('../assets/images/star-2.png').default}
                    className="wow fadeInDown frame-video-star-2"
                    alt="frame-video"
                    data-wow-delay="0.6s"
                />
                <div className={"frame-video-content"}>
                  <h1 className={"frame-video-title"}>Giới Thiệu Siêu Trí Nhớ Học Đường</h1>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray shape-1"></div>

      <div className="shape4 rotateme">
        <img src={require('@src/assets/images/star.svg').default} alt="img" />
      </div>
    </div>
  );
};

export default Banner;
