import { favoritesReducer } from './favoritesReducer';
import * as actions from '../actions';

describe('favoritesReducer', () => {

  let movie1
  let movie2

  beforeAll(() => {
    movie1 = {
      backdrop_path: "/abc.jpg",
      favorite: true,
      movie_id: 354912, 
      overview: "Despite his family’s...",
      poster_path: "/wxyz.jpg",
      release_date: "2017-10-27",
      title: "Coco",
      vote_average: 7.7
    }
    movie2 = {
      backdrop_path: "/lmnop.jpg",
      favorite: true,
      movie_id: 284053, 
      overview: "Thor is imprisoned...",
      poster_path: "/123.jpg",
      release_date: "2017-10-27",
      title: "Thor: Ragnoroc",
      vote_average: 7.4
    }
  })

  it('should return the default state', () => {
    const expected = []
    expect(favoritesReducer(undefined, {})).toEqual(expected)
  })

  it('ADD_FAVORITE should return the state with an added Favorite', () => {
    const action = actions.addFavorite(movie1)
    const expected = [ movie1 ]
    expect(favoritesReducer(undefined, action)).toEqual(expected)
  })

  it('REMOVE_FAVORITE should return the state with a Favorite removed', () => {
    const action = actions.removeFavorite(movie1)
    const state = [ movie1, movie2 ]
    const expected = [ movie2 ]
    expect(favoritesReducer(state, action)).toEqual(expected)
  })

  it('ADD_ALL_FAVORITES should return the state with a an array of favorites added', () => {
    const action = actions.addAllFavorites([movie1, movie2])
    const expected = [ movie1, movie2 ]
    expect(favoritesReducer(undefined, action)).toEqual(expected)
  })

  it('CLEAR_FAVORITES should return the state with an empty array of favorites', () => {
    const action = actions.clearFavorites();
    const state = [movie1, movie2];
    const expected = [];

    expect(favoritesReducer(state, action)).toEqual(expected);
  })

})