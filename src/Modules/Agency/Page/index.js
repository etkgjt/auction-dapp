import React from 'react';
import Navbar from '@components/Layouts/Navbar';
import Footer from '@components/Layouts/Footer';
import Banner from '@components/Agency/Banner';
import Partner from '@components/Agency/Partner';
import Features from '@components/Agency/Features';
import Overview from '@components/Agency/Overview';
import SaasTools from '@components/Agency/SaasTools';
import Works from '@components/Agency/Works';
import Pricing from '@components/Agency/Pricing';
import Download from '@components/Agency/Download';
import CtaCard from '@components/Agency/CtaCard';
import GetStarted from '@components/Agency/GetStarted';
import Platform from '@components/Agency/Platform';

const Agency = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Partner />
      <Features />
      <Overview />
      <SaasTools />
      <Works />
      <Pricing />
      <Download />
      <CtaCard />
      <GetStarted />
      <Platform />
      <Footer />
    </React.Fragment>
  );
};

export default Agency;
