import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GridElement = ({ element }) => {
  const { name, previewUrl, id } = element;

  return (
    <Link to={`/grid/${id}`}>
      <div className="element-container">
        <img
          className="breed-preview-image"
          src={previewUrl}
          alt="element-preview"
        />
        <div className="breed-preview-name">{name}</div>
      </div>
    </Link>
  );
};

GridElement.propTypes = {
  element: PropTypes.object.isRequired
};

export default GridElement;
