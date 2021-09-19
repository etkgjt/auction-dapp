import React from 'react';

const Student = () => {
  return (
    <section className="container faq-area">
      <div className="faq-wrapper">
        <div className="cotainer rate-edit-box">
          <div className="rate-edit-wrapper">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="rate-edit-item">
                  <div className="rate-edit-item-date">
                    <span>10.02.2021</span>
                  </div>
                  <div className="rate-edit-item-title">
                    <span>Hướng dẫn chỉnh sửa đánh giá</span>
                  </div>
                  <div className="rate-edit-item-cotent">
                    <p>Hướng dẫn chỉnh sửa đánh giá</p>
                    <p>
                      Sau khi đánh giá, quý khách có thể chỉnh sửa phần đánh giá
                      của mình như sau:
                    </p>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="step">
                          <div className="step-img"></div>
                          <div className="step-content">
                            <p>B1:Chọn sản phẩm cần chỉnh sửa đánh giá</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="step">
                          <div className="step-img"></div>
                          <div className="step-content">
                            <p>Bước 2: Xem đánh giá hiện tại</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="step">
                          <div className="step-img"></div>
                          <div className="step-content">
                            <p>Bước 3:</p>
                            <p>1. Điều chỉnh số sao hoặc nội dung</p>
                            <p>2. Bấm “Cập nhập đánh giá” để hoàn thành</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="step">
                          <div className="step-img"></div>
                          <div className="step-content">
                            <p>
                              Bước 4: Sau khi cập nhật, đánh giá sẽ được kiểm
                              duyệt lại
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="rate-edit-item">
                  <div className="rate-edit-item-title">
                    <span>Trending Articles</span>
                  </div>
                  <div className="rate-edit-item-list">
                    <ul>
                      <li>Làm cách nào để tôi hủy đơn hàng?</li>
                      <li>Tôi muốn hủy đơn hàng đã đặt thì làm sao?</li>
                      <li>
                        Thông báo về hoạt động của Tiki trong thời gian giãn
                        cách do dịch Covid-19 và hướng dẫn giao nhận hàng
                      </li>
                      <li>Tiki hoàn tiền trong bao lâu?</li>
                    </ul>
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

export default Student;
