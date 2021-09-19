import '../bootstrap.scss';

import React from 'react';
import Banner from '@Modules/Helper/Components/Banner';
import Complain from '@Modules/Helper/Components/Complain';
import StarAnimate from '@Modules/Helper/Components/StarAnimate';

const ComplainPage = () => {
  return (
    <div className="helper__page">
      <Banner title="Chính sách khiếu nại" />
      <Complain />
      <StarAnimate />
    </div>
  );
};

export default ComplainPage;
