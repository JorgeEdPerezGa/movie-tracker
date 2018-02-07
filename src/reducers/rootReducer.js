import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer.js';

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;
