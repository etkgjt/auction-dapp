import React from 'react';

const Banner = ({ title }) => {
  return (
    <section className="container helper-area">
      <div className="helper-banner-wrapper">
        <div className="helper-banner">
          <div className="helper-title">
            <span>{title}</span>
          </div>

          <div className="bar"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
