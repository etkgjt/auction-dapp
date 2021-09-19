import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

const BuyNow = () => {
  const { t } = useTranslation();
  useEffect(() => {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }, []);

  return (
    <Fragment>
      <section className="overview-section home_buy_now">
        <img
            className="home-line-2 wow slideInRight"
            src={
              require('../assets/images/line-2.png').default
            }
            alt="line 1"
        />
        <div className="container">
          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div style={{maxWidth: "500px", position: "relative", zIndex: 3}} className="col-lg-4 col-md-4 overview-content">
                <div className="wow slideInLeft overview-content__title">
                  <span>
                    {t("Home:buyNowVersionNew")}
                  </span>
                </div>
                <div data-wow-delay="0.5s" className="wow zoomIn overview-content__main">
                  <p>
                    {t("Home:buyNowContent")}
                  </p>
                </div>

                <Link data-wow-delay="0.5s" className="wow zoomIn btn-buy-now btn btn-blue" to="/#">
                  {t("Home:buyNowBtn")}
                </Link>
              </div>

              <div className="col-lg-8 col-md-8 overview-img buy-now-image">
                <img
                    data-wow-delay="0.2s"
                    data-wow-offset="300"
                    className="wow slideInDown"
                  src={
                    require('../assets/images/buynow-avatar.png').default
                  }
                  alt="mobile-template"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BuyNow;
