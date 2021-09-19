import React, { Fragment } from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const BuyCourse = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <section className="overview-section buy-course-section">
        <img
            className="home-line-3 wow slideInRight"
            src={
              require('../assets/images/line-3.png').default
            }
            alt="line 1"
        />
        <div style={{backgroundColor: "#E5E5E5", width: "100%", height: "100px", position: "absolute", zIndex: 0, top: "0px"}}></div>
        <div className="head-buycourse">
          <img
              className="bg-head-buycourse"
              src={require('../assets/images/buy-course.png').default}
              alt="creative"
          />
          <div className="box-wrap-elephants">
            <div className="wrap-elephants">
              <div className="wrap-elephants-img">
                <img
                    data-wow-delay="0.2s"
                    className="wow slideInLeft elephants-img"
                    src={require('../assets/images/elephants.png').default}
                    alt="elephants-down"
                />
                <div className="wrap-book">
                  <img
                      data-wow-offset="200"
                      data-wow-delay="0.4s"
                      className="wow zoomInDown wrap-book-img"
                      src={require('../assets/images/book.png').default}
                      alt="elephants-down"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="box-buy-course-content">
            <div className="wrap-buy-course-content">
              <div className="buy-course-content-title">
                <div className="buy-course-content-title-wrap">
                  <span data-wow-offset="300" data-wow-delay="0.2s" className="wow zoomIn ">
                    {t("Home:buyCourse")}
                  </span>
                  <div data-wow-delay="0.4s" className="wow zoomIn buy-course-content-title-arrow">
                    <svg width="42"
                         height="59"
                         viewBox="0 0 42 59"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.6936 45.039C51.7992 29.3544 41.3958 8.55069 32.6809 0.109375C44.446 23.6361 29.4128 35.5084 20.4255 38.5037V27.0671L0 49.1235L24.5107 58.1094L23.6936 45.039Z" fill="white"/>
                    </svg>
                  </div>
                  <Link data-wow-offset="200" data-wow-delay="0.7s" className="wow zoomIn btn-buy-now btn btn-blue btn-buy-course" to="/#">
                    {t("Home:btnLearnMore")}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="box-wrap-elephants-ball">
            <div className="wrap-elephants-ball">
              <div data-wow-offset="300" data-wow-delay="0.2s" className="wow slideInRight wrap-elephants-ball-img">
                <img
                    className="wrap-ball-img-elephants"
                    src={require('../assets/images/elephants-2.png').default}
                    alt="elephants-down"
                />
                <div className="wrap-ball">
                  <img
                      className="wrap-ball-img"
                      src={require('../assets/images/ball.png').default}
                      alt="ball"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="box-wrap-logo-img">
            <div className="wrap-logo-img">
              <div className="workingBorderRun">

              </div>
              <img
                  data-wow-offset="100"
                  className="wow slideInDown"
                  src={require('../assets/images/logo.png').default}
                  alt="ball"
              />
            </div>

          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BuyCourse;
