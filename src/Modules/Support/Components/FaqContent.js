import React from 'react';

const Banner = () => {
  return (
    <section className="container faq-area">
      <div className="instruct-wrapper">
        <div className="intruct-box">
          <a href="/#" className="instruct-item">
            <span>Hướng dẫn học viên</span>
          </a>
        </div>
        <div className="intruct-box">
          <a href="/#" className="instruct-item">
            <span>Hướng dẫn đối tác</span>
          </a>
        </div>
        <div className="intruct-box">
          <a href="/#" className="instruct-item">
            <span>Hướng dẫn học Siêu Trí Nhớ Học Đường</span>
          </a>
        </div>
      </div>
      <div className="faq-wrapper ptb-100">
        <div className="faq-title">
          <span>Câu hỏi thường gặp</span>
        </div>
        <div className="bar" />
        <div className="row"></div>
      </div>
    </section>
  );
};

export default Banner;
