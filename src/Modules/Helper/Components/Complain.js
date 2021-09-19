import React from 'react';
import { HomeIcon, PhoneIcon, MailIcon } from '@Modules/Helper/assets/svg';

const ComplainDetail = () => {
  return (
    <section className="helper-area helper-section helper-detail-area ptb-100">
      <div className="container helper-detail">
        <div className="helper-box">
          <div className="helper-content">
            <p>
              sieutrinhohocduong.com có trách nhiệm tiếp nhận khiếu nại và hỗ
              trợ khách hàng liên quan đến giao dịch tại website
              www.sieutrinhohocduong.com.
            </p>
            <p>
              Khi phát sinh tranh chấp, sieutrinhohocduong.com đề cao giải pháp
              thương lượng, hòa giải giữa các bên nhằm duy trì sự tin cậy của
              khách hàng/học viên vào chất lượng dịch vụ của
              sieutrinhohocduong.com và thực hiện theo các bước sau:
            </p>
            <p>
              <span className="bold">Bước 1: </span>Khách hàng/học viên khiếu
              nại về giao dịch / dịch vụ qua email: cskh@tamtriluc.com hoặc điện
              thoại: 0939.279.868 <br />
              <span className="bold">Bước 2: </span> Bộ phận Chăm Sóc Khách Hàng
              của sieutrinhohocduong.com sẽ tiếp nhận các khiếu nại của khách
              hàng/học viên, tùy theo tính chất và mức độ của khiếu nại thì bên
              sieutrinhohocduong.com sẽ có những biện pháp cụ thể hỗ trợ khách
              hàng để giải quyết tranh chấp đó. <br />
              <span className="bold">Bước 3: </span> sieutrinhohocduong.com yêu
              cầu khách hàng cung cấp đủ thông tin liên quan đến giao dịch.
              <br />
              <span className="bold">Bước 4: </span> sieutrinhohocduong.com sẽ
              gửi phản hồi cho khách hàng trong vòng 3 ngày làm việc sau khi
              nhận được các thông tin từ học viên/khách hàng.
            </p>
            <p className="bold">Khách hàng gửi khiếu nại tại địa chỉ:</p>
            <p className="bold">Công ty Cổ Phần Đào Tạo TÂM TRÍ LỰC</p>
            <div className="helper-content-with-icon">
              <div className="helper-content-icon">
                <HomeIcon />
              </div>
              <div className="helper-content-text">
                <p className="bold">Địa chỉ</p>
                <p>
                  778/11 Nguyễn Kiệm, Phường 4, Quận Phú Nhuận, Thành phố Hồ Chí
                  Minh
                </p>
              </div>
            </div>
            <div className="helper-content-with-icon">
              <div className="helper-content-icon">
                <PhoneIcon />
              </div>
              <div className="helper-content-text">
                <p className="bold">Điện thoại</p>
                <p>0939 279 868</p>
              </div>
            </div>
            <div className="helper-content-with-icon">
              <div className="helper-content-icon">
                <MailIcon />
              </div>
              <div className="helper-content-text">
                <p className="bold">Email</p>
                <p>cskh@tamtriluc.com</p>
              </div>
            </div>
          </div>

          <div className="devider-dash"></div>
        </div>
      </div>
    </section>
  );
};

export default ComplainDetail;
