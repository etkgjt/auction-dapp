import React, { Component } from 'react';

const ListCourse = () => {
  return (
    <section className="list-course-area list-course-section ptb-100">
      <div className="container">
        <div className="list-course-area__title">
          <span>Bộ Công cụ hỗ trợ học tập Giúp con học nhanh nhớ lâu</span>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="list-course__item">
              <div
                className="list-course_image"
                style={{ backgroundColor: '#FCECF3' }}
              >
                <img
                  src={
                    require('@src/assets/images/list-course-img-1.png').default
                  }
                  alt="blog-image"
                />
              </div>
              <div className="list-course__title" style={{ color: '#D74A96' }}>
                <span>Sách Siêu Trí Nhớ</span>
              </div>
              <div className="list-course__content">
                <p>
                  180 trang sách với 10 kỹ thuật ghi nhớ cơ bản do Thầy Nguyễn
                  Phùng Phong đúc kết từ việc nghiên cứu những phương pháp học
                  tập giảng dạy bởi những người thầy nổi tiếng thế giới như:
                  Tony Buzan, Dominic O'Brien, Biswaroop, Erant Katz…
                </p>
              </div>
              <div className="list-course__action">
                <a className="list-course__btn btn btn-pink" href="/#">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="list-course__item">
              <div
                className="list-course_image"
                style={{ backgroundColor: '#EAF8FD' }}
              >
                <img
                  src={
                    require('@src/assets/images/list-course-img-2.png').default
                  }
                  alt="blog-image"
                />
              </div>
              <div className="list-course__title" style={{ color: '#6195FD' }}>
                <span>Video Kỹ Thuật Ghi Nhớ</span>
              </div>
              <div className="list-course__content">
                <p>
                  Huấn luyện viên trưởng Đội tuyển Siêu Trí Nhớ Việt Nam - Thầy
                  Nguyễn Phùng Phong chia sẻ Quy trình học thông minh chỉ với
                  Quy tắc 6-3-4. Các bạn cùng theo dõi nhé!
                </p>
              </div>
              <div className="list-course__action">
                <a className="list-course__btn btn btn-light-blue" href="/#">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="list-course__item">
              <div
                className="list-course_image"
                style={{ backgroundColor: '#EAF8FD' }}
              >
                <img
                  src={
                    require('@src/assets/images/list-course-img-3.png').default
                  }
                  alt="blog-image"
                />
              </div>
              <div className="list-course__title" style={{ color: '#24B6B1' }}>
                <span>Sách Siêu Trí Nhớ</span>
              </div>
              <div className="list-course__content">
                <p>
                  180 trang sách với 10 kỹ thuật ghi nhớ cơ bản do Thầy Nguyễn
                  Phùng Phong đúc kết từ việc nghiên cứu những phương pháp học
                  tập giảng dạy bởi những người thầy nổi tiếng thế giới như:
                  Tony Buzan, Dominic O'Brien, Biswaroop, Erant Katz…
                </p>
              </div>
              <div className="list-course__action">
                <a className="list-course__btn btn btn-mint" href="/#">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="list-course__item">
              <div
                className="list-course_image"
                style={{ backgroundColor: '#F4F5B9' }}
              >
                <img
                  src={
                    require('@src/assets/images/list-course-img-4.png').default
                  }
                  alt="blog-image"
                />
              </div>
              <div className="list-course__title" style={{ color: '#47821C' }}>
                <span>Sơ đồ tư duy bài giảng SGK</span>
              </div>
              <div className="list-course__content">
                <p>
                  4000 bản tóm tắt kiến thức theo sơ đồ tư duy (Mindmap) được
                  thầy Nguyễn Phùng Phong cùng đội ngũ cộng sự biên soạn.
                </p>
              </div>
              <div className="list-course__action">
                <a className="list-course__btn btn btn-green" href="/#">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="list-course__item">
              <div
                className="list-course_image"
                style={{ backgroundColor: '#EAF8FD' }}
              >
                <img
                  src={
                    require('@src/assets/images/list-course-img-5.png').default
                  }
                  alt="blog-image"
                />
              </div>
              <div className="list-course__title" style={{ color: '#7B70FF' }}>
                <span>Diễn đàn học tập</span>
              </div>
              <div className="list-course__content">
                <p>
                  Diễn đàn học tập giải đáp thắc mắc và gỡ rối những câu hỏi khó
                  nhớ chỉ cần gửi ngay lên diễn đàn. Biệt đội Siêu trí tuệ, Siêu
                  trí nhớ và Thầy cô sẽ luôn tiếp nhận và hỗ trợ.
                </p>
              </div>
              <div className="list-course__action">
                <a className="list-course__btn btn btn-purple" href="/#">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="list-course__item">
              <div
                className="list-course_image"
                style={{ backgroundColor: '#FFE8AE' }}
              >
                <img
                  src={
                    require('@src/assets/images/list-course-img-6.png').default
                  }
                  alt="blog-image"
                />
              </div>
              <div className="list-course__title" style={{ color: '#FFC736' }}>
                <span>5 Phút Thuộc Bài</span>
              </div>
              <div className="list-course__content">
                <p>
                  Cuộc thi 5 Phút thuộc bài-Sân chơi bổ ích dành cho học sinh từ
                  lớp 1 đến lớp 12 diễn ra hàng tuần. Các bạn học sinh được vừa
                  học vừa chơi, tranh tài và ứng dụng phương pháp học tập thông
                  minh khiến việc học trở nên đầy thú vị.
                </p>
              </div>
              <div className="list-course__action">
                <a className="list-course__btn btn btn-yellow" href="/#">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListCourse;
