import React from 'react';

const CourseElite = () => {
  return (
    <section className="course-elite-area course-elite-section ptb-100">
      <div className="course-elite-title">
        <span>TINH HOA CỦA KHÓA HỌC</span>
      </div>
      <div className="course-elite-subtitle">
        <span>CỘNG ĐỒNG VÀ CHUYÊN GIA NÓI VỀ SIÊU TRÍ NHỚ HỌC ĐƯỜNG</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-course-elite-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img1.jpg').default}
                  alt="course-elite-image"
                />
              </a>

              <div className="course-elite-post-content">
                <p>
                  Các giáo viên nước ngoài bất ngờ và khen ngợi về STNHĐ phiên
                  bản tiếng Anh
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-course-elite-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img2.jpg').default}
                  alt="course-elite-image"
                />
              </a>
              <div className="course-elite-post-content">
                <p>
                  Cộng đồng Phụ Huynh, Thầy Cô, Học Sinh nói về Siêu Trí Nhớ Học
                  Đường
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-course-elite-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img3.jpg').default}
                  alt="course-elite-image"
                />
              </a>
              <div className="course-elite-post-content">
                <p>
                  Các chuyên gia trong và ngoài nước nói về Siêu Trí Nhớ Học
                  Đường
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-elite-subtitle">
        <span>BÁO CHÍ TRUYỀN THÔNG NÓI VỀ SIÊU TRÍ NHỚ HỌC ĐƯỜNG</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="single-course-elite-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img1.jpg').default}
                  alt="course-elite-image"
                />
              </a>

              <div className="course-elite-post-content">
                <p>
                  Các giáo viên nước ngoài bất ngờ và khen ngợi về STNHĐ phiên
                  bản tiếng Anh
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="single-course-elite-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img2.jpg').default}
                  alt="course-elite-image"
                />
              </a>
              <div className="course-elite-post-content">
                <p>
                  Cộng đồng Phụ Huynh, Thầy Cô, Học Sinh nói về Siêu Trí Nhớ Học
                  Đường
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseElite;
