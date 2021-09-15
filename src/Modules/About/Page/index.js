import '../bootstrap.scss';

import React, { useState, useEffect, Fragment } from 'react';

/*Hooks*/
import { useTranslation } from 'react-i18next';

/*Components*/
import AboutOne from '../Components/AboutOne';
import AboutTwo from '../Components/AboutTwo';

const translateKey = 'About';

const News = ({ match: { params } }) => {
  const { t } = useTranslation();

  switch (params.id) {
    case 'two':
      return <AboutTwo />;
    default:
      return <AboutOne />;
  }
};

export default News;
