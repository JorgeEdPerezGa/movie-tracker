import * as actions from './index';

describe('actions', () => {

  describe('addUser', () => {
    it('should return a type of ADD_USER, with a single user', () => {
    const user = {
      email: "fake@123.com",
      id: 2,
      name: "ted",
      password: "pw123"
    }

    const expected = {
      type: "ADD_USER",
      user
    }

    expect(actions.addUser(user)).toEqual(expected)
    })
  })

  describe('logoutUser', () => {
    it('should return a type of LOGOUT, with a single user', () => {
    const user = {
      email: "fake@123.com",
      id: 2,
      name: "ted",
      password: "pw123"
    }

    const expected = {
      type: "LOGOUT_USER",
      user
    }

    expect(actions.logoutUser(user)).toEqual(expected)
    })
  })

  describe('addMovies', () => {
    it('should return a type of ADD_MOVIES, with an array of movies', () => {
    const movies=[
        {
          title: "Coco",
          movie_id: 354912
        },
        {
          title: "Thor: Ragnarok",
          movie_id: 284053
        }
      ]
    const expected = {
      type: "ADD_MOVIES",
      movies
    }
    expect(actions.addMovies(movies)).toEqual(expected)
    })
  })

  describe('updateMovies', () => {
    it('should return a type of UPDATE_MOVIES, with a single movie', () => {
      const movie = {
        title: "Coco",
        movie_id: 354912
      }
      const expected = {
        type: "UPDATE_MOVIES",
        movie
      }
    expect(actions.updateMovies(movie)).toEqual(expected)
    })
  })

  describe('addFavorite', () => {
    it('should return a type of ADD_FAVORITE, with a single movie', () => { 
      const movie = {
        title: "Coco",
        movie_id: 354912
      }
      const expected = {
        type: "ADD_FAVORITE",
        movie
      }
      expect(actions.addFavorite(movie)).toEqual(expected)
    })
  })

  describe('removeFavorite', () => {
    it('should return a type of REMOVE_FAVORITE, with a single movie', () => { 
      const movie = {
        title: "Coco",
        movie_id: 354912
      }
      const expected = {
        type: "REMOVE_FAVORITE",
        movie
      }
      expect(actions.removeFavorite(movie)).toEqual(expected)
    })
  })

  describe('addAllFavorites', () => {
    it('should return a type of ADD_ALL_FAVORITES, with an array of movies', () => {   
      const movies=[
        {
          title: "Coco",
          movie_id: 354912
        },
        {
          title: "Thor: Ragnarok",
          movie_id: 284053
        }
      ]
      const expected = {
        type: "ADD_ALL_FAVORITES",
        movies
      }
      expect(actions.addAllFavorites(movies)).toEqual(expected)
    })
  })

  describe('clearFavorites', () => {
    it('should return a type of CLEAR_FAVORITES', () => {
      const expected = {
        type: 'CLEAR_FAVORITES'
      }

      expect(actions.clearFavorites()).toEqual(expected);
    })
  })

})