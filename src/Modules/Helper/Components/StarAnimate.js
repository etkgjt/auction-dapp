import React, { Fragment } from 'react';

const Animate = () => {
  return (
    <Fragment>
      {' '}
      <div className="shape1">
        <img src={require('@src/assets/images/star-1.png').default} alt="img" />
      </div>
      <div className="shape2">
        <img src={require('@src/assets/images/star-2.png').default} alt="img" />
      </div>
      <div className="shape3">
        <img src={require('@src/assets/images/star-3.png').default} alt="img" />
      </div>
      <div className="shape6">
        <img src={require('@src/assets/images/star-1.png').default} alt="img" />
      </div>
      <div className="shape8 rotateme">
        <img
          src={require('@src/assets/images/star-1.png').default}
          alt="shape"
        />
      </div>
      <div className="shape9">
        <img
          src={require('@src/assets/images/star-3.png').default}
          alt="shape"
        />
      </div>
    </Fragment>
  );
};

export default Animate;
