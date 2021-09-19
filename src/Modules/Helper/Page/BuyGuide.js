import '../bootstrap.scss';

import React from 'react';
import Banner from '@Modules/Helper/Components/Banner';
import BuyGuide from '@Modules/Helper/Components/BuyGuide';
import StarAnimate from '@Modules/Helper/Components/StarAnimate';

const BuyGuidePage = () => {
  return (
    <div className="helper__page">
      <Banner title="Hướng dẫn mua hàng" />
      <BuyGuide />
      <StarAnimate />
    </div>
  );
};

export default BuyGuidePage;
