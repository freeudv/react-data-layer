import {ADD_GAME, STORE_GAMES, START_LOADING, RECORD_ERROR} from './actions';
import {combineReducers} from 'redux';

const initialData = [];

export const games = (state = initialData, action) => {
  switch (action.type) {
    case ADD_GAME:
      return [action.game, ...state];
    case STORE_GAMES:
      return action.games;
    default:
      return state;
  }
};

export const loading = (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STORE_GAMES:
    case RECORD_ERROR:
      return false;
    default:
      return state;
  }
};

export function error(state = false, action) {
  switch (action.type) {
    case RECORD_ERROR:
      return true;
    case START_LOADING:
    case STORE_GAMES:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  games,
  loading,
  error
});
