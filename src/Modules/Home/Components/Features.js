import React, {useEffect} from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

const Features = () => {
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
    <section className="features-area saas-features download-area">
      <img
          className="home-line-1 wow slideInLeft"
          src={
            require('../assets/images/line-1.png').default
          }
          alt="line 1"
      />
      <div style={{marginTop: "0px"}} className="features-inner-area">
        <div className="container-fluid">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12 wrapFeaturesImage">
              <img
                  data-wow-offset="150"
                  data-wow-delay="0.5s"
                  className="wow fadeInLeft features-mobile-1"
                  src={
                    require('../assets/images/features-mobile-1.png').default
                  }
                  alt="image feature"
              />
              <img
                  data-wow-delay="0.2s"
                  className="wow fadeInRight features-mobile-2"
                  src={
                    require('../assets/images/features-mobile-2.png').default
                  }
                  alt="image feature"
              />
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="features-inner-content">
                <div data-wow-offset="150" data-wow-delay="0.5s" className="wow zoomIn features-title">
                  <span>
                    {t("Home:featuresTitle")}
                  </span>
                </div>
                <div data-wow-offset="50" data-wow-delay="0.7s" className="wow zoomIn features-content">
                  <p>
                    {t("Home:featuresContent")}
                  </p>
                </div>
                <div data-wow-delay="0.7s" className="wow zoomIn features-download">
                  <div className="features-download__title">
                    <span>
                      {t("Home:featuresDownload")}
                    </span>
                  </div>
                  <div style={{position: "relative", zIndex: 3}} className="d-flex justify-content-between align-items-center">
                    <a href={"#"}>
                      <div className="frame__download">
                        <img
                            src={
                              require('@src/assets/images/appstore-download.png')
                                  .default
                            }
                            alt="Appsotre"
                        />
                      </div>
                    </a>
                    <a href={"#"}>
                      <div className="frame__download">
                        <img
                            src={
                              require('@src/assets/images/chplay-download.png')
                                  .default
                            }
                            alt="CHPlay"
                        />
                      </div>

                    </a>
                    <a href={"#"}>
                      <div className="frame__download">

                        <img
                            src={
                              require('@src/assets/images/desktop-download.png')
                                  .default
                            }
                            alt="Desktop"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
