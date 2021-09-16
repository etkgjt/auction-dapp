import React, { Component } from 'react';

const Banner = () => {
  return (
    <section className="page-title-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Error</h2>
          </div>
        </div>
      </div>

      <div className="shape1">
        <img src={require('@src/assets/images/shape1.png').default} alt="img" />
      </div>
      <div className="shape2">
        <img src={require('@src/assets/images/shape2.png').default} alt="img" />
      </div>
      <div className="shape3">
        <img src={require('@src/assets/images/shape3.png').default} alt="img" />
      </div>
      <div className="shape6">
        <img src={require('@src/assets/images/shape6.png').default} alt="img" />
      </div>
      <div className="shape8 rotateme">
        <img
          src={require('@src/assets/images/shape8.svg').default}
          alt="shape"
        />
      </div>
      <div className="shape9">
        <img
          src={require('@src/assets/images/shape9.svg').default}
          alt="shape"
        />
      </div>
    </section>
  );
};

export default Banner;
