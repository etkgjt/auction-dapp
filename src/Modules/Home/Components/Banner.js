import React, { useState, useEffect } from 'react';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="main-banner saas-home">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="d-title">
                <span>Giới thiệu siêu trí nhớ học đường</span>
              </div>
            </div>
            <div className="row h-100 justify-content-center align-items-center"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray shape-1"></div>

      <div className="shape4 rotateme">
        <img src={require('@src/assets/images/star.svg').default} alt="img" />
      </div>
    </div>
  );
};

export default Banner;
