import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import example from './example';
import offices from './offices';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ example, offices, router });

  return rootReducer;
}

export default createRootReducer;
