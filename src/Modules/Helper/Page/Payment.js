import '../bootstrap.scss';

import React from 'react';
import Banner from '@Modules/Helper/Components/Banner';
import Payment from '@Modules/Helper/Components/Payment';

const PaymentPage = () => {
  return (
    <div className="helper__page">
      <Banner title="Chính sách thanh toán" />
      <Payment />
    </div>
  );
};

export default PaymentPage;
