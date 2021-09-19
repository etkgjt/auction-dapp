import '../bootstrap.scss';

import React from 'react';
import Banner from '@Modules/Home/Components/Banner';
import Features from '@Modules/Home/Components/Features';
import BuyNow from '@Modules/Home/Components/BuyNow';
import BuyCourse from '@Modules/Home/Components/BuyCourse';
import ListCourse from '@Modules/Home/Components/ListCourse';
import Experience from '@Modules/Home/Components/Experience';
import PaymentList from '@Modules/Home/Components/PaymentList';

const Home = () => {
  return (
    <div className="home__page">
      <Banner />
      <Features />
      <BuyNow />
      <BuyCourse />
      <ListCourse />
      <Experience />
      <PaymentList />
    </div>
  );
};
export default Home;
