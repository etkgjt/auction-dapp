import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const BuyNow = () => {
  return (
    <Fragment>
      <section className="overview-section">
        <div className="container">
          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-content">
                <div className="overview-content__title">
                  <span>Phiên bản mới giúp học tập hiệu quả</span>
                </div>
                <div className="overview-content__main">
                  <p>
                    Với 2 phiên bản desktop và mobile giúp bạn thoải mái. học
                    mọi lúc mọi nơi, tiết kiệm thời gian tuyệt đối
                  </p>
                </div>

                <Link to="/#">
                  <a className="btn btn-blue">Mua ngay</a>
                </Link>
              </div>

              <div className="col-lg-6 col-md-6 overview-img">
                <img
                  src={
                    require('@src/assets/images/mobile-template1.png').default
                  }
                  alt="mobile-template"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="shape7">
          <img
            src={require('@src/assets/images/shape7.png').default}
            alt="shape"
          />
        </div>
        <div className="shape3">
          <img
            src={require('@src/assets/images/shape3.png').default}
            alt="img"
          />
        </div>
        <div className="bg-gray shape-1"></div>
        <div className="shape6">
          <img
            src={require('@src/assets/images/shape6.png').default}
            alt="img"
          />
        </div>
        <div className="shape8 rotateme">
          <img
            src={require('@src/assets/images/shape8.svg').default}
            alt="shape"
          />
        </div>
        <div className="shape9">
          <img
            src={require('@src/assets/images/shape9.svg').default}
            alt="shape"
          />
        </div>
        <div className="shape10">
          <img
            src={require('@src/assets/images/shape10.svg').default}
            alt="shape"
          />
        </div>
        <div className="shape11 rotateme">
          <img
            src={require('@src/assets/images/shape11.svg').default}
            alt="shape"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default BuyNow;
