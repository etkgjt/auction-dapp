import '../bootstrap.scss';

import React from 'react';
import Banner from '@Modules/Helper/Components/Banner';
import Payment from '@Modules/Helper/Components/Payment';
import StarAnimate from '@Modules/Helper/Components/StarAnimate';

const PaymentPage = () => {
  return (
    <div className="helper__page">
      <Banner title="Chính sách thanh toán" />
      <Payment />
      <StarAnimate />
    </div>
  );
};

export default PaymentPage;
