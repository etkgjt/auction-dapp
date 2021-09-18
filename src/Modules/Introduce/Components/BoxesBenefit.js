import React, { Component } from 'react';

const Boxes = () => {
  return (
    <section className="boxes-area">
      <div className="container">
        <div className="benefit-form">
          <div className="benefit-title">
            <span>LỢI ÍCH CỦA SIÊU TRÍ NHỚ HỌC ĐƯỜNG</span>
          </div>
          <div className="bar"></div>
          <div className="benefit-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="benefit-box">
                    <div className="benifit-box__img">
                      <img
                        src={
                          require('@Modules/Introduce/assets/images/benefit-brain.png')
                            .default
                        }
                        alt="img"
                      />
                    </div>
                    <div className="benefit-box__title">
                      <span>Học nhanh nhớ lâu</span>
                    </div>
                    <div className="benefit-box__content">
                      <p>
                        Bằng phương pháp "Sơ Đồ Tư Duy" và "Kỹ Thuật Siêu Trí
                        Nhớ"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="benefit-box">
                    <div className="benifit-box__img">
                      <img
                        src={
                          require('@Modules/Introduce/assets/images/benefit-study.png')
                            .default
                        }
                        alt="img"
                      />
                    </div>
                    <div className="benefit-box__title">
                      <span>Ôn bài dễ dàng</span>
                    </div>
                    <div className="benefit-box__content">
                      <p>
                        Truy cập vào STNHĐ trên ứng dụng của Tâm Trí Lực để truy
                        xuất thông tin bài học
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                  <div className="benefit-box">
                    <div className="benifit-box__img">
                      <img
                        src={
                          require('@Modules/Introduce/assets/images/benefit-wallet.png')
                            .default
                        }
                        alt="img"
                      />
                    </div>
                    <div className="benefit-box__title">
                      <span>Hỗ trợ tối đa</span>
                    </div>
                    <div className="benefit-box__content">
                      <p>
                        Trên diễn đàn do đội ngũ Siêu trí tuệ, Siêu trí nhớ,
                        Siêu tài năng nhí dẫn dắt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="benefit-download">
            <div className="benefit-download__title">
              <span>Cách học</span>
            </div>
            <div className="benefit-download__content">
              <p>
                Đăng nhập và kích hoạt tài khoản trên ứng dụng của Tâm Trí Lực
              </p>
            </div>
            <div className="d-flex w-100 justify-content-around align-items-center">
              <a className="frame__download">
                <img
                  src={
                    require('@src/assets/images/appstore-download.png').default
                  }
                  alt="Appsotre"
                />
              </a>
              <a className="frame__download">
                <img
                  src={
                    require('@src/assets/images/chplay-download.png').default
                  }
                  alt="CHPlay"
                />
              </a>
              <a className="frame__download">
                <img
                  src={
                    require('@src/assets/images/desktop-download.png').default
                  }
                  alt="Desktop"
                />
              </a>
            </div>
          </div>
          <div className="benefit-title__1">
            <span>Bắt đầu học</span>
          </div>

          <div className="benefit-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="benefit-box">
                    <div className="benifit-box__img blue">
                      <img
                        src={
                          require('@Modules/Introduce/assets/images/benefit-step1.png')
                            .default
                        }
                        alt="img"
                      />
                    </div>
                    <div className="benefit-box__content">
                      <span>Bước 1</span>
                    </div>
                    <div className="benefit-box__title min__h">
                      <p>Đọc sách hoặc xem video để nắm kỹ thuật</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="benefit-box">
                    <div className="benifit-box__img blue">
                      <img
                        src={
                          require('@Modules/Introduce/assets/images/benefit-step2.png')
                            .default
                        }
                        alt="img"
                      />
                    </div>
                    <div className="benefit-box__content">
                      <span>Bước 2</span>
                    </div>
                    <div className="benefit-box__title min__h">
                      <p>Luyện tập theo các kỹ thuật</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                  <div className="benefit-box">
                    <div className="benifit-box__img blue">
                      <img
                        src={
                          require('@Modules/Introduce/assets/images/benefit-step3.png')
                            .default
                        }
                        alt="img"
                      />
                    </div>
                    <div className="benefit-box__content">
                      <span>Bước 3</span>
                    </div>
                    <div className="benefit-box__title min__h">
                      <p>
                        Tham khảo bài mẫu hoặc bài giảng trước khi đến lớp và
                        sau khi học về
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="benefit-action">
            <a className="btn btn-blue">Mua ngay</a>
          </div>
        </div>
        <div className="bear-creative">
          <img
            src={require('@Modules/Introduce/assets/images/bear.svg').default}
            alt="bear"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Boxes;
