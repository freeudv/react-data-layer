import {combineReducers} from 'redux';
import games from './games/reducer';
import login from './login/reducer';

const rootReducer = combineReducers({
  games,
  login
});

export default rootReducer;
