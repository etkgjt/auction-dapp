import '../bootstrap.scss';

import React from 'react';
import Banner from '@Modules/Introduce/Components/Banner';
import BoxesBenefit from '@Modules/Introduce/Components/BoxesBenefit';
import CourseElite from '@Modules/Introduce/Components/CourseElite';
import Advisory from '@Modules/Introduce/Components/Advisory';
import MainAuthor from '@Modules/Introduce/Components/MainAuthor';
import MainVideo from '@Modules/Introduce/Components/MainVideo';
import TeacherList from '@Modules/Introduce/Components/TeacherList';
import ButtonFixed from '@components/ButtonFixed';
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
      <BoxesBenefit />
      <CourseElite />
      <Advisory />
      <MainAuthor />
      <MainVideo />
      <TeacherList />
      <ButtonFixed />
      {/* <JoinCard />
      <CtaCard />
      <SaasTools />
      <Funfact />
      <WorkProcess />
      <PricingPlan />
      <GetStarted />
      <Feedback />
      <Partner /> */}
    </div>
  );
};
export default Introduce;
