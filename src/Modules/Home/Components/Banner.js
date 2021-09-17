import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-owl-carousel3';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

const options = {
  autoplay: true,
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
      <Carousel className="blog-slides owl-carousel owl-theme" {...options}>
        <div className="col-lg-12 col-md-12">
          <div className="bg__slider">
            <img
              src={require('@src/assets/images/home-banner1.png').default}
              alt="blog-image"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="bg__slider">
            <img
              src={require('@src/assets/images/home-banner1.png').default}
              alt="blog-image"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="bg__slider">
            <img
              src={require('@src/assets/images/home-banner1.png').default}
              alt="blog-image"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="bg__slider">
            <img
              src={require('@src/assets/images/home-banner1.png').default}
              alt="blog-image"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
