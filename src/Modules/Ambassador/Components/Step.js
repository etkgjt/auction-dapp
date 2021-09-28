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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="step4-container">
        <div className="step4-inner">
          <div className="step4-title">
            Nhận gói quà tặng Đại Sứ và
            <br />
            bắt đầu cuộc đua săn tìm VoiCoin
          </div>
          <div className="step4-label">Bước 04</div>
          <Row>
            <Col xl="7" lg="7" md="7">
              <img src={voucher} alt="voucher" className="step4-img" />
            </Col>
            <Col xl="5" lg="5" md="5">
              <span className="step4-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in.
                </p>
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
export default Step
