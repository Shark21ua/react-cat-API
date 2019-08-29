import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { List, Icon, Spin } from 'antd';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash/fp';
import { checkAuth, logOut } from '../../features/auth/operations';
import { fetchCatsList } from '../../features/catBreeds/operations';
import { Header, RedirectToLogin } from '../../components';
import BreedItem from './BreedItem';
import BreedInfo from './BreedInfo';
import useAuthChecker from '../../hooks/useAuthChecker';
import './styles.scss';

const spinner = <Icon type="smile" style={{ fontSize: 32 }} spin />;

const Page = (props) => {
  const { breedsList, fetching, match, isLogged, location, authFetching, checkAuthentication, onLogOut } = props;
  const isUnauthorized = useAuthChecker(isLogged, checkAuthentication, authFetching);

  useEffect(() => {
    if (isEmpty(breedsList) && !fetching && isLogged) props.fetchCatsList();
  });

  if (isUnauthorized) return <RedirectToLogin location={location} />;

  return (
    <Spin indicator={spinner} spinning={fetching}>
      <Header logOut={onLogOut} />
      <div className="layout-cats-container">
        <div className="content-menu">
          <div className="menu-main-part">
            <List
              header={<h1>Сat breeds</h1>}
              bordered
              dataSource={breedsList}
              renderItem={cat => <BreedItem cat={cat} />}
            />
          </div>
          <div className="menu-sub-part">
            <Route
              path={`${match.path}/:breedId`}
              render={breedProps => <BreedInfo breeds={breedsList} breedId={breedProps.match.params.breedId} />}
            />
            <Route
              exact
              path={match.path}
              component={() => <div className="select-your-breed-title">Please select a breed.</div>}
            />
          </div>
        </div>
      </div>
    </Spin>
  );
};

Page.propTypes = {
  fetchCatsList: PropTypes.func.isRequired,
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
  pagination: catBreeds.pagination,
  isLogged: auth.isLogged,
  authFetching: auth.isFetching
});

const mapDispatchToProps = {
  fetchCatsList,
  checkAuthentication: checkAuth,
  onLogOut: logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
