import '../bootstrap.scss';

import React from 'react';
import Banner from '@Modules/Helper/Components/Banner';
import Private from '@Modules/Helper/Components/Private';
import StarAnimate from '@Modules/Helper/Components/StarAnimate';

const PrivatePage = () => {
  return (
    <div className="helper__page">
      <Banner title="Chính sách bảo mật" />
      <Private />
      <StarAnimate />
    </div>
  );
};

export default PrivatePage;
