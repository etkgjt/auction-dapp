import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

const options = {
  autoplay: true,
  nav: true,
  loop: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  margin: 30,
  dots: false,
  navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 4,
    },
  },
};

const images = [
  require('@src/assets/images/work-img1.jpg').default,
  require('@src/assets/images/work-img2.jpg').default,
  require('@src/assets/images/work-img3.jpg').default,
  require('@src/assets/images/work-img4.jpg').default,
  require('@src/assets/images/work-img5.jpg').default,
  require('@src/assets/images/work-img6.jpg').default,
];

export const Works = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <section className="project-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Recent Work</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="row m-0">
          {display ? (
            <OwlCarousel
              className="project-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="col-lg-12">
                <div className="single-project">
                  <div className="project-image">
                    <img
                      src={require('@src/assets/images/work-img1.jpg').default}
                      alt="work"
                    />

                    <Link href="/#">
                      <a
                        className="popup-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpenImage(true);
                        }}
                      >
                        <i className="icofont-plus"></i>
                      </a>
                    </Link>
                  </div>

                  <div className="project-content">
                    <span>Digital</span>
                    <h3>
                      <Link href="/#">
                        <a>Network Marketing</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="single-project">
                  <div className="project-image">
                    <img
                      src={require('@src/assets/images/work-img2.jpg').default}
                      alt="work"
                    />

                    <Link href="/#">
                      <a
                        className="popup-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpenImage(true);
                        }}
                      >
                        <i className="icofont-plus"></i>
                      </a>
                    </Link>
                  </div>

                  <div className="project-content">
                    <span>Digital</span>
                    <h3>
                      <Link href="/#">
                        <a>Network Marketing</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="single-project">
                  <div className="project-image">
                    <img
                      src={require('@src/assets/images/work-img3.jpg').default}
                      alt="work"
                    />

                    <Link href="/#">
                      <a
                        className="popup-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpenImage(true);
                        }}
                      >
                        <i className="icofont-plus"></i>
                      </a>
                    </Link>
                  </div>

                  <div className="project-content">
                    <span>Digital</span>
                    <h3>
                      <Link href="/#">
                        <a>Network Marketing</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              {isOpenImage && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={
                    images[(photoIndex + images.length - 1) % images.length]
                  }
                  onCloseRequest={() => setIsOpenImage(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + images.length - 1) % images.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                  }
                />
              )}

              <div className="col-lg-12">
                <div className="single-project">
                  <div className="project-image">
                    <img
                      src={require('@src/assets/images/work-img4.jpg').default}
                      alt="work"
                    />

                    <Link href="/#">
                      <a
                        className="popup-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpenImage(true);
                        }}
                      >
                        <i className="icofont-plus"></i>
                      </a>
                    </Link>
                  </div>

                  <div className="project-content">
                    <span>Digital</span>
                    <h3>
                      <Link href="/#">
                        <a>Network Marketing</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="single-project">
                  <div className="project-image">
                    <img
                      src={require('@src/assets/images/work-img5.jpg').default}
                      alt="work"
                    />

                    <Link href="/#">
                      <a
                        className="popup-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpenImage(true);
                        }}
                      >
                        <i className="icofont-plus"></i>
                      </a>
                    </Link>
                  </div>

                  <div className="project-content">
                    <span>Digital</span>
                    <h3>
                      <Link href="/#">
                        <a>Network Marketing</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="single-project">
                  <div className="project-image">
                    <img
                      src={require('@src/assets/images/work-img6.jpg').default}
                      alt="work"
                    />

                    <Link href="/#">
                      <a
                        className="popup-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpenImage(true);
                        }}
                      >
                        <i className="icofont-plus"></i>
                      </a>
                    </Link>
                  </div>

                  <div className="project-content">
                    <span>Digital</span>
                    <h3>
                      <Link href="/#">
                        <a>Network Marketing</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ''
          )}
        </div>
        <canvas id="canvas"></canvas>
      </section>
    </>
  );
};

export default Works;
