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
import ExcellenceStudent from '@Modules/Introduce/Components/ExcellenceStudent';
import Certification from '@Modules/Introduce/Components/Certification';
import Partners from '@Modules/Introduce/Components/Partners';

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
      <ExcellenceStudent />
      <Certification />
      <Partners />
    </div>
  );
};
export default Introduce;
