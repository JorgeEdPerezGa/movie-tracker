import { moviesReducer } from './moviesReducer';
import * as actions from '../actions';

describe('moviesReducer', () => {

  let movie1;
  let movie2;
  let updatedMovie;

  beforeAll(() => {
    movie1 = {
      backdrop_path: "/abc.jpg",
      favorite: false,
      movie_id: 354912,
      overview: "Despite his family’s...",
      poster_path: "/wxyz.jpg",
      release_date: "2017-10-27",
      title: "Coco",
      vote_average: 7.7
    };
    movie2 = {
      backdrop_path: "/lmnop.jpg",
      favorite: false,
      movie_id: 284053,
      overview: "Thor is imprisoned...",
      poster_path: "/123.jpg",
      release_date: "2017-10-27",
      title: "Thor: Ragnoroc",
      vote_average: 7.4
    };

    updatedMovie  = { ...movie2, favorite: true };
  });

  it('should return the default state', () => {
    const expected = [];
    expect(moviesReducer(undefined, {})).toEqual(expected);
  });

  it('ADD_MOVIES should return the state with an array of movies added', () => {
    const action = actions.addMovies([movie1, movie2]);
    const expected = [movie1, movie2];
    expect(moviesReducer(undefined, action)).toEqual(expected);
  });

  it('UPDATE_MOVIES should return the state with an array of updated movies', () => {
    const state = [movie1, movie2];
    const action = actions.updateMovies(updatedMovie);
    const expected = [movie1, updatedMovie];
    expect(moviesReducer(state, action)).toEqual(expected);
  });

});
