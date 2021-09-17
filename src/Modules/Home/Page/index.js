import '../bootstrap.scss';

import React from 'react';
import Features from '@Modules/Home/Components/Features';
import BuyNow from '@Modules/Home/Components/BuyNow';
import BuyCourse from '@Modules/Home/Components/BuyCourse';
import ListCourse from '@Modules/Home/Components/ListCourse';
import Experience from '@Modules/Home/Components/Experience';
import PaymentList from '@Modules/Home/Components/PaymentList';
import Navbar from '@layouts/components/navbar';
import Footer from '@layouts/components/footer';
import Spinner from '@components/spinner/fallback-spinner';

const Home = () => {
  return (
    <div className="home__page">
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-header">
            <Navbar />
          </div>
          <div className="content-body">
            <Features />
            <BuyNow />
            <BuyCourse />
            <ListCourse />
            <Experience />
            <PaymentList />
          </div>
          <div className="content-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
