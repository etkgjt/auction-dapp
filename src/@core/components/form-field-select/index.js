import './index.scss';

import React from 'react';

import PropTypes from 'prop-types';
import SelectData from './form-field-select';
import SelectDynamicData from './form-field-select-dynamic';

const FormFieldSelect = ({ isDynamic = false, ...rest }) => {
  return isDynamic ? <SelectDynamicData {...rest} /> : <SelectData {...rest} />;
};

FormFieldSelect.propTypes = {
  isDynamic: PropTypes.bool,
};

FormFieldSelect.defaultProps = {
  isDynamic: false,
};

export default FormFieldSelect;
