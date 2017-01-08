// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import ClientPage from './containers/ClientPage';
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ClientPage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
