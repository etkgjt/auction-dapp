import '../bootstrap.scss';

import React, { useState, useEffect, Fragment } from 'react';

/*Hooks*/
import { useTranslation } from 'react-i18next';

/*Components*/
import { Breadcrumbs, Spin } from '@components';
import BlogOne from '../Components/BlogOne';
import BlogTwo from '../Components/BlogTwo';

const translateKey = 'News';

const News = ({ match: { params } }) => {
  const { t } = useTranslation();

  switch (params.id) {
    case 'two':
      return <BlogTwo />;
    default:
      return <BlogOne />;
  }
};

export default News;
