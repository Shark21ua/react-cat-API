import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const ConnectedInput = ({ field, ...rest }) => (<Input {...field} {...rest} />);

ConnectedInput.propTypes = {
  field: PropTypes.object.isRequired
};

export default ConnectedInput;
