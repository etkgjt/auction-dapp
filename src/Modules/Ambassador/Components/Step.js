import React from "react"
import { Col, Row } from "reactstrap"
import { MacOSIcon, DesktopIcon, GooglePlayIcon } from "../assets/icon"
import voucher from "../assets/images/voucher.png"

const Step = () => {
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
        <div className="step1-inner">
          <div className="step1-title">Tải ứng dụng Tâm Trí Lực</div>
          <div className="step1-label">Bước 01</div>
          <div className="d-flex flex-row justify-content-between">
            <div className="step1__item-wrapper">
              <div className="step1__item-icon-wrapper">
                <MacOSIcon />
              </div>
              <p>AppStore</p>
            </div>
            <div className="step1__item-wrapper">
              <div className="step1__item-icon-wrapper">
                <GooglePlayIcon />
              </div>
              <p>Google Play</p>
            </div>
            <div className="step1__item-wrapper">
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
            <div className="step2-wrapper">
              <div className="step2-label">Bước 2</div>
              <div className="step2-title-wrapper">
                <span>
                  Đăng ký tài khoản <br />
                  và đăng nhập
                  <br />
                  thành công trên ứng dụng
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
            <div className="step3-wrapper">
              <div className="step3-label">Bước 3</div>
              <div className="step3-title-wrapper">
                <span>
                  Trải nghiệm
                  <br />
                  chương trình <br />
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
          <div className="step4-label">
            Nhận gói quà tặng Đại Sứ <br />
            và Bắt đầu hành trình trở thành
            <br />
            Đại Sứ Siêu Trí Nhớ Học Đường
          </div>
          <Row>
            <Col xl="5" lg="5" md="5">
              <span className="step4-content">
                <p>
                  Khi hoàn thành ba bước trên, bạn sẽ nhận được phần quà từ BTC
                  chính là:
                  <br />
                  - Điểm thưởng 5K vào tài khoản
                  <br />- E-Voucher có giá trị 100.000đ áp dụng khi mua các ấn
                  phẩm của Tâm Trí Lực như: Sách, Flashcard, Túi Vải, Mũ bảo
                  hiểm...
                </p>
              </span>
            </Col>
            <Col xl="7" lg="7" md="7">
              <img src={voucher} alt="voucher" className="step4-img" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
export default Step
