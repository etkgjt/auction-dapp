import React from "react"
import { Row, Col } from "reactstrap"
import {
  RulesTopBannerTitle,
  CalendarIcon,
  FacebookIcon,
  YoutubeIcon,
  DetailButton
} from "../assets/icon"

import coinIcon from "../assets/images/coin-icon.png"
import bangtinhdiem from "../assets/images/table1.png"
import bangtuan from "../assets/images/bangtuan.png"
import bangthang from "../assets/images/bangthang.png"
import bangnam from "../assets/images/bangquy.png"

const Rules = () => {
  return (
    <div className="rules-area">
      <Row>
        <Col xl="7" lg="7" md="7">
          <div className="rules-detail-container">
            <div className="rules-detail__title-container">
              <RulesTopBannerTitle />
            </div>
            <ol className="rules-details_list">
              <li>
                Mục đích ý nghĩa:
                <ul>
                  <li>
                    Thu hút học sinh tham gia vào hoạt động học tập thực tế
                    <br />
                    và hữu ích khi học Siêu Trí Nhớ Học Đường
                  </li>
                  <li>
                    Lan tỏa giá trị của Siêu Trí Nhớ Học Đường đến với cộng đồng
                  </li>
                </ul>
              </li>
              <li>
                Nội dung chương trình:
                <ul>
                  <li>
                    Chương trình dành cho tất cả các học sinh trên cả nước
                  </li>
                  <li>
                    Với các bạn học sinh đã có tài khoản tại Siêu Trí Nhớ Học
                    Đường: mỗi bạn sẽ có một link Affiliate riêng. Các bạn có
                    thể dùng link này để mời bạn bè cùng tham gia và đăng kí tài
                    khoản tại Siêu Trí Nhớ Học Đường bằng các hình thức khác
                    nhau. Với một lượt mời thành công (tạo tài khoản tại Siêu
                    Trí Nhớ Học Đường), bạn sẽ nhận được 1 điểm thưởng tương
                    ứng.
                  </li>
                  <li>
                    Với các bạn chưa có tài khoản tại Siêu Trí Nhớ Học Đường: có
                    thể tự đăng ký tạo tài khoản và dùng link Affilate riêng.
                    Các bạn có thể dùng link này để mời bạn bè cùng tham gia và
                    đăng kí tài khoản tại Siêu Trí Nhớ Học Đường bằng các hình
                    thức khác nhau. Với một lượt mời thành công (tạo tài khoản
                    tại Siêu Trí Nhớ Học Đường), bạn sẽ nhận được 1 điểm thưởng
                    tương ứng.
                  </li>
                </ul>
                <span className="note">
                  Lưu ý: Các bạn được mời phải tạo một tài khoản mới, chưa từng
                  đăng kí trên Siêu Trí Nhớ Học Đường
                </span>
              </li>
              <li>
                Thời gian tổ chức:
                <div>
                  Thời gian chương trình: Kể từ ngày 16/09/2021 đến ngày
                  14/10/2021
                </div>
              </li>
              <li>
                Đối tượng tham gia Chương trình:
                <div>
                  Tất cả các bạn học sinh trên cả nước từ lớp 1 đến lớp 12
                </div>
              </li>
              <li>
                Cách thức tham gia chương trình:
                <div>Bước 1: Đăng nhập tài khoản vào trang stnhd.com </div>
                <div>Bước 2: Copy Link Affiliate</div>
                <div>
                  Bước 3: Gửi tin nhắn mời bạn bè cùng tham gia (có thể bằng
                  nhiều hình thức khác nhau)
                </div>
                <div className="rules-details-button-wrapper">
                  <DetailButton />
                  <span>Xem video hướng dẫn chi tiết</span>
                </div>
              </li>
              <li>
                Cách thức tính điểm:
                <div>
                  Với 1 lượt học viên được mời vào stnhd.com và đăng ký tài
                  khoản thành công các bạn sẽ nhận được 1K. Ngoài ra, bạn còn
                  nhận được điểm thưởng từ một số hoạt động khác
                </div>
                <img src={bangtinhdiem} width="100%" height="auto" />
              </li>
              <li>
                Giải thưởng:
                <div>Bạn sẽ nhận được 2 dạng giải thưởng cùng lúc:</div>
                <div>Các giải thưởng khi tích lũy:</div>
                <Row className="d-flex flex-row justify-content-around my-4">
                  <Col xl="3" lg="3">
                    <div className="d-flex flex-column align-items-center">
                      <p className="rank-table-title">BXH Tuần</p>
                      <img src={bangtuan} width="100%" height="auto" />
                    </div>
                  </Col>
                  <Col xl="3" lg="3">
                    <div className="d-flex flex-column align-items-center">
                      <p className="rank-table-title">BXH Tháng</p>
                      <img src={bangthang} width="100%" height="auto" />
                    </div>
                  </Col>
                  <Col xl="3" lg="3">
                    <div className="d-flex flex-column align-items-center">
                      <p className="rank-table-title">BXH Năm</p>
                      <img src={bangnam} width="100%" height="auto" />
                    </div>
                  </Col>
                </Row>
                <div>
                  Khi hoàn thành 5 lượt mời thành công tính đến 12h trưa thứ 5
                  hàng tuần, bạn sẽ có cơ hội nhận một lượt quay số trúng thưởng
                  vào mỗi thứ 5 trong tuần. Một lượt quay bạn nhận được chỉ được
                  áp dụng cho một lần quay số duy nhất trong tuần.
                </div>
                <span className="note">
                  Lưu ý: Mỗi tuần có 5 lượt trúng giải, trị giá 5.000.000
                  VNĐ/giải
                </span>
              </li>
            </ol>
          </div>
        </Col>
        <Col xl="5" lg="5" md="5">
          <div className="event-calendar-container">
            <h1 className="calendar-title">Lịch Sự Kiên</h1>
            <p className="calendar-text-black">
              Tất cả điểm của các bạn
              <br /> được tính đến
            </p>
            <div className="calendar-icon__container">
              <CalendarIcon />
              <img src={coinIcon} alt="img" className="calender-coin-icon" />
            </div>

            <p className="notic">Lưu ý:</p>

            <span className="notic-text-black">
              1. Khi hoàn thành
              <span className="notic-text-white">&nbsp;5 lượt mời&nbsp;</span>
              thành công tính đến 23h59
              <span className="notic-text-white">&nbsp;ngày 23 hàng tháng</span>
              , bạn sẽ có cơ hội nhận một lượt quay số trúng thưởng vào
              <span className="notic-text-white">
                &nbsp;21h tối thứ 5 cuối cùng trong tháng
              </span>
            </span>

            <span className="notic-text-black">
              2. Một lượt quay bạn nhận được chỉ được áp dụng cho
              <span className="notic-text-white mt-2">
                một lần quay số duy nhất trong tháng
              </span>
            </span>
            <span className="notic-text-black my-2">
              3. Các kênh soical bạn có thể theo dõi lượt quay:
            </span>
            <span className="social-link">
              <FacebookIcon size={32} />
              <p>Fanpage Tâm Trí Lực</p>
            </span>
            <span className="social-link">
              <FacebookIcon size={32} />
              <p>Facebook Nguyễn Tùng Phong</p>
            </span>
            <span className="social-link">
              <YoutubeIcon size={32} />
              <p>Youtube Nguyễn Phùng Phong</p>
            </span>
            <span className="social-link">
              <YoutubeIcon size={32} />
              <p>Youtube Siêu Trí Nhớ Học Đường</p>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Rules
