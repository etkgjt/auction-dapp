import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { PlayButtonIcon } from '@Modules/Introduce/assets/svg';

const Advisory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <section className="advisory-area advisory-section ptb-100">
      <div className="advisory-title">
        <span>BAN CỐ VẤN</span>
      </div>
      <div className="bar"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="advisory-group">
              <div className="advisory-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/thangvanphuc.png')
                      .default
                  }
                  alt="thangvanphuc"
                />
              </div>

              <div className="advisory-group-name">
                <span>Tiến Sĩ. Thang Văn Phúc</span>
              </div>
              <div className="advisory-group-introduce">
                <ul>
                  <li>Nguyên thứ trưởng bộ nội vụ</li>
                  <li>Chủ tịch trung ương hội Kỷ Lục gia Việt Nam</li>
                  <li>
                    Phó chủ tịch thường trực TW Hội khoa học hành chính Việt Nam
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="advisory-group">
              <div className="advisory-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/ledoanhop.png')
                      .default
                  }
                  alt="ledoanhop"
                />
              </div>

              <div className="advisory-group-name">
                <span>Tiến Sĩ. Lê Doãn Hợp</span>
              </div>
              <div className="advisory-group-introduce">
                <ul>
                  <li>Nguyên Bộ trưởng Bộ Thông tin và Truyền Thông</li>
                  <li>Chủ tịch Hội đồng Xác lập Kỷ lục Việt Nam</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="advisory-group">
              <div className="advisory-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/ngoquangxuan.png')
                      .default
                  }
                  alt="ngoquangxuan"
                />
              </div>

              <div className="advisory-group-name">
                <span>Tiến Sĩ. Ngô Quang Xuân</span>
              </div>
              <div className="advisory-group-introduce">
                <ul>
                  <li>Nguyên Đại sứ Việt Nam tại Liên Hiệp Quốc</li>
                  <li>Thường trực Hội đồng Xác lập Kỷ lục Việt Nam</li>
                  <li>
                    Thành viên Hội đồng sáng lập Liên Minh Kỷ Lục Thế Giới
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="advisory-group">
              <div className="advisory-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/hoangquangthuan.png')
                      .default
                  }
                  alt="hoangquangthuan"
                />
              </div>

              <div className="advisory-group-name">
                <span>Giáo Sư, Viện Sĩ Hoàng Quang Thuận </span>
              </div>
              <div className="advisory-group-introduce">
                <ul>
                  <li>Nguyên Đại sứ Việt Nam tại Liên Hiệp Quốc</li>
                  <li>Thường trực Hội đồng Xác lập Kỷ lục Việt Nam</li>
                  <li>
                    Thành viên Hội đồng sáng lập Liên Minh Kỷ Lục Thế Giới
                  </li>
                  <li>
                    Thành viên Hội đồng sáng lập Liên Minh Kỷ Lục Thế Giới
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="advisory-group">
              <div className="advisory-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/marek.png')
                      .default
                  }
                  alt="marek"
                />
              </div>

              <div className="advisory-group-name">
                <span>Giáo Sư. Marek Kaspersky</span>
              </div>
              <div className="advisory-group-introduce">
                <ul>
                  <li>Chủ tịch hiệp hội Trọng Tài Thể Thao Trí Tuệ Toàn Cầu</li>
                  <li>Thường trực Hội đồng Xác lập Kỷ lục Việt Nam</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="advisory-group">
              <div className="advisory-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/biswaroop.png')
                      .default
                  }
                  alt="biswaroop"
                />
              </div>

              <div className="advisory-group-name">
                <span>Biswaroop Roy Chowdhury</span>
              </div>
              <div className="advisory-group-introduce">
                <ul>
                  <li>Tổng Giám Đốc Kỷ Lục Châu Á</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="advisory-group">
              <div className="advisory-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/john.png').default
                  }
                  alt="john"
                />
              </div>

              <div className="advisory-group-name">
                <span>John Graham</span>
              </div>
              <div className="advisory-group-introduce">
                <ul>
                  <li>Vô Địch Siêu Trí Nhớ Mỹ</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="advisory-group">
              <div className="advisory-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/lester.png')
                      .default
                  }
                  alt="lester"
                />
              </div>

              <div className="advisory-group-name">
                <span>Lester He</span>
              </div>
              <div className="advisory-group-introduce">
                <ul>
                  <li>Trưởng Ban Trọng Tài Thế Giới</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisory;
