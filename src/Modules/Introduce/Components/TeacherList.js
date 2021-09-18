import React, { useState } from 'react';

const TeacherList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <section className="teacher-area teacher-section ptb-100">
      <div className="teacher-title">
        <span>Danh sách thầy cô và chuyên gia tham gia dự án</span>
      </div>
      <div className="bar"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="teacher-group">
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
      <div className="teacher-action">
        <a className="btn btn-primary">Xem tất cả giáo viên</a>
      </div>
    </section>
  );
};

export default TeacherList;
