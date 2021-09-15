import '@styles/react/libs/flatpickr/flatpickr.scss';

import React from 'react';

import DatePicker from './date-picker';
import DateRange from './date-range';

const FormDateField = ({ type, ...rest }) => {
  switch (type) {
    case 'range':
      return <DateRange {...rest} />;
    default:
      return <DatePicker {...rest} />;
  }
};

FormDateField.defaultProps = {
  type: 'date',
};

export default FormDateField;
