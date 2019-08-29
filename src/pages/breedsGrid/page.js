import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { isEmpty } from 'lodash/fp';
import { Icon, Spin } from 'antd';
import { checkAuth, logOut } from '../../features/auth/operations';
import { fetchCatsList } from '../../features/catBreeds/operations';
import { Header, RedirectToLogin } from '../../components';
import useAuthChecker from '../../hooks/useAuthChecker';
import GridElement from './GridElement';
import BreedInfo from './BreedInfo';
import './styles.scss';

const spinner = <Icon type="smile" style={{ fontSize: 32 }} spin />;

const BreedsGrid = (props) => {
  const { breedsList, getCatsList, fetching, isLogged, location, onLogOut, match, checkAuthentication, authFetching } = props;
  const isUnauthorized = useAuthChecker(isLogged, checkAuthentication, authFetching);

  useEffect(() => {
    if (isEmpty(breedsList) && !fetching) getCatsList();
  }, [breedsList, fetching, getCatsList]);

  if (isUnauthorized) return <RedirectToLogin location={location} />;

  return (
    <Spin indicator={spinner} spinning={fetching}>
      <Header logOut={onLogOut} />
      <div className="main-page-container">
        <div className="breed-submenu-container">
          <Route
            path={`${match.path}/:breedId`}
            render={breedProps => <BreedInfo breedId={breedProps.match.params.breedId} />}
          />
        </div>
        <div className="grid-container">
          {
            isEmpty(breedsList)
              ? null
              : breedsList.map(it => (<GridElement key={it.id} element={it} />))
          }
        </div>
      </div>
    </Spin>
  );
};

BreedsGrid.propTypes = {
  getCatsList: PropTypes.func.isRequired,
  checkAuthentication: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
  breedsList: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  authFetching: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired
};

const mapStateToProps = ({ catBreeds, auth }) => ({
  breedsList: catBreeds.catsListData,
  fetching: catBreeds.isFetching,
  error: catBreeds.isError,
  isLogged: auth.isLogged,
  authFetching: auth.isFetching
});

const mapDispatchToProps = {
  getCatsList: fetchCatsList,
  checkAuthentication: checkAuth,
  onLogOut: logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedsGrid);
