import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { PlayButtonIcon } from '@Modules/Introduce/assets/svg';

const CourseElite = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

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
            <div className="post-video">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
                className="post-image thumbnail-video"
              >
                <div className="thumbnail-video__bg">
                  <PlayButtonIcon />
                </div>

                <img
                  src="https://img.youtube.com/vi/szuchBiLrEM/maxresdefault.jpg"
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
            <div className="post-video">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
                className="post-image thumbnail-video"
              >
                <div className="thumbnail-video__bg">
                  <PlayButtonIcon />
                </div>

                <img
                  src="https://img.youtube.com/vi/szuchBiLrEM/maxresdefault.jpg"
                  alt="course-elite-image"
                />
              </a>

              <div className="course-elite-post-content">
                <p>VTV1 đưa tin Sự kiện ra mắt STNHĐ phiên bản Song Ngữ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="szuchBiLrEM"
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
};

export default CourseElite;
