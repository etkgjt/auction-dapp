import React from 'react';

import { SearchIcon } from '@Modules/Support/assets/svg';

import BreadCrumbs from '@components/Breadcrumbs';

const Banner = () => {
  return (
    <section className="container support-area">
      <div className="support-banner-wrapper">
        <div className="support-banner">
          <div className="support-title">
            <span>Hỗ trợ</span>
          </div>

          <div className="bar"></div>
          <div className="search-box container">
            <div className="search-input">
              <div className="form-input">
                <input
                  type="text"
                  className="search-control"
                  placeholder="Search"
                />
              </div>
              <a className="btn btn-primary">
                <div className="search-button">
                  <div>
                    <span>Tìm kiếm &nbsp;</span>
                  </div>
                  <div>
                    <SearchIcon color="#FFFFFF" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="bear-creative">
            <img src={require('@src/assets/svg/bear.svg').default} alt="bear" />
          </div>
        </div>
        <div className="container">
          <BreadCrumbs
            breadCrumbs={[
              {
                to: '/',
                title: 'Trang chủ',
              },
              {
                title: 'Hổ trợ',
              },
            ]}
            rightComponent={<a className="btn btn-blue">Gửi yêu cầu hổ trợ</a>}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
