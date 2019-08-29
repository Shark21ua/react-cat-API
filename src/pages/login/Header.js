import React from 'react';
import logo from '../../logo.jpg';

const Header = () => (
  <div className="header-container">
    <img className="logo-aim" src={logo} alt="logo" />
    <div className="logo-title">Cats API Viewer</div>
  </div>
);

export default Header;
