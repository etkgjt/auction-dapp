import React from "react"
import { Row } from "reactstrap"
import { ButtonBlue, ButtonOrange } from "../assets/icons"
const BlogDetail = () => {
  return (
    <div className="news-detail-area">
      <div className="news-detail-wrapper">
        <div className="news-detail-header">
          <div className="news-detail-image-wrapper"></div>
          <div className="news-detail-info-wrapper">
            <span className="news-detail-date">11:30 | 09/09/2021</span>
            <h1 className="news-detail-title">
              THÔNG BÁO LỊCH QUAY SỐ TUẦN 02
            </h1>
            <span className="news-detail-poster">Đăng bởi Admin</span>
          </div>
        </div>
        <div className="news-detail-content">
          <span>
            Đến hẹn lại lên thôi các bạn ơi! Đừng quên rằng chúng ta sẽ có hẹn
            với nhau tại VÒNG QUAY MAY MẮN cùng cơ hội sở hữu những phần thưởng
            trị giá đến 5.000.000 VNĐ. BTC xin gửi thông tin Chương trình quay
            số “VÒNG QUAY MAY MẮN” đến với các bạn như sau:
            <br /> - Thời gian: 19h Thứ 5 hằng tuần
            <br /> - Hình thức: Livestream rên các Fanpage và Youtube Siêu Trí
            Nhớ Học Đường, Tâm Trí Lực, Nguyễn Phùng Phong
            <br />
            Trong tuần này, bạn đã kêu gọi được bao nhiêu người bạn tham gia
            cuộc thi “Đại sứ Thương hiệu của Siêu Trí Nhớ Học Đường rồi? Hãy nổ
            lực thật nhiều để kêu gọi 5 người bạn mới cùng tham gia cuộc thi.
            Sau khi hoàn thành nhiệm vụ trên, bạn sẽ được nhận ngay chiếc vé
            tham gia Chương trình “VÒNG QUAY MAY MẮN” là một con số may mắn đến
            từ BTC! NHANH TAY CHIA SẺ - NHẬN NGAY QUÀ HAY
          </span>
        </div>
        <div className="news-detail-footer">
          <div className="news-detail-button-wrapper">
            <ButtonOrange />
            <span className="news-detail-button__text">Quay về</span>
          </div>
          <div className="news-detail-button-wrapper">
            <ButtonBlue />
            <span className="news-detail-button__text">Chia sẻ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
