import React from 'react';
import { Link } from 'react-router-dom';
import {
  LocationIcon,
  PhoneIcon,
  MailIcon,
  WebsiteIcon,
  YoutubeIcon,
  FacebookIcon,
} from './icon';

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
                    <Link to="/support">Hỗ trợ</Link>
                  </li>
                  <li>
                    <Link to="/help/buy-guide">Hướng dẫn mua hàng</Link>
                  </li>
                  <li>
                    <Link to="/help/payment-term">Điều khoản mua hàng</Link>
                  </li>
                  <li>
                    <Link to="/help/private-policy">Chính sách bảo mật</Link>
                  </li>
                  <li>
                    <Link to="/help/complain-policy">Chính sách khiếu nại</Link>
                  </li>
                  <li>
                    <Link to="/help/return-policy">Chính sách đổi trả</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="menu__title">Thời gian làm việc</div>

                <ul className="list">
                  <li>
                    <div className="work__time">
                      <div className="work__time-day">Thứ 2 - Thứ 6</div>
                      <div className="work__time-hour">: 8h00 - 19h00</div>
                    </div>
                  </li>
                  <li>
                    <div className="work__time">
                      <div className="work__time-day">Thứ 7</div>
                      <div className="work__time-hour">: 8h00 - 17h00</div>
                    </div>
                  </li>
                  <li>
                    <div className="work__time">
                      <div className="work__time-day">Chủ nhật</div>
                      <div className="work__time-hour">: 8h00 - 15h00</div>
                    </div>
                  </li>
                  <li>
                    <Link to="#">
                      <img
                        src={require('@src/assets/images/BCT.png').default}
                        alt="Bo-cong-thuong"
                      />
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
            <div className="col-lg-8 col-md-8">
              <div className="copy__right-text">&copy; 2020 Tâm Trí Lực</div>
              <div className="copy__right-text">
                Giấy chứng nhận Đăng ký Kinh Doanh 0314866590 do Sở Kế hoạch và
                đầu tư Thành Phố Hồ Chí Minh cấp ngày 12/02/2015
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <li>
                  <Link to="/#">
                    <div>SOCIAL MEDIA</div>
                  </Link>
                </li>
                <li>
                  <Link to="/#">
                    <YoutubeIcon />
                  </Link>
                </li>
                <li>
                  <Link to="/#">
                    <FacebookIcon />
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
