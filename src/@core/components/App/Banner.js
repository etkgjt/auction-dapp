import React from 'react';

const Banner = () => {
  return (
    <div className="main-banner app-home">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="hero-content">
                  <h1>Crake Makes Your Life Very Easier</h1>
                  <p>
                    Our passion to work hard and deliver excellent results. It
                    could solve the needs of your customers and develop
                    innovation.
                  </p>

                  <form>
                    <input
                      type="email"
                      placeholder="Enter your email...."
                      className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">
                      Begin Free Trial
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="app-image">
                  <img
                    src={require('@src/assets/images/app-img4.png').default}
                    alt="image"
                  />
                  <img
                    src={require('@src/assets/images/app-img2.png').default}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="creative-shape">
        <img src={require('@src/assets/images/bg3.png').default} alt="bg" />
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
    </div>
  );
};

export default Banner;
