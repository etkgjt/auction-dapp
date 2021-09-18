import React from 'react';

import { TickIcon } from '@Modules/Introduce/assets/svg';

const Excellence = () => {
  return (
    <section className="experience-area excellence-area">
      <div className="creative-shape-top">
        <img
          src={
            require('@Modules/Introduce/assets/images/student-bg.png').default
          }
          alt="excellence"
        />
      </div>
      <div className="container pdt-18-rem pdb-18-rem">
        <div className="excellence-title">
          <span>Học trò ưu tú</span>
        </div>
        <div className="excellence-subtitle">
          <span>Tuyên dương những học trò có thành tích vượt trội</span>
        </div>
        <div className="bar"></div>
        <div className="row">
          <div className="col-lg-4 col-md-4 excellence-student">
            <div className="excellence-box">
              <div className="excellence-img">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/student-img1.png')
                      .default
                  }
                  alt="student"
                />
                <div className="excellence-img-number">
                  <span>01</span>
                </div>
              </div>
              <div className="excellence-name">
                <span>Trần Gia Hưng</span>
              </div>
              <div className="excellence-intro">
                <span>Thí sinh mùa thứ 1 siêu trí tuệ Việt Nam</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 excellence-student">
            <div className="excellence-box">
              <div className="excellence-img">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/student-img2.png')
                      .default
                  }
                  alt="student"
                />
                <div className="excellence-img-number">
                  <span>02</span>
                </div>
              </div>
              <div className="excellence-name">
                <span>Trần Gia Hưng</span>
              </div>
              <div className="excellence-intro">
                <span>Thí sinh mùa thứ 1 siêu trí tuệ Việt Nam</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 excellence-student">
            <div className="excellence-box">
              <div className="excellence-img">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/student-img3.png')
                      .default
                  }
                  alt="student"
                />
                <div className="excellence-img-number">
                  <span>03</span>
                </div>
              </div>
              <div className="excellence-name">
                <span>Trần Gia Hưng</span>
              </div>
              <div className="excellence-intro">
                <span>Thí sinh mùa thứ 1 siêu trí tuệ Việt Nam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
