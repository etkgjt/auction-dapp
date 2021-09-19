import React, { useEffect, useState } from 'react';

import BreadCrumbs from '@components/Breadcrumbs';

const Tabs = ({ tabs = [], defaultActiveKey, onChange, children }) => {
  const [active, setActive] = useState();

  useEffect(() => {
    setActive(defaultActiveKey);
  }, [defaultActiveKey]);

  const onActive = (key) => {
    setActive(key);
    if (typeof onChange) {
      onChange(key);
    }
  };

  return (
    <section className="partner-tab-area">
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
        <div className="tabs">
          {tabs.map((item) => (
            <a
              onClick={() => onActive(item.key)}
              key={item.key}
              className={`tab ${active === item.key ? 'active' : ''}`}
            >
              <span>{item.title}</span>
            </a>
          ))}
        </div>
        <div className="partner-list-title">
          <span>
            {tabs &&
              tabs.length &&
              tabs.find((item) => item.key === active)?.title}
          </span>
        </div>
        <div className="bar"></div>
        {children}
      </div>
    </section>
  );
};

export default Tabs;
