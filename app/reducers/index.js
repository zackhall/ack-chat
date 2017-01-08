// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import client from './client';

const rootReducer = combineReducers({
  counter,
  client,
  routing,
});

export default rootReducer;
