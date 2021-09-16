import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-owl-carousel3';

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
                <span>Giới thiệu siêu trí nhớ học đường</span>
              </div>
              <div className="d-carousel">
                <Carousel
                  className="blog-slides owl-carousel owl-theme"
                  {...options}
                >
                  <div className="col-lg-12 col-md-12">
                    <div className="container bg__slider">
                      <img
                        src={
                          require('@src/assets/images/slider-img1.png').default
                        }
                        alt="blog-image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="bg__slider">
                      <img
                        src={
                          require('@src/assets/images/slider-img1.png').default
                        }
                        alt="blog-image"
                      />
                    </div>
                  </div>{' '}
                  <div className="col-lg-12 col-md-12">
                    <div className="bg__slider">
                      <img
                        src={
                          require('@src/assets/images/slider-img1.png').default
                        }
                        alt="blog-image"
                      />
                    </div>
                  </div>{' '}
                  <div className="col-lg-12 col-md-12">
                    <div className="bg__slider">
                      <img
                        src={
                          require('@src/assets/images/slider-img1.png').default
                        }
                        alt="blog-image"
                      />
                    </div>
                  </div>{' '}
                </Carousel>
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
