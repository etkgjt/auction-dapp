import '../bootstrap.scss';

import React from 'react';
import Banner from '@Modules/Helper/Components/Banner';
import Return from '@Modules/Helper/Components/Return';
import StarAnimate from '@Modules/Helper/Components/StarAnimate';

const ReturnPage = () => {
  return (
    <div className="helper__page">
      <Banner title="Chính sách đổi trả, hoàn tiền" />
      <Return />
      <StarAnimate />
    </div>
  );
};

export default ReturnPage;
