import React, { useState } from 'react';

const Certification = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <section className="certification-area certification-section ptb-100">
      <div className="container">
        <div className="certification-title">
          <span>Chứng nhận từ tổ chức Kỷ Lục Việt Nam</span>
        </div>
        <div className="bar"></div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="certification-group">
              <div className="certification-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/certification-img1.png')
                      .default
                  }
                  alt="certification-img"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="certification-group">
              <div className="certification-group-image">
                <img
                  src={
                    require('@Modules/Introduce/assets/images/certification-img2.png')
                      .default
                  }
                  alt="certification-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
