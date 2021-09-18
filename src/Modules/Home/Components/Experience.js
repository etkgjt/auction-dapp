import React from 'react';

const Experience = () => {
  return (
    <section className="experience-area">
      <div className="creative-shape-top">
        <img
          src={require('@src/assets/images/bg-experience.png').default}
          alt="experience"
        />
      </div>
      <div className="container pdt-18-rem">
        <div className="section-title experience__title">
          <span>Hướng dẫn trải nghiệm khóa học</span>
          <div className="bar"></div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="experience__table">
              <div
                className="experience-image"
                style={{ backgroundColor: '#FFF0CB' }}
              >
                <img
                  src={
                    require('@src/assets/images/experience-img1.png').default
                  }
                  alt="experience"
                />
              </div>
              <div className="experience-title" style={{ color: '#FFBE17' }}>
                <span>Tải Miễn Phí</span>
              </div>
              <div className="experience-content">
                <p>
                  Tải miễn phí Siêu Trí Nhớ Học Đường trên App Store/Google Play
                  và đăng ký tài khoản
                </p>
              </div>
              <div className="experience-action">
                <a
                  className="btn btn-action"
                  style={{ backgroundColor: '#FFBE17' }}
                >
                  Trải nghiệm ngay{' '}
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="experience__table">
              <div
                className="experience-image"
                style={{ backgroundColor: '#EDE0FE' }}
              >
                <img
                  src={
                    require('@src/assets/images/experience-img2.png').default
                  }
                  alt="experience"
                />
              </div>
              <div className="experience-title" style={{ color: '#BB66C2' }}>
                <span>Trải Nghiệm Khóa Học</span>
              </div>
              <div className="experience-content">
                <p>
                  Trải nghiệm các videos bài giảng về kỹ thuật ghi nhớ và videos
                  bài giảng trải dài từ lớp 1 đến lớp 12 theo chương trình của
                  Bộ Giáo dục - Đào tạo.
                </p>
              </div>
              <div className="experience-action">
                <a
                  className="btn btn-action"
                  style={{ backgroundColor: '#A769F6' }}
                >
                  Trải nghiệm ngay
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="experience__table">
              <div
                className="experience-image"
                style={{ backgroundColor: '#FCEAFF' }}
              >
                <img
                  src={
                    require('@src/assets/images/experience-img1.png').default
                  }
                  alt="experience"
                />
              </div>
              <div className="experience-title" style={{ color: '#E569BB' }}>
                <span>Thanh Toán</span>
              </div>
              <div className="experience-content">
                <p>
                  Trải nghiệm các videos bài giảng về kỹ thuật ghi nhớ và videos
                  bài giảng trải dài từ lớp 1 đến lớp 12 theo chương trình của
                  Bộ Giáo dục - Đào tạo.
                </p>
              </div>
              <div className="experience-action">
                <a
                  className="btn btn-action"
                  style={{ backgroundColor: '#E569BB' }}
                >
                  Trải nghiệm ngay{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
