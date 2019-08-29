import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import asyncReducer from './features/reducers';
import Navigation from './pages/navigation';
import './App.css';

const store = createStore(asyncReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
