import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RedirectToLogin = ({ location }) => (
  <Redirect to={{
    pathname: '/login',
    state: { from: location }
  }}
  />
);

RedirectToLogin.propTypes = {
  location: PropTypes.object.isRequired
};

export default RedirectToLogin;
