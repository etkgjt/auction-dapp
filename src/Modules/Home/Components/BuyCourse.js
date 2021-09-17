import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const BuyCourse = () => {
  return (
    <Fragment>
      <section className="overview-section buy-course-section">
        <div class="creative-shape-relative">
          <div className="container buyourse__content">
            <div className="buycourse-box">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="buycourse-content">
                  <div className="buycourse-title">
                    <span>Mua khóa học</span>
                  </div>
                  <div className="buycourse-arrow">
                    <img
                      src={require('@src/assets/images/arrow-buy.svg').default}
                      alt="buy-course"
                    />
                  </div>
                  <div className="buycourse-action">
                    <Link to="/#">
                      <a className="btn btn-blue">Mua ngay</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={require('@src/assets/images/bg-creative.png').default}
            alt="creative"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default BuyCourse;
