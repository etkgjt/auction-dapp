import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const BuyCourse = () => {
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
                    className="elephants-img"
                    src={require('../assets/images/elephants.png').default}
                    alt="elephants-down"
                />
                <div className="wrap-book">
                  <img
                      className="wrap-book-img"
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
                <span>Mua khóa học</span>
              </div>
            </div>

          </div>

          <div className="box-wrap-elephants-ball">
            <div className="wrap-elephants-ball">
              <div className="wrap-elephants-ball-img">
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
        </div>
      </section>
    </Fragment>
  );
};

export default BuyCourse;
