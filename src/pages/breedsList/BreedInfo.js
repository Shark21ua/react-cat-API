import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { PropTypes } from 'prop-types';
import { find, isEmpty } from 'lodash/fp';

const BreedInfo = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { breeds, breedId } = props;

  const breed = find(['id', breedId], breeds);

  useEffect(() => {
    setLoaded(false);
  }, [breed]);

  return isEmpty(breed)
    ? null
    : (
      <Spin spinning={!loaded}>
        <div className="description-breed-container">
          <div className="sub-image-container">
            <img
              style={loaded ? {} : { display: 'none' }}
              src={breed.previewUrl}
              alt="cat"
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div className="content-container">
            <p>{breed.name}</p>
            Description:
            <p>{breed.description}</p>
          </div>
        </div>
      </Spin>
    );
};

BreedInfo.propTypes = {
  breeds: PropTypes.array.isRequired,
  breedId: PropTypes.string.isRequired,
};

export default BreedInfo;
