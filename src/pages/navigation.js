import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import CatsMain from './breedsList/page';
import Login from './login/page';
import BreedsGrid from './breedsGrid/page';

const Navigation = () => (
  <Router>
    <Route path="/login" component={Login} />
    <Route path="/breed" component={CatsMain} />
    <Route path="/grid" component={BreedsGrid} />
    <Route exact path="/" render={() => (<Redirect to="/breed" />)} />
  </Router>
);

export default Navigation;
