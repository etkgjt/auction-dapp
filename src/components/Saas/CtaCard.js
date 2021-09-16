import React from 'react';
import { Link } from 'react-router-dom';

const CtaCard = () => {
  return (
    <div className="cta-area">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-7 col-md-7">
            <p>Want a bite? You're in the right place!</p>
          </div>

          <div className="col-lg-5 col-md-5 text-right">
            <Link to="#">
              <a className="btn btn-primary">Take a Test Drive</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;
