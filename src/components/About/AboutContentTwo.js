import React from 'react';

const AboutContentTwo = () => {
  return (
    <section className="features-area marketing-features ptb-100">
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
                  <h3>Our Company</h3>
                  <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                </div>

                <div className="single-holder-box mt-30">
                  <img
                    src={require('@src/assets/images/payment-img2.png').default}
                    alt="image"
                  />
                  <h3>What we Value</h3>
                  <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-holder-box mt-50">
                  <img
                    src={require('@src/assets/images/payment-img3.png').default}
                    alt="image"
                  />
                  <h3>Who we are</h3>
                  <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                </div>

                <div className="single-holder-box mt-30">
                  <img
                    src={require('@src/assets/images/payment-img4.png').default}
                    alt="image"
                  />
                  <h3>Contact Us</h3>
                  <p>Duis hendrerit eget dolor non lora pulvinar. In conse.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="features-holder-content">
              <div className="section-title">
                <h2>We are here for Make Best Product</h2>
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
              <a href="/#" className="btn btn-primary">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-inner-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="about-text">
                <h3>Our Company</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="about-text">
                <h3>Who we are</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="about-text">
                <h3>What we Value</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="about-text">
                <h3>Contact Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
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

export default AboutContentTwo;
