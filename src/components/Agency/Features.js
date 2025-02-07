import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="features-area startup-features ptb-100">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single-holder-box">
                  <img
                    src={require('@src/assets/images/payment-img1.png').default}
                    alt="image"
                  />
                  <h3>Project Creation</h3>
                  <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                </div>

                <div className="single-holder-box mt-30">
                  <img
                    src={require('@src/assets/images/payment-img2.png').default}
                    alt="image"
                  />
                  <h3>Software Development</h3>
                  <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-holder-box mt-50">
                  <img
                    src={require('@src/assets/images/payment-img3.png').default}
                    alt="image"
                  />
                  <h3>Porject Management</h3>
                  <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                </div>

                <div className="single-holder-box mt-30">
                  <img
                    src={require('@src/assets/images/payment-img4.png').default}
                    alt="image"
                  />
                  <h3>Software Update</h3>
                  <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="features-holder-content">
              <div className="section-title">
                <h2>Designed for startups with expert developer</h2>
                <div className="bar"></div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>

              <p>
                We’re also experts at finding the sweet spot between Google’s
                guidelines and what is commercially right for you. We have
                progressive theories on search as a tool for retention of
                customers, not just for acquisition. we always measure, always
                analyze and always innovate.
              </p>
              <Link to="/#">
                <a className="btn btn-primary">Our Services</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="features-inner-area">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="features-inner-content">
                <div className="features-item">
                  <div className="icon">
                    <i className="icofont-ui-call"></i>
                  </div>
                  <h3>Cloud Service</h3>
                  <p>
                    Plan ahead by day, week, or month, and see project status at
                    a glance. Search and filter to focus in on anything form a
                    single project to an individual person's workload.
                  </p>
                </div>

                <div className="features-item">
                  <div className="icon">
                    <i className="icofont-gift"></i>
                  </div>
                  <h3>Daily Free Gift</h3>
                  <p>
                    Plan ahead by day, week, or month, and see project status at
                    a glance. Search and filter to focus in on anything form a
                    single project to an individual person's workload.
                  </p>
                </div>

                <div className="features-item">
                  <div className="icon">
                    <i className="icofont-qr-code"></i>
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Plan ahead by day, week, or month, and see project status at
                    a glance. Search and filter to focus in on anything form a
                    single project to an individual person's workload.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="features-image">
                <img
                  src={require('@src/assets/images/features-img1.png').default}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape7">
        <img
          src={require('@src/assets/images/shape7.png').default}
          alt="shape"
        />
      </div>
      <div className="shape3">
        <img src={require('@src/assets/images/shape3.png').default} alt="img" />
      </div>
      <div className="bg-gray shape-1"></div>
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
      <div className="shape10">
        <img
          src={require('@src/assets/images/shape10.svg').default}
          alt="shape"
        />
      </div>
      <div className="shape11 rotateme">
        <img
          src={require('@src/assets/images/shape11.svg').default}
          alt="shape"
        />
      </div>
    </section>
  );
};

export default Features;
