import React, { Component } from 'react';

const BlogOne = () => {
  return (
    <section className="blog-area blog-section ptb-100">
      <div className="tabs">
        <div className="tab active">
          <span>Tin tức - Sự kiện</span>
        </div>
        <div className="tab">
          <span>Chính sách ưu đãi theo tháng</span>
        </div>
      </div>
      <div className="container">
        <div className="blog-title">
          <span>Tin nổi bật</span>
        </div>
        <div className="row blog-top">
          <div className="col-lg-8 col-md-8">
            <div className="blog-top-long">
              <div className="row">
                <div className="col-lg-4 col-md-4 blog-top-long-box">
                  <div className="blog-top-long-content">
                    <div className="blog-top-long-content-date">
                      <span>12/9/2021</span>
                    </div>
                    <div className="blog-top-long-content-title">
                      <p>
                        Ưu đãi lớn cho các Đại lý STNHĐ đăng ký trong tháng
                        7-8/2021
                      </p>
                    </div>
                    <div className="blog-top-long-content-sumary">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore e
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8">
                  <div className="blog-top-long-img">
                    <img
                      src={require('@src/assets/images/blog-img1.jpg').default}
                      alt="blog-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="blog-top-short">
              <img
                src={require('@src/assets/images/blog-img1.jpg').default}
                alt="blog-image"
              />
              <div className="blog-top-short-content">
                <div className="blog-top-short-content-box">
                  <div className="blog-top-short-content-title">
                    <span> Tưng bừng ưu đãi khủng trong tháng 8</span>
                  </div>
                  <div className="blog-top-short-content-time">
                    <span>30min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img1.jpg').default}
                  alt="blog-image"
                />
              </a>

              <div className="blog-post-content">
                <ul>
                  <li>10.02.2021</li>
                </ul>
                <h3>
                  <a href="/#">The Most Popular New Business Apps</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  turpis massa, dapibus nec libero vitae.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img2.jpg').default}
                  alt="blog-image"
                />
              </a>

              <div className="blog-post-content">
                <ul>
                  <li>10.02.2021</li>
                </ul>
                <h3>
                  <a href="/#">The Best Marketing Management Tools</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  turpis massa, dapibus nec libero vitae.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img3.jpg').default}
                  alt="blog-image"
                />
              </a>

              <div className="blog-post-content">
                <ul>
                  <li>10.02.2021</li>
                </ul>
                <h3>
                  <a href="/#">3 WooCommerce Plugins to Boost Sales</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  turpis massa, dapibus nec libero vitae.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img4.jpg').default}
                  alt="blog-image"
                />
              </a>

              <div className="blog-post-content">
                <ul>
                  <li>10.02.2021</li>
                </ul>
                <h3>
                  <a href="/#">CakeMail Review – Emails Design</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  turpis massa, dapibus nec libero vitae.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img5.jpg').default}
                  alt="blog-image"
                />
              </a>

              <div className="blog-post-content">
                <ul>
                  <li>10.02.2021</li>
                </ul>
                <h3>
                  <a href="/#">The Most Popular New Apps in 2019</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  turpis massa, dapibus nec libero vitae.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img3.jpg').default}
                  alt="blog-image"
                />
              </a>

              <div className="blog-post-content">
                <ul>
                  <li>10.02.2021</li>
                </ul>
                <h3>
                  <a href="/#">The Fastest Growing Apps in 2019</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  turpis massa, dapibus nec libero vitae.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="pagination-area">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      <i className="icofont-double-left"></i>
                    </a>
                  </li>

                  <li className="page-item active">
                    <a className="page-link" href="/#">
                      1
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="/#">
                      2
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="/#">
                      3
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="/#">
                      <i className="icofont-double-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="pencil">
        <img
          src={require('@Modules/News/assets/images/pencil.png').default}
          alt="pencil"
        />
      </div>
      <div className="shape3">
        <img src={require('@src/assets/images/star-3.png').default} alt="img" />
      </div>
      <div className="shape9">
        <img
          src={require('@src/assets/images/star-3.png').default}
          alt="shape"
        />
      </div>
    </section>
  );
};

export default BlogOne;
