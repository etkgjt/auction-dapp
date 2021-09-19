import '../bootstrap.scss';

import React, { useState, useEffect, Fragment } from 'react';

/*Hooks*/
import { useTranslation } from 'react-i18next';

/*Components*/
import Banner from '@Modules/Support/Components/Banner';
import Student from '@Modules/Support/Components/GuideStudents';

/*Api*/

const CreateEdit = ({ match: { params } }) => {
  const { t } = useTranslation();

  const renderChildPage = () => {
    switch (params.id) {
      case 'student':
        return <Student />;
      default:
        return <Student />;
    }
  };

  return (
    <div className="support__page">
      <Banner />
      {renderChildPage()}
      <div className="shape1">
        <img src={require('@src/assets/images/star-1.png').default} alt="img" />
      </div>
      <div className="shape2">
        <img src={require('@src/assets/images/star-2.png').default} alt="img" />
      </div>
      <div className="shape3">
        <img src={require('@src/assets/images/star-3.png').default} alt="img" />
      </div>
      <div className="shape6">
        <img src={require('@src/assets/images/star-1.png').default} alt="img" />
      </div>
      <div className="shape8 rotateme">
        <img
          src={require('@src/assets/images/star-4.png').default}
          alt="shape"
        />
      </div>
      <div className="shape9">
        <img
          src={require('@src/assets/images/star-3.png').default}
          alt="shape"
        />
      </div>
    </div>
  );
};

export default CreateEdit;
