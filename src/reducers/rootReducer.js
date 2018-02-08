import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer.js';
import { userReducer } from './userReducer.js';
import { favoritesReducer } from './favoritesReducer.js';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  favorites: favoritesReducer
});

export default rootReducer;
