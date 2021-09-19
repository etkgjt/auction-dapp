import React, { useState, useEffect } from 'react';

import TabsLevel from '../TabsLevel';
import DiamondTab from '../TabsLevel/DiamondTab';
import FirstTab from '../TabsLevel/FirstTab';
import OtherTab from '../TabsLevel/OtherTab';

const ParnerList = () => {
  const [activeKey, setActiveKey] = useState('diamond');

  const renderTab = () => {
    switch (activeKey) {
      case 'first':
        return <FirstTab />;
      case 'other':
        return <OtherTab />;
      default:
        return <DiamondTab />;
    }
  };

  return (
    <section className="partner-area">
      <TabsLevel
        tabs={[
          {
            key: 'diamond',
            title: 'Đối tác kim cương',
            icon: (
              <img
                src={
                  require('@Modules/Introduce/assets/images/diamond.png')
                    .default
                }
                alt="partner-img"
              />
            ),
          },
          {
            key: 'first',
            title: 'Đối tác cấp 1',
          },
          {
            key: 'other',
            title: 'Đối tác khác',
          },
        ]}
        defaultActiveKey="diamond"
        onChange={setActiveKey}
      >
        {renderTab()}
      </TabsLevel>
    </section>
  );
};

export default ParnerList;
