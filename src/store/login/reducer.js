import {LOG_IN, LOG_OUT} from './actions';
import {combineReducers} from 'redux';

function loggedIn(state = false, action) {
  switch (action.type) {
    case LOG_IN:
      return true;
    case LOG_OUT:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  loggedIn
});
