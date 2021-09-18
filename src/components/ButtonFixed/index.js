import './index.scss';
import React from 'react';

export const ButtonFixed = () => {
  return (
    <div className="fixed__left-button">
      <a className="btn-action btn-fixed">
        <div className="btn-fixed__label">
          <span>17h Thứ 5 Hàng Tuần</span>
        </div>
        <div className="btn-fixed__img">
          <img
            src={require('@src/assets/images/5-minutes.png').default}
            alt="5-minutes"
          />
        </div>
        <div className="shape4 rotateme">
          <img src={require('@src/assets/images/btn-animation.png').default} alt="img" />
        </div>
      </a>
    </div>
  );
};

export default ButtonFixed;
