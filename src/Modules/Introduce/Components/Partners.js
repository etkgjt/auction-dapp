import React, { useState } from 'react';

const Certification = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <section className="partner-area partner-section ptb-100">
      <div className="container">
        <div className="partner-title">
          <span>Đối tác Siêu Trí Tuệ trên khắp cả nước</span>
        </div>
        <div className="bar"></div>
        <div className="header-tab">
          <div className="tabs">
            <div className="tab-item">
              <div className="tab-ico">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/diamond.png')
                      .default
                  }
                  alt="partner-img"
                />
              </div>
              <div className="tab-label">
                <span>Đối tác kim cương</span>
              </div>
            </div>

            <div className="tab-item active">
              <div className="tab-label">
                <span>Đối tác cấp 1</span>
              </div>
            </div>
            <div className="tab-item">
              <div className="tab-label">
                <span>Đối tác khác</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="partner-group">
              <div className="partner-group-image">
                <div className="partner-group-image__bg"></div>
                <img
                  src={
                    require('@Modules/Introduce/assets/images/partner-img1.png')
                      .default
                  }
                  alt="partner-img"
                />
                <div className="partner-group-image__name">
                  <span>Phạm Thị Bích Thùy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="partner-group">
              <div className="partner-group-image">
                <div className="partner-group-image__bg"></div>
                <img
                  src={
                    require('@Modules/Introduce/assets/images/partner-img2.png')
                      .default
                  }
                  alt="partner-img"
                />
                <div className="partner-group-image__name">
                  <span>Trần Thị Thu Hà</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="partner-group">
              <div className="partner-group-image">
                <div className="partner-group-image__bg"></div>
                <img
                  src={
                    require('@Modules/Introduce/assets/images/partner-img3.png')
                      .default
                  }
                  alt="partner-img"
                />
                <div className="partner-group-image__name">
                  <span>Nguyễn Hoàng Tuấn</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="partner-group">
              <div className="partner-group-image">
                <div className="partner-group-image__bg"></div>
                <img
                  src={
                    require('@Modules/Introduce/assets/images/partner-img1.png')
                      .default
                  }
                  alt="partner-img"
                />
                <div className="partner-group-image__name">
                  <span>Phạm Thị Bích Thùy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="partner-group">
              <div className="partner-group-image">
                <div className="partner-group-image__bg"></div>
                <img
                  src={
                    require('@Modules/Introduce/assets/images/partner-img2.png')
                      .default
                  }
                  alt="partner-img"
                />
                <div className="partner-group-image__name">
                  <span>Trần Thị Thu Hà</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="partner-group">
              <div className="partner-group-image">
                <div className="partner-group-image__bg"></div>
                <img
                  src={
                    require('@Modules/Introduce/assets/images/partner-img3.png')
                      .default
                  }
                  alt="partner-img"
                />
                <div className="partner-group-image__name">
                  <span>Nguyễn Hoàng Tuấn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partner-action">
          <a href="#" className="btn btn-primary">
            Xem tất cả đối tác
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certification;
