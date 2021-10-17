import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { RETCODE_SUCCESS } from "../../../configs/contants";
import {
  MacOSIcon,
  DesktopIcon,
  GooglePlayIcon,
  MacIcon,
} from "../assets/icon";
import voucher from "../assets/images/voucher.png";
import { getDownloadAppLink } from "../Store/service";
import SlideInModal from "../../../components/SlideInModal";
import PopupDownload from "./PopupDownload";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const Step = () => {
  const [state, setState] = useState();
  const fetchDownLoadingLink = async () => {
    try {
      const res = await getDownloadAppLink();
      setState(res.data);
    } catch (err) {}
  };

  React.useEffect(() => {
    fetchDownLoadingLink();
  }, []);

  const googlePlayClick = () => {
    window.open(state?.link_TaiAndroid, "_blank");
  };

  const macOSClick = () => {
    window.open(state?.link_TaiMacos, "_blank");
  };

  const appStoreClick = () => {
    window.open(state?.link_TaiIOS, "_blank");
  };

  const windowClick = () => {
    SlideInModal.show(
      () => {},
      <PopupDownload data={state} />,
      "download-popup-modal-wrapper"
    );
  };

  React.useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }, []);
  return (
    <div className="step-area">
      <h1 className="step-area__title">TRỞ THÀNH ĐẠI SỨ</h1>
      <div className="step-area__subtitle-wrapper">
        <p className="step-area__subtitle">
          Để trở thành Đại Sứ Siêu Trí Nhớ Học Đường, bạn phải tìm hiểu thật
          nhiều về Siêu Trí Nhớ Học Đường. Để biết đến Siêu Trí Nhớ Học Đường
          nhiều hơn và trải nghiệm những điều thú vị tại đây, bạn chỉ cần thực
          hiện ba bước đơn giản sau đây:
        </p>
      </div>
      <div className="step1-container">
        <div className="step1-inner wow animate__zoomInDown">
          <div className="step1-title">Tải ứng dụng Tâm Trí Lực</div>
          <div className="step1-label">01</div>
          <div className="d-flex flex-row justify-content-between">
            <div
              onClick={appStoreClick}
              className="step1__item-wrapper wow animate__bounceInUp"
              data-wow-delay="0.4s"
            >
              <div className="step1__item-icon-wrapper">
                <MacOSIcon />
              </div>
              <p>AppStore</p>
            </div>
            <div
              onClick={googlePlayClick}
              className="step1__item-wrapper wow animate__bounceInUp"
              data-wow-delay="0.8s"
            >
              <div className="step1__item-icon-wrapper">
                <GooglePlayIcon />
              </div>
              <p>Google Play</p>
            </div>
            <div
              onClick={macOSClick}
              className="step1__item-wrapper wow animate__bounceInUp"
              data-wow-delay="1.2s"
            >
              <div className="step1__item-icon-wrapper">
                <MacIcon />
              </div>
              <p>Mac OS</p>
            </div>
            <div
              onClick={windowClick}
              className="step1__item-wrapper wow animate__bounceInUp"
              data-wow-delay="1.6s"
            >
              <div className="step1__item-icon-wrapper">
                <DesktopIcon />
              </div>
              <p>Desktop</p>
            </div>
          </div>
        </div>
      </div>
      <div className="step2-container">
        <Row>
          <Col cl="6" lg="6" md="6">
            <div className="step2-wrapper wow fadeInLeft">
              <div className="step2-label">02</div>
              <div className="step2-title-wrapper">
                <span>
                  Đăng ký
                  <br />
                  tài khoản
                </span>
              </div>
              <div className="step2-content-wrapper">
                Sau khi tải Ứng dụng Tâm Trí Lực từ trên các cửa hàng ứng dụng,
                bạn hãy đăng ký tài khoản bằng cách điền đầy đủ vào các thông
                tin được yêu cầu.
              </div>
            </div>
          </Col>
          <Col cl="6" lg="6" md="6">
            <div
              className="step3-wrapper wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <div className="step3-label">03</div>
              <div className="step3-title-wrapper">
                <span>
                  Trải nghiệm
                  <br />
                  Siêu Trí Nhớ Học Đường
                </span>
              </div>
              <div className="step3-content-wrapper">
                Khi bạn đã đăng ký thành công, hãy click vào Chương trình Siêu
                Trí Nhớ Học Đường xuất hiện trên màn hình chính của ứng dụng. Để
                bạn có thể tìm hiểu và có những trải nghiệm tốt nhất, Chương
                trình Siêu Trí Nhớ Học Đường gửi tặng bạn những video kỹ thuật
                ghi nhớ thú vị và bổ ích.
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="step4-container">
        <div className="step4-inner">
          <div
            className="step4-label wow animate__lightSpeedInLeft"
            data-wow-delay="0.3s"
          >
            Nhận gói quà tặng Đại Sứ <br />
            và Bắt đầu hành trình trở thành
            <br />
            Đại Sứ Siêu Trí Nhớ Học Đường
          </div>
          <div className="step4-image-wrapper ">
            <span
              className="step4-content wow animate__lightSpeedInLeft"
              data-wow-delay="0.8s"
            >
              <p>
                Khi hoàn thành ba bước trên, bạn sẽ nhận được phần quà từ BTC
                chính là:
                <ul>
                  <li>Điểm thưởng 5K vào tài khoản</li>
                  <li>
                    E-Voucher có giá trị 100.000đ áp dụng khi mua các ấn phẩm
                    của Tâm Trí Lực như: Sách, Flashcard, Túi Vải, Mũ bảo
                    hiểm...
                  </li>
                </ul>
              </p>
            </span>
            <div className="step4-image-mock"></div>
            <img
              src={voucher}
              alt="voucher"
              className="step4-img wow animate__lightSpeedInRight"
              data-wow-delay="1.3s"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step;
