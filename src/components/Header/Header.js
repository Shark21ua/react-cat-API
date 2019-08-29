import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../logo.jpg';

import './styles.scss';

const Header = ({ logOut }) => (
  <div className="global-header-container">
    <div className="header-container">
      <img className="logo-aim" src={logo} alt="logo" />
      <div className="logo-title">Cats API Viewer</div>
    </div>
    <div className="header-button">
      <Link to="/breed">List View</Link>
      <Link to="/grid">Grid View</Link>
      <button type="button" onClick={logOut}>Log out</button>
    </div>
  </div>
);

Header.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default Header;
