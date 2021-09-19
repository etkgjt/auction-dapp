import React from 'react';

import { SearchIcon } from '@Modules/Partner/assets/svg';

import BreadCrumbs from '@components/Breadcrumbs';

const Banner = () => {
  return (
    <section className="partner-area">
      <div className="partner-banner">
        <div className="partner-banner__bg"></div>
        <div className="partner-banner__text">
          <div className="partner-title">
            <span>ĐỐI TÁC</span>
          </div>

          <div className="bar blue"></div>
        </div>

        <div className="container partner-banner__search">
          <div className="row search-box">
            <div className="col-lg-6 col-md-9">
              <div className="search-input">
                <div className="search-icon">
                  <SearchIcon />
                </div>
                <div className="form-input">
                  <input
                    type="text"
                    className="search-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="search-box">
                <div className="search-select">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-7">
              <div className="search-submit">
                <a className="btn btn-primary btn-search">Tìm kiếm</a>
              </div>
            </div>
          </div>
        </div>

        <img
          src={
            require('@Modules/Partner/assets/images/partner-banner.png').default
          }
          alt="Partner"
        />
      </div>

      <div className="container ptb-100 partner-list">
        <div className="partner-header">
          <BreadCrumbs
            breadCrumbs={[
              {
                to: '/',
                title: 'Trang chủ',
              },
              {
                title: 'Đối tác',
              },
              {
                title: 'Chính sách đối tác',
              },
            ]}
            rightComponent={<a className="btn btn-blue">Đăng ký đối tác</a>}
          />
        </div>
        <div className="tabs">
          <div className="tab active">
            <span>Danh sách đối tác</span>
          </div>
          <div className="tab">
            <span>Chính sách đối tác</span>
          </div>
        </div>

        <div className="partner-list-title">
          <span>Danh sách đối tác</span>
        </div>
        <div className="bar"></div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="partner-group">
              <div className="partner-info-visible">
                <div className="partner-info-box">
                  <div className="partner-info">
                    <div className="partner-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="partner-special">
                      <div className="partner-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="partner-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="partner-special-devider"></div>
                      <div className="partner-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/partner-img1.png')
                      .default
                  }
                  alt="partner-img"
                />
              </div>

              <div className="partner-group-name">
                <span>Thầy Bùi Văn Ngợi</span>
              </div>
              <div className="partner-group-introduce">
                <ul>
                  <li>Người đầu tiên Việt Nam chinh phục đỉnh EVEREST</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="partner-group">
              <div className="partner-info-visible">
                <div className="partner-info-box">
                  <div className="partner-info">
                    <div className="partner-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="partner-special">
                      <div className="partner-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="partner-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="partner-special-devider"></div>
                      <div className="partner-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/partner-img2.png')
                      .default
                  }
                  alt="partner-img"
                />
              </div>

              <div className="partner-group-name">
                <span>Thầy Phạm Ngọc Bình</span>
              </div>
              <div className="partner-group-introduce">
                <ul>
                  <li>Kỷ lục gia Siêu Trí Tuệ Tâm Trí Lực</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="partner-group">
              <div className="partner-info-visible">
                <div className="partner-info-box">
                  <div className="partner-info">
                    <div className="partner-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="partner-special">
                      <div className="partner-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="partner-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="partner-special-devider"></div>
                      <div className="partner-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/partner-img3.png')
                      .default
                  }
                  alt="partner-img"
                />
              </div>

              <div className="partner-group-name">
                <span>Cô Võ Thị Thái Vượng</span>
              </div>
              <div className="partner-group-introduce">
                <ul>
                  <li>Giám đốc phòng đào tạo Tâm Trí Lực</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="partner-group">
              <div className="partner-info-visible">
                <div className="partner-info-box">
                  <div className="partner-info">
                    <div className="partner-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="partner-special">
                      <div className="partner-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="partner-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="partner-special-devider"></div>
                      <div className="partner-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img4.png')
                      .default
                  }
                  alt="partner-img"
                />
              </div>

              <div className="partner-group-name">
                <span>Cô Hương Xuân</span>
              </div>
              <div className="partner-group-introduce">
                <ul>
                  <li>Chuyên viên đào tạo</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="partner-group">
              <div className="partner-info-visible">
                <div className="partner-info-box">
                  <div className="partner-info">
                    <div className="partner-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="partner-special">
                      <div className="partner-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="partner-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="partner-special-devider"></div>
                      <div className="partner-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img5.png')
                      .default
                  }
                  alt="partner-img"
                />
              </div>

              <div className="partner-group-name">
                <span>Thầy Bùi Văn Ngợi</span>
              </div>
              <div className="partner-group-introduce">
                <ul>
                  <li>Người đầu tiên Việt Nam chinh phục đỉnh EVEREST</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="partner-group">
              <div className="partner-info-visible">
                <div className="partner-info-box">
                  <div className="partner-info">
                    <div className="partner-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="partner-special">
                      <div className="partner-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="partner-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="partner-special-devider"></div>
                      <div className="partner-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img6.png')
                      .default
                  }
                  alt="partner-img"
                />
              </div>

              <div className="partner-group-name">
                <span>Thầy Phạm Ngọc Bình</span>
              </div>
              <div className="partner-group-introduce">
                <ul>
                  <li>Kỷ lục gia Siêu Trí Tuệ Tâm Trí Lực</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="partner-group">
              <div className="partner-info-visible">
                <div className="partner-info-box">
                  <div className="partner-info">
                    <div className="partner-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="partner-special">
                      <div className="partner-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="partner-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="partner-special-devider"></div>
                      <div className="partner-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img7.png')
                      .default
                  }
                  alt="partner-img"
                />
              </div>

              <div className="partner-group-name">
                <span>Cô Võ Thị Thái Vượng</span>
              </div>
              <div className="partner-group-introduce">
                <ul>
                  <li>Giám đốc phòng đào tạo Tâm Trí Lực</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="partner-group">
              <div className="partner-info-visible">
                <div className="partner-info-box">
                  <div className="partner-info">
                    <div className="partner-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="partner-special">
                      <div className="partner-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="partner-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="partner-special-devider"></div>
                      <div className="partner-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partner-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img8.png')
                      .default
                  }
                  alt="partner-img"
                />
              </div>

              <div className="partner-group-name">
                <span>Cô Hương Xuân</span>
              </div>
              <div className="partner-group-introduce">
                <ul>
                  <li>Chuyên viên đào tạo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape1">
        <img src={require('@src/assets/images/star-1.png').default} alt="img" />
      </div>
      <div className="shape2">
        <img src={require('@src/assets/images/star-2.png').default} alt="img" />
      </div>
      <div className="shape3">
        <img src={require('@src/assets/images/star-3.png').default} alt="img" />
      </div>
      <div className="shape6">
        <img src={require('@src/assets/images/star-1.png').default} alt="img" />
      </div>
      <div className="shape8 rotateme">
        <img
          src={require('@src/assets/images/star-4.png').default}
          alt="shape"
        />
      </div>
      <div className="shape9">
        <img
          src={require('@src/assets/images/star-3.png').default}
          alt="shape"
        />
      </div>
    </section>
  );
};

export default Banner;
