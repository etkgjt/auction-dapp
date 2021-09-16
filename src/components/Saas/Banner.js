import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

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
    <>
      <div className="main-banner saas-home">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="saas-image">
                    <img
                      src={
                        require('@src/assets/images/saas-shape/arrow.png')
                          .default
                      }
                      className="wow fadeInDown"
                      alt="arrow"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/box1.png')
                          .default
                      }
                      className="wow fadeInUp"
                      data-wow-delay="0.6s"
                      alt="box1"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/boy1.png')
                          .default
                      }
                      className="wow fadeInLeft"
                      data-wow-delay="0.6s"
                      alt="boy1"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/boy2.png')
                          .default
                      }
                      className="wow zoomIn"
                      data-wow-delay="0.6s"
                      alt="boy2"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/boy3.png')
                          .default
                      }
                      className="wow bounceIn"
                      data-wow-delay="0.6s"
                      alt="boy3"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/digital-screen.png')
                          .default
                      }
                      className="wow fadeInDown"
                      data-wow-delay="0.6s"
                      alt="digital-screen"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/filter1.png')
                          .default
                      }
                      className="wow zoomIn"
                      data-wow-delay="0.6s"
                      alt="filter1"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/filter2.png')
                          .default
                      }
                      className="wow fadeInUp"
                      data-wow-delay="0.6s"
                      alt="filter2"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/filter3.png')
                          .default
                      }
                      className="wow rotateIn"
                      data-wow-delay="0.6s"
                      alt="filter3"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/girl1.png')
                          .default
                      }
                      className="wow fadeInUp"
                      data-wow-delay="0.6s"
                      alt="girl1"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/girl2.png')
                          .default
                      }
                      className="wow zoomIn"
                      data-wow-delay="0.6s"
                      alt="girl2"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/monitor.png')
                          .default
                      }
                      className="wow zoomIn"
                      data-wow-delay="0.6s"
                      alt="monitor"
                    />
                    <img
                      src={
                        require('@src/assets/images/saas-shape/main-image.png')
                          .default
                      }
                      className="wow zoomIn"
                      data-wow-delay="0.6s"
                      alt="main-image.png"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="hero-content pl-4">
                    <h1>Manage your business strategy in one placeholder</h1>
                    <p>
                      Our passion to work hard and deliver excellent results. It
                      could solve the needs of your customers and develop
                      innovation.
                    </p>
                    <Link to="/contact">
                      <a className="btn btn-primary">Get Started</a>
                    </Link>
                    <Link to="#video">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="video-btn popup-youtube"
                      >
                        Watch Video
                        <i className="icofont-play-alt-3"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray shape-1"></div>
        <div className="shape1">
          <img
            src={require('@src/assets/images/shape1.png').default}
            alt="img"
          />
        </div>
        <div className="shape2">
          <img
            src={require('@src/assets/images/shape2.png').default}
            alt="img"
          />
        </div>
        <div className="shape3">
          <img
            src={require('@src/assets/images/shape3.png').default}
            alt="img"
          />
        </div>
        <div className="shape4 rotateme">
          <img
            src={require('@src/assets/images/shape4.png').default}
            alt="img"
          />
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="szuchBiLrEM"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Banner;
