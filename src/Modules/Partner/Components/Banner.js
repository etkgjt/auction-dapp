import React, { useState } from 'react';

import { SearchIcon } from '@Modules/Partner/assets/svg';

import BreadCrumbs from '@components/Breadcrumbs';

import Tabs from './Tabs';
import PartnerList from './Tabs/PartnerList';
import PartnerPolicy from './Tabs/PartnerPolicy';

const Banner = () => {
  const [activeKey, setActiveKey] = useState();
  return (
    <section className="partner-area">
      <div className="partner-banner">
        <div className="partner-banner__bg"></div>
        <div className="partner-banner__text">
          <div className="partner-title">
            <span>ĐỐI TÁC</span>
          </div>

          <div className="bar blue"></div>
        </div>

        <div className="container partner-banner__search">
          <div className="row search-box">
            <div className="col-lg-6 col-md-9">
              <div className="search-input">
                <div className="search-icon">
                  <SearchIcon />
                </div>
                <div className="form-input">
                  <input
                    type="text"
                    className="search-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="search-box">
                <div className="search-select">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-7">
              <div className="search-submit">
                <a className="btn btn-primary btn-search">Tìm kiếm</a>
              </div>
            </div>
          </div>
        </div>

        <img
          src={
            require('@Modules/Partner/assets/images/partner-banner.png').default
          }
          alt="Partner"
        />
      </div>

      <div className="container ptb-100 partner-list">
        <div className="partner-header">
          <BreadCrumbs
            breadCrumbs={[
              {
                to: '/',
                title: 'Trang chủ',
              },
              {
                title: 'Đối tác',
              },
              {
                title: 'Chính sách đối tác',
              },
            ]}
            rightComponent={<a className="btn btn-blue">Đăng ký đối tác</a>}
          />
        </div>
        <Tabs
          tabs={[
            { key: 'partnerList', title: 'Danh sách đối tác' },
            { key: 'partnerPolicy', title: 'Chính sách đối tác' },
          ]}
          defaultActiveKey="partnerList"
          onChange={setActiveKey}
        >
          {activeKey === 'partnerList' ? <PartnerList /> : <PartnerPolicy />}
        </Tabs>
      </div>
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
          src={require('@src/assets/images/star-4.png').default}
          alt="shape"
        />
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

export default Banner;
