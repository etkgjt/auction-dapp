import React from 'react';

import { TickIcon } from '@Modules/Introduce/assets/svg';

const Experience = () => {
  return (
    <section className="main-author-area">
      <div className="creative-shape-top">
        <img
          src={
            require('@Modules/Introduce/assets/images/main-author.png').default
          }
          alt="main-author"
        />
      </div>
      <div className="container pdt-18-rem">
        <div className="row">
          <div className="col-lg-6 col-md-12 container main-author-intro">
            <div className="author__postion">
              <span>Tác giả - Giảng viên chính</span>
            </div>
            <div className="author__name">
              <span>Thầy Nguyễn Phùng Phong</span>
            </div>
            <div className="author__intro">
              <ul>
                <li>
                  <div className="author-list__intro">
                    <div className="author-list-tick__intro">
                      <TickIcon />
                    </div>
                    <div className="author-list-name__intro">
                      Kỷ lục gia Siêu trí nhớ thế giới
                    </div>
                  </div>
                </li>
                <li>
                  <div className="author-list__intro">
                    <div className="author-list-tick__intro">
                      <TickIcon />
                    </div>
                    <div className="author-list-name__intro">
                      Chủ tịch Tổ chức Trí nhớ Việt Nam
                    </div>
                  </div>
                </li>
                <li>
                  <div className="author-list__intro">
                    <div className="author-list-tick__intro">
                      <TickIcon />
                    </div>
                    <div className="author-list-name__intro">
                      HLV trưởng Đội tuyển Siêu trí nhớ quốc gia
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 main-author-img">
            <div className="author__img">
              <img
                src={
                  require('@Modules/Introduce/assets/images/nguyenhungphong.png')
                    .default
                }
                alt="nguyenhungphong"
              />
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Experience;
