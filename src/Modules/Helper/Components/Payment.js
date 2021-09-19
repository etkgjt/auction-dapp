import React from 'react';
import BreadCrumbs from '@components/Breadcrumbs';

const PaymentDetail = () => {
  return (
    <section className="helper-area helper-section helper-detail-area ptb-100">
      <div className="container helper-detail">
        <div className="helper-box">
          <div className="helper-title">
            <div className="left-devider"></div>
            <div className="hepler-title-text">
              <span>
                Phương thức 1: Thanh toán bằng cách nhập mã thẻ cào của Tâm Trí
                Lực.
              </span>
            </div>
          </div>
          <div className="helper-title">
            <div className="left-devider"></div>
            <div className="hepler-title-text">
              <span>
                Phương thức 2 : Thanh toán trực tuyến trên website
                www.sieutrinhohocduong.com
              </span>
            </div>
          </div>
          <div className="helper-content">
            <p className="bold">Thanh toán trực tuyến bằng thẻ nội địa</p>
            <p>
              Để sử dụng phương thức thanh toán này, tài khoản ngân hàng của quý
              khách cần đăng ký dịch vụ Internet Banking với ngân hàng.{' '}
            </p>
            <p>
              Khi tiến hành thanh toán, hệ thống sẽ dẫn về trang thanh toán của
              Đối tác Napas. Tại đây, quý khách hãy chọn và điền đầy đủ thông
              tin theo yêu cầu để thực hiện thanh toán. Nếu thẻ hợp lệ, quý
              khách sẽ thanh toán thành công.
            </p>
            <p className="bold">
              Thanh toán trực tuyến bằng thẻ Visa/Mastercard{' '}
            </p>
            <p>
              Phí thanh toán tùy thuộc vào từng loại thẻ quý khách dùng và ngân
              hàng phát hành thẻ. Vui lòng liên hệ với ngân hàng phát hành thẻ
              để biết rõ phí thanh toán phát sinh.
            </p>
            <p>
              Khi tiến hành thanh toán, hệ thống sẽ dẫn về trang thanh toán của
              Đối tác Cyber Source. Tại đây quý khách hãy chọn và điền đầy đủ
              thông tin theo yêu cầu để thực hiện thanh toán. Nếu thẻ hợp lệ,
              quý khách sẽ thanh toán thành công.
            </p>
          </div>
          <div className="helper-title">
            <div className="left-devider"></div>
            <div className="hepler-title-text">
              <span>
                Phương thức 3: Chuyển khoản ngân hàngtrực tuyến trên website
              </span>
            </div>
          </div>
          <div className="helper-content">
            <p className="bold">
              Bạn có thể đến bất kỳ ngân hàng nào ở Việt Nam (hoặc sử dụng
              Internet Banking) để chuyển tiền theo thông tin bên dưới:
            </p>
            <ul className="paragraph">
              <li>
                <span className="bold">
                  Ngân hàng TMCP Sài Gòn Thương tín ( Sacombank) – Trung tâm hội
                  sở
                </span>
              </li>
              <li>
                <span className="bold">Số tài khoản:</span>&nbsp;
                <span>060159439812</span>
              </li>
              <li>
                <span className="bold">Chủ tài khoản:</span>&nbsp;
                <span>Công ty CP Đào tạo Tâm Trí Lực</span>
              </li>
            </ul>
            <ul className="paragraph">
              <li>
                <span className="bold">
                  Ngân hàng TMCP Kỹ thương Việt Nam ( Techcombank) – Chi nhánh
                  Gia Định{' '}
                </span>
              </li>
              <li>
                <span className="bold">Số tài khoản:</span>&nbsp;
                <span>19132264536019</span>
              </li>
              <li>
                <span className="bold">Chủ tài khoản:</span>&nbsp;
                <span>Công ty CP Đào tạo Tâm Trí Lực</span>
              </li>
            </ul>
            <ul className="paragraph">
              <li>
                <span className="bold">
                  Ngân hàng TMCP Á Châu (ACB) – Chi nhánh Hai Bà Trưng
                </span>
              </li>
              <li>
                <span className="bold">Số tài khoản:</span>&nbsp;
                <span>6336868</span>
              </li>
              <li>
                <span className="bold">Chủ tài khoản:</span>&nbsp;
                <span>Công ty CP Đào tạo Tâm Trí Lực</span>
              </li>
            </ul>
            <ul className="paragraph">
              <li>
                <span className="bold">
                  Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank) – Chi Nhánh
                  Kỳ
                </span>
              </li>
              <li>
                <span className="bold">Đồng Số tài khoản:</span>
                &nbsp;
                <span>1001906868</span>
              </li>
              <li>
                <span className="bold">Chủ tài khoản:</span> &nbsp;
                <span>
                  Công ty CP Đào tạo Tâm Trí Lực Ngân hàng TMCP Đầu tư và Phát
                  triển Việt Nam (BIDV) – Chi nhánh Phú Nhuận Số tài khoản:
                  31510001101928 Chủ tài khoản: Công ty CP Đào tạo Tâm Trí Lực
                </span>
              </li>
            </ul>
          </div>
          <div className="helper-title">
            <div className="left-devider"></div>
            <div className="hepler-title-text">
              <span>Ghi chú khi chuyển khoản</span>
            </div>
          </div>
          <div className="helper-content">
            <p>
              Tại mục “Ghi chú” khi chuyển khoản, bạn ghi rõ:{' '}
              <span className="bold">
                Số điện thoại – Họ và tên – Mã đơn hàng{' '}
              </span>
            </p>
            <p>
              <span className="bold">Ví dụ:</span> 0909090909 –Huong Lan –
              000009
            </p>
            <p>
              Sau khi xác nhận thanh toán thành công, thẻ cào sẽ được gửi về địa
              chỉ của bạn.
            </p>
          </div>
          <div className="helper-title">
            <div className="left-devider"></div>
            <div className="hepler-title-text">
              <span>Phương thức 4: Thanh toán tại văn phòng</span>
            </div>
          </div>
          <div className="helper-content">
            <p>
              <span className="bold">Địa chỉ văn phòng: </span>
              778/11 Nguyễn Kiệm, Phường 4, Quận Phú Nhuận, Tp. Hồ Chí Minh
            </p>
            <p>Thời gian làm việc từ:</p>
            <p>
              08:00 – 18:00 thứ Hai đến thứ Sáu
              <br />
              08:00 – 12:00 thứ Bảy.
              <br />
              Chủ nhật và ngày lễ: Nghỉ
              <br />
            </p>
          </div>
          <div className="helper-title">
            <div className="left-devider"></div>
            <div className="hepler-title-text">
              <span>CHÍNH SÁCH GIAO HÀNG</span>
            </div>
          </div>
          <div className="helper-content">
            <p>
              Sau khi thanh toán thành công, hệ thống sẽ gửi cho quý khách một
              thông báo xác nhận thanh toán thành công và quý khách có thể bắt
              đầu tham gia khóa học.{' '}
            </p>
          </div>
          <div className="devider-dash"></div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetail;
