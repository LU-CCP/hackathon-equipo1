import { all } from 'redux-saga/effects';

import example from './example';
import offices from './offices';

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...example, ...offices]);
  } catch (err) {
    throw err;
  }
}

export default root;
