import React from 'react';
import PropTypes from 'prop-types';

const BreedInfoHeader = ({ name, flag }) => (
  <div className="breed-preview-container">
    <div className="breed-preview-name">
      {name}
    </div>
    <div>
      <img className="breed-preview-flag" src={flag} alt="flag" />
    </div>
  </div>
);

BreedInfoHeader.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired
};

export default BreedInfoHeader;
