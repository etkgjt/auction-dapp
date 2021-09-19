import React, { useEffect, useState } from 'react';

const TabsLevel = ({ tabs = [], defaultActiveKey, onChange, children }) => {
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
    <section className="partner-level-tab-area">
      <div className="container">
        <div className="header-tab">
          <div className="tabs-level">
            {tabs.map((item) => (
              <a
                onClick={() => onActive(item.key)}
                key={item.key}
                className={`tab-item ${active === item.key ? 'active' : ''}`}
              >
                {item.icon && <div className="tab-ico">{item.icon}</div>}

                <div className="tab-label">
                  <span>{item.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default TabsLevel;
