import React, { useState, useMemo } from 'react';

import { SearchIcon } from '@Modules/Partner/assets/svg';

import BreadCrumbs from '@components/Breadcrumbs';

import Tabs from './Tabs';
import PartnerList from './Tabs/PartnerList';
import PartnerPolicy from './Tabs/PartnerPolicy';

const Banner = () => {
  const [activeKey, setActiveKey] = useState('partnerList');

  const tabs = useMemo(
    () => [
      { key: 'partnerList', title: 'Danh sách đối tác' },
      { key: 'partnerPolicy', title: 'Chính sách đối tác' },
    ],
    []
  );

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
            <div className="col-lg-4 col-md-10">
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
            <div className="col-lg-4 col-md-7">
              <div className="search-box">
                <div className="search-select">
                  <select className="form-select" aria-label="Chọn">
                    <option selected>Tỉnh/Thành phố</option>
                    <option value="1">TPHCM</option>
                    <option value="2">Hà Nội</option>
                    <option value="3">Đà Nẵng</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="search-box">
                <div className="search-select">
                  <select className="form-select" aria-label="Chọn">
                    <option selected>Quận/Huyện</option>
                    <option value="1">TPHCM</option>
                    <option value="2">Hà Nội</option>
                    <option value="3">Đà Nẵng</option>
                  </select>
                </div>
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
                title: tabs.find((item) => item.key === activeKey)?.title,
              },
            ]}
            rightComponent={<a className="btn btn-blue">Đăng ký đối tác</a>}
          />
        </div>
        <Tabs
          tabs={tabs}
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
