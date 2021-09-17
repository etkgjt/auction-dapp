import React from 'react';

const PaymentList = () => {
  return (
    <section className="payment-list ptb-100">
      <div className="container">
        <div className="section-title payment-list-title">
          <div className="payment-title">
            <span>Các hình thức thanh toán</span>
          </div>
          <div className="bar"></div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card-item">
              <div className="card-item-img">
                <img
                  src={require('@src/assets/images/visa-card.png').default}
                  alt="blog-image"
                />
              </div>
              <div className="card-item-text">
                <span>Thẻ Quốc Tế (Tín dụng/ Ghi nợ)</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card-item">
              <div className="card-item-img">
                <img
                  src={require('@src/assets/images/atm-card.png').default}
                  alt="blog-image"
                />
              </div>
              <div className="card-item-text">
                <span>Thẻ nội địa (ATM)</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card-item">
              <div className="card-item-img">
                <img
                  src={require('@src/assets/images/vn-pay.png').default}
                  alt="blog-image"
                />
              </div>
              <div className="card-item-text">
                <span>Ví điện tử VNPay</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card-item">
              <div className="card-item-img">
                <img
                  src={require('@src/assets/images/momo.png').default}
                  alt="blog-image"
                />
              </div>
              <div className="card-item-text">
                <span>Ví điện tử MoMo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentList;
