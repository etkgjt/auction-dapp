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
    <div className="main-banner saas-home">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container top__padding">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="d-title">
                <span>{t("Introduce:bannerTitle")}</span>
                <div style={{marginBottom: "10px"}} className="section-title">
                  <div className="bar"></div>
                </div>
              </div>
              <div className={"banner-frame-video"}>
                <img
                    src={require('../assets/images/frame-video.png').default}
                    className="wow zoomIn"
                    alt="frame-video"
                />
                <img
                    src={require('../assets/images/star.png').default}
                    className="wow fadeInDown frame-video-star"
                    alt="frame-video"
                    data-wow-delay="0.3s"
                />
                <img
                    src={require('../assets/images/star-2.png').default}
                    className="wow fadeInDown frame-video-star-2"
                    alt="frame-video"
                    data-wow-delay="0.3s"
                />

                <img
                    src={require('../assets/images/avatar.png').default}
                    className="wow zoomIn frame-video-avatar"
                    alt="frame-video"
                    data-wow-delay="0.8s"
                />
                <img
                    src={require('../assets/images/title-1.png').default}
                    className="wow zoomInRight frame-video-title-1"
                    alt="frame-video"
                    data-wow-delay="0.8s"
                />
                <img
                    src={require('../assets/images/title-2.png').default}
                    className="wow zoomInLeft frame-video-title-2"
                    alt="frame-video"
                    data-wow-delay="0.8s"
                />
                <img
                    src={require('../assets/images/title-3.png').default}
                    className="wow zoomIn frame-video-title-3"
                    alt="frame-video"
                    data-wow-delay="0.8s"
                />
                <h2 data-wow-delay="0.5s" className="wow zoomIn frame-video-title-main">
                  Giới thiệu Siêu trí nhớ học đường
                </h2>
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
