import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash/fp';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { getOneBreed } from '../../features/catBreeds/operations';
import BreedInfoHeader from './BreedInfoHeader';

const BreedInfo = ({ breed, breedId, getOneBreedById, fetching }) => {
  useEffect(() => {
    if (!fetching && breed.id !== breedId) getOneBreedById(breedId);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [breedId]);

  return (
    isEmpty(breed)
      ? null
      : (
        <div className="single-breed-viewer-place">
          <div className="breed-info-container">
            <BreedInfoHeader
              name={breed.name}
              flag={breed.flag}
            />
            <div className="sub-image-container">
              <Slider>
                {breed.imageList.map(image => (
                  <div className="image-slider-container" key={image}>
                    <img src={image} alt="cat" key={image} />
                  </div>
                ))}
              </Slider>
            </div>
            <div>Description</div>
            <div className="breed-preview-description">
              {breed.description}
            </div>
          </div>
        </div>
      )
  );
};

BreedInfo.propTypes = {
  breed: PropTypes.object.isRequired,
  getOneBreedById: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  breedId: PropTypes.string.isRequired
};

const mapStateToProps = ({ catBreeds }) => ({
  breed: catBreeds.currentBreed,
  fetching: catBreeds.isSingleItemFetching
});

const mapDispatchToProps = {
  getOneBreedById: getOneBreed
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedInfo);
