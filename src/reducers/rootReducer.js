import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer.js';
import { userReducer } from './userReducer.js';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer
});

export default rootReducer;
