import React from 'react';
import { Link } from 'react-router-dom';
import { LocationIcon, PhoneIcon, MailIcon, WebsiteIcon } from './icon';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="ptb-100 pb-0 bg-image">
        <div className="container">
          <div className="d-flex logo__content">
            <div>
              <Link to="/">
                <a className="logo">
                  <img
                    src={require('@src/assets/images/logo-white.png').default}
                    alt="logo2"
                  />
                </a>
              </Link>
            </div>
            <div style={{ marginLeft: 24 }}>
              <a className="logo">
                <img
                  src={require('@src/assets/images/logo-ttl.png').default}
                  alt="logo2"
                />
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="about__content">
                  <div className="about__title">
                    <span>CÔNG TY CP ĐÀO TẠO TÂM TRÍ LỰC</span>
                  </div>
                  <div className="about__main">
                    <ul>
                      <li>
                        <div className="about__main-item">
                          <div className="about__main-item-icon">
                            <LocationIcon />
                          </div>
                          <div className="about__main-item-content">
                            <span>
                              778/11 Nguyễn Kiệm, Phường 4, Quận Phú Nhuận, Tp
                              HCM
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about__main-item">
                          <div className="about__main-item-icon">
                            <PhoneIcon />
                          </div>
                          <div className="about__main-item-content">
                            <span>0939 279 868</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about__main-item">
                          <div className="about__main-item-icon">
                            <MailIcon />
                          </div>
                          <div className="about__main-item-content">
                            <span>cskh@tamtriuc.com</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about__main-item">
                          <div className="about__main-item-icon">
                            <WebsiteIcon />
                          </div>
                          <div className="about__main-item-content">
                            <span>siutrituehocduong.com</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <ul className="social-list">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="instagram.com" target="_blank">
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <div className="menu__title">Về chúng tôi</div>

                <ul className="list">
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/introduce">Giới thiệu</Link>
                  </li>
                  <li>
                    <Link to="/teachers">Đội ngũ giảng viên</Link>
                  </li>
                  <li>
                    <Link to="/partnes">
                      <a>Đối tác</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/news">Tin tức</Link>
                  </li>
                  <li>
                    <Link to="/contact">Liên hệ</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="menu__title">Chính sách</div>

                <ul className="list">
                  <li>
                    <Link to="#">
                      <a>Integrations</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <a>API</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing-one">
                      <a>Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <a>Documentation</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup">
                      <a>Sign Up</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <a>Release Notes</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="menu__title">Thời gian làm việc</div>

                <ul className="list">
                  <li>
                    <Link to="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <a>Press</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>Copyright &copy; 2021 Mojosa. All rights reserved</p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link to="/#">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link to="/#">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
