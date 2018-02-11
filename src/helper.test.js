import * as helper from './helper';
import key from './api/key.js';

describe('helper', () => {
 
  describe('initialFetch', () => {

    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          movies: 'array of movies'
        })
      }));
    });

    it('should call fetch with expected params', () => {
      const expectedParams = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;

      expect(window.fetch).not.toHaveBeenCalled();

      helper.initialFetch();

      expect(window.fetch).toHaveBeenCalledWith(expectedParams);
    });

    it('should return an object if status code is okay', () => {
      const response = helper.initialFetch();
      const expected = {movies: 'array of movies'};

      expect(response).resolves.toEqual(expected);
    });

    it('should throw an error if status code is not okay', () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.initialFetch();
      const expected = Error('could not fetch movies');

      expect(response).rejects.toEqual(expected);
    });
  });

  describe.skip('cleanMovies', () => {

    it('should return an array of clean objects', () => {

    });
  });

  describe.skip('clean favorites', () => {
    it('should return an array and assign a favorite value of true or false on each element', () => {

    });
  });

  describe('register user', () => {
    let user;

    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          user: 'user'
        })
      }));

      user = {
        email: "fake@123.com",
        id: 2,
        name: "ted",
        password: "pw123"
      };
    });


    it('should call fetch with expected params', () => {
      const expectedBody = {
        "body": JSON.stringify(user),
        "headers": {"Content-Type": "application/json"},
        "method": "POST"
      };

      const expectedUrl = '/api/users/new';

      expect(window.fetch).not.toHaveBeenCalled();

      helper.registerUser(user);

      expect(window.fetch).toHaveBeenCalledWith(expectedUrl, expectedBody);
    });

    it('should return an object if status code is okay', () => {
      const response = helper.registerUser(user);
      const expected = {user: 'user'};

      expect(response).resolves.toEqual(expected);
    });

    it('should throw an error if status code is not okay', () => {
       window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.registerUser(user);

      expect(response).resolves.toEqual(false);
    });
  });

  describe('post favorite', () => {
    let movie;
    let user;

    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          favorite: 'favorite'
        })
      }));

      movie = {
        'movie_id': '354912',
        'user_id': '1',
        'title': "Coco",
        'poster_path': "/b.jpg",
        'release_date': "2017-10-27",
        'vote_average': '7.7',
        'overview': "Despite his family’s baffling generations-old ban on music...",
        'backdrop_path': "/a.jpg"
      };

      user = {
        email: "fake@123.com",
        id: '1',
        name: "ted",
        password: "pw123"
      };
    });

    it('should call fetch with expected params', () => {
      const expectedUrl = 'api/users/favorites/new';
      const expectedBody = {
        'body': JSON.stringify(movie),
        'headers': {'Content-Type':
        'application/json'},
        'method': 'POST'
      };

      expect(window.fetch).not.toHaveBeenCalled();

      helper.postFavorite(movie, user);

      expect(window.fetch).toHaveBeenCalledWith(expectedUrl, expectedBody);
    });

    it('should return an object if status code is okay', () => {
      const response = helper.registerUser(user);
      const expected = {favorite: 'favorite'};

      expect(response).resolves.toEqual(expected);
    });

    it('should throw an error if status code is not okay', () => {

    });
  });

  describe('retrieve favorite', () => {
    let movie;
    let user;

    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          favorite: 'favorite'
        })
      }));

      movie = {
        'movie_id': '354912',
        'user_id': '1',
        'title': "Coco",
        'poster_path': "/b.jpg",
        'release_date': "2017-10-27",
        'vote_average': '7.7',
        'overview': "Despite his family’s baffling generations-old ban on music...",
        'backdrop_path': "/a.jpg"
      };

      user = {
        email: "fake@123.com",
        id: '1',
        name: "ted",
        password: "pw123"
      };
    });

    it('should call fetch with expected params', () => {
      const expectedUrl = `api/users/${user.id}/favorites/`;

      expect(window.fetch).not.toHaveBeenCalled();

      helper.retrieveFavorites(user.id);

      expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
    });

    it('should return an object if status code is okay', () => {
      const response = helper.registerUser(user);
      const expected = {favorite: 'favorite'};

      expect(response).resolves.toEqual(expected);

    });

    it('should throw an error if status code is not okay', () => {
       window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.registerUser(user);

      expect(response).resolves.toEqual(false);
    });
  });

  describe('delete favorite', () => {
    let movie;
    let user;

    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({})
      }));

      movie = {
        'movie_id': '354912'
      };

      user = {
        id: '1'
      };
    });

    it('should call fetch with expected params', () => {
      const { id } = user;
      const { movie_id } = movie;
      const expectedUrl = `api/users/${id}/favorites/${movie_id}`;
      const expectedBody = {
        'body': JSON.stringify({id, movie_id}),
        'headers': {'Content-Type':
        'application/json'},
        'method': 'DELETE'
      };

      expect(window.fetch).not.toHaveBeenCalled();

      helper.deleteFavorite(movie, user);

      expect(window.fetch).toHaveBeenCalledWith(expectedUrl, expectedBody);
    });

    it('should return an object if status code is okay', () => {
      const response = helper.deleteFavorite(movie, user);
      const expected = {};

      expect(response).resolves.toEqual(expected);
    });

    it('should throw an error if status code is not okay', () => {
       window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.deleteFavorite(movie, user);
      const expected = Error('could not delete user favorite');

      expect(response).rejects.toEqual(expected);
    });
  });

});
