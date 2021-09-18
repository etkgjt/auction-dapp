import React from 'react';

import { SearchIcon } from '@Modules/Teacher/assets/svg';

const Banner = () => {
  return (
    <section className="teacher-area">
      <div className="teacher-banner">
        <div className="teacher-banner__bg"></div>
        <div className="teacher-banner__text">
          <div className="teacher-title">
            <span>ĐỘI NGŨ GIÁO VIÊN</span>
          </div>

          <div className="bar"></div>
        </div>

        <div className="container teacher-banner__search">
          <div className="row search-box">
            <div className="col-lg-6 col-md-9">
              <div className="search-input">
                <div className="search-icon">
                  <SearchIcon />
                </div>
                <div class="form-input">
                  <input
                    type="text"
                    class="search-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="search-box">
                <div className="search-select">
                  <select
                    class="form-select"
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
            require('@Modules/Teacher/assets/images/teacher-banner.png').default
          }
          alt="Teacher"
        />
      </div>
      <div className="container ptb-100 teacher-list">
        <div className="tabs">
          <div className="tab active">
            <span>Tiểu học</span>
          </div>
          <div className="tab">
            <span>THCS</span>
          </div>
          <div className="tab">
            <span>THPT</span>
          </div>
          <div className="tab">
            <span>Nước ngoài</span>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="teacher-group">
              <div className="teacher-info-visible">
                <div className="teacher-info-box">
                  <div className="teacher-info">
                    <div className="teacher-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="teacher-special">
                      <div className="teacher-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="teacher-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="teacher-special-devider"></div>
                      <div className="teacher-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="teacher-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img1.png')
                      .default
                  }
                  alt="teacher-img"
                />
              </div>

              <div className="teacher-group-name">
                <span>Thầy Bùi Văn Ngợi</span>
              </div>
              <div className="teacher-group-introduce">
                <ul>
                  <li>Người đầu tiên Việt Nam chinh phục đỉnh EVEREST</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="teacher-group">
              <div className="teacher-info-visible">
                <div className="teacher-info-box">
                  <div className="teacher-info">
                    <div className="teacher-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="teacher-special">
                      <div className="teacher-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="teacher-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="teacher-special-devider"></div>
                      <div className="teacher-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="teacher-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img2.png')
                      .default
                  }
                  alt="teacher-img"
                />
              </div>

              <div className="teacher-group-name">
                <span>Thầy Phạm Ngọc Bình</span>
              </div>
              <div className="teacher-group-introduce">
                <ul>
                  <li>Kỷ lục gia Siêu Trí Tuệ Tâm Trí Lực</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="teacher-group">
              <div className="teacher-info-visible">
                <div className="teacher-info-box">
                  <div className="teacher-info">
                    <div className="teacher-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="teacher-special">
                      <div className="teacher-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="teacher-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="teacher-special-devider"></div>
                      <div className="teacher-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="teacher-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img3.png')
                      .default
                  }
                  alt="teacher-img"
                />
              </div>

              <div className="teacher-group-name">
                <span>Cô Võ Thị Thái Vượng</span>
              </div>
              <div className="teacher-group-introduce">
                <ul>
                  <li>Giám đốc phòng đào tạo Tâm Trí Lực</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="teacher-group">
              <div className="teacher-info-visible">
                <div className="teacher-info-box">
                  <div className="teacher-info">
                    <div className="teacher-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="teacher-special">
                      <div className="teacher-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="teacher-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="teacher-special-devider"></div>
                      <div className="teacher-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="teacher-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img4.png')
                      .default
                  }
                  alt="teacher-img"
                />
              </div>

              <div className="teacher-group-name">
                <span>Cô Hương Xuân</span>
              </div>
              <div className="teacher-group-introduce">
                <ul>
                  <li>Chuyên viên đào tạo</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="teacher-group">
              <div className="teacher-info-visible">
                <div className="teacher-info-box">
                  <div className="teacher-info">
                    <div className="teacher-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="teacher-special">
                      <div className="teacher-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="teacher-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="teacher-special-devider"></div>
                      <div className="teacher-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="teacher-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img5.png')
                      .default
                  }
                  alt="teacher-img"
                />
              </div>

              <div className="teacher-group-name">
                <span>Thầy Bùi Văn Ngợi</span>
              </div>
              <div className="teacher-group-introduce">
                <ul>
                  <li>Người đầu tiên Việt Nam chinh phục đỉnh EVEREST</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="teacher-group">
              <div className="teacher-info-visible">
                <div className="teacher-info-box">
                  <div className="teacher-info">
                    <div className="teacher-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="teacher-special">
                      <div className="teacher-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="teacher-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="teacher-special-devider"></div>
                      <div className="teacher-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="teacher-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img6.png')
                      .default
                  }
                  alt="teacher-img"
                />
              </div>

              <div className="teacher-group-name">
                <span>Thầy Phạm Ngọc Bình</span>
              </div>
              <div className="teacher-group-introduce">
                <ul>
                  <li>Kỷ lục gia Siêu Trí Tuệ Tâm Trí Lực</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="teacher-group">
              <div className="teacher-info-visible">
                <div className="teacher-info-box">
                  <div className="teacher-info">
                    <div className="teacher-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="teacher-special">
                      <div className="teacher-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="teacher-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="teacher-special-devider"></div>
                      <div className="teacher-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="teacher-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img7.png')
                      .default
                  }
                  alt="teacher-img"
                />
              </div>

              <div className="teacher-group-name">
                <span>Cô Võ Thị Thái Vượng</span>
              </div>
              <div className="teacher-group-introduce">
                <ul>
                  <li>Giám đốc phòng đào tạo Tâm Trí Lực</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="teacher-group">
              <div className="teacher-info-visible">
                <div className="teacher-info-box">
                  <div className="teacher-info">
                    <div className="teacher-info-name">
                      <span>Cô Phan Thị Ngọc Hân</span>
                    </div>
                    <div className="teacher-special">
                      <div className="teacher-special-title">
                        <span>Thành tích nổi bậc</span>
                      </div>
                      <div className="teacher-special-list">
                        <ul>
                          <li>
                            Bằng khen Thành Phố hoàn thành xuất sắc nhiệm vụ năm
                            học.
                          </li>
                          <li>Giáo viên giỏi cấp Quận nhiều năm liền.</li>
                        </ul>
                      </div>
                      <div className="teacher-special-devider"></div>
                      <div className="teacher-special-action">
                        <a className="btn-action btn-white">
                          <span> Kinh nghiệm giảng dạy: 20 năm</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="teacher-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/teacher-img8.png')
                      .default
                  }
                  alt="teacher-img"
                />
              </div>

              <div className="teacher-group-name">
                <span>Cô Hương Xuân</span>
              </div>
              <div className="teacher-group-introduce">
                <ul>
                  <li>Chuyên viên đào tạo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape1">
        <img
          src={require('@src/assets/images/star-1.png').default}
          alt="img"
        />
      </div>
      <div className="shape2">
        <img
          src={require('@src/assets/images/star-2.png').default}
          alt="img"
        />
      </div>
      <div className="shape3">
        <img
          src={require('@src/assets/images/star-3.png').default}
          alt="img"
        />
      </div>
      <div className="shape6">
        <img
          src={require('@src/assets/images/star-1.png').default}
          alt="img"
        />
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
