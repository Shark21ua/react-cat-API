import React from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CatItem = ({ cat }) => (
  <Link to={`/breed/${cat.id}`}>
    <List.Item>{cat.name}</List.Item>
  </Link>
);

CatItem.propTypes = {
  cat: PropTypes.any.isRequired,
};

export default CatItem;
