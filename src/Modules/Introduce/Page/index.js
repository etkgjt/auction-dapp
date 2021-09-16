import '../bootstrap.scss';

import React from 'react';
import Banner from '@Modules/Introduce/Components/Banner';
import Features from '@components/Saas/Features';
import Overview from '@components/Saas/Overview';
import JoinCard from '@components/Saas/JoinCard';
import CtaCard from '@components/Saas/CtaCard';
import SaasTools from '@components/Saas/SaasTools';
import Funfact from '@components/Saas/Funfact';
import WorkProcess from '@components/Saas/WorkProcess';
import PricingPlan from '@components/Saas/PricingPlan';
import GetStarted from '@components/Saas/GetStarted';
import Feedback from '@components/Saas/Feedback';
import Partner from '@components/Saas/Partner';
const Introduce = () => {
  return (
    <div className="introduce__page">
      <Banner />
      <Features />
      <Overview />
      <JoinCard />
      <CtaCard />
      <SaasTools />
      <Funfact />
      <WorkProcess />
      <PricingPlan />
      <GetStarted />
      <Feedback />
      <Partner />
    </div>
  );
};
export default Introduce;
