import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

const options = {
  autoplay: true,
  nav: false,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  loop: true,
  navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

const Partner = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="partner-area startup-partner">
      <div className="container">
        <div className="row">
          {this.state.display ? (
            <OwlCarousel
              className="partner-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="col-lg-12">
                <div className="item">
                  <Link to="/#">
                    <a>
                      <img
                        src={
                          require('@src/assets/images/partner-1.png').default
                        }
                        alt="partner"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="item">
                  <Link to="/#">
                    <a>
                      <img
                        src={
                          require('@src/assets/images/partner-2.png').default
                        }
                        alt="partner"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="item">
                  <Link to="/#">
                    <a>
                      <img
                        src={
                          require('@src/assets/images/partner-3.png').default
                        }
                        alt="partner"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="item">
                  <Link to="/#">
                    <a>
                      <img
                        src={
                          require('@src/assets/images/partner-4.png').default
                        }
                        alt="partner"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="item">
                  <Link to="/#">
                    <a>
                      <img
                        src={
                          require('@src/assets/images/partner-5.png').default
                        }
                        alt="partner"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="item">
                  <Link to="/#">
                    <a>
                      <img
                        src={
                          require('@src/assets/images/partner-6.png').default
                        }
                        alt="partner"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="item">
                  <Link to="/#">
                    <a>
                      <img
                        src={
                          require('@src/assets/images/partner-7.png').default
                        }
                        alt="partner"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Partner;
