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

  describe('cleanMovies', () => {
    let uncleaned;
    let expected;

    beforeAll(() => {
      uncleaned = {
        results: [
          { 
            adult: false,
            backdrop_path: "/dddddd.jpg",
            genre_ids: [12, 16, 35, 10751],
            id: 354912,
            original_language: "en",
            original_title: "Coco",
            overview: "Despite his famil...",
            popularity: 207.580955,
            poster_path: "/ffff.jpg",
            release_date: "2017-10-27",
            title: "Coco",
            video: false,
            vote_average: 7.7
          },
          { 
            adult: false,
            backdrop_path: "/zxc.jpg",
            genre_ids: [123, 10751],
            id: 99999,
            original_language: "sp",
            original_title: "Nono",
            overview: "Hellooooo there...",
            popularity: 207.580955,
            poster_path: "/phd.jpg",
            release_date: "2011-11-21",
            title: "Nono",
            video: false,
            vote_average: 1.7
          }
        ]
      };

      expected = [
        {
          "backdrop_path": "/dddddd.jpg",
          "movie_id": 354912,
          "overview": "Despite his famil...",
          "poster_path": "/ffff.jpg",
          "release_date": "2017-10-27",
          "title": "Coco",
          "vote_average": 7.7,
        },
        {
          "backdrop_path": "/zxc.jpg",
          "movie_id": 99999,
          "overview": "Hellooooo there...",
          "poster_path": "/phd.jpg",
          "release_date": "2011-11-21",
          "title": "Nono",
          "vote_average": 1.7,
        },
      ];

    });

    it('should return an array of clean objects', () => {
      const result = helper.cleanMovies(uncleaned);
      expect(result).toEqual(expected);
    });
  });

  describe('cleanFavorites', () => {
    let favorites;
    let expected;
    beforeAll(() => {
      favorites = [
        {
          "backdrop_path": "/dddddd.jpg",
          "movie_id": 354912,
          "overview": "Despite his famil...",
          "poster_path": "/ffff.jpg",
          "release_date": "2017-10-27",
          "title": "Coco",
          "vote_average": 7.7,
        }
      ];
      expected = [
        {
          "backdrop_path": "/dddddd.jpg",
          "movie_id": 354912,
          "overview": "Despite his famil...",
          "poster_path": "/ffff.jpg",
          "release_date": "2017-10-27",
          "title": "Coco",
          "vote_average": 7.7,
          "favorite": true
        }
      ];
    });

    it('should return an array and assign a favorite value of true or false on each element', () => {
      const result = helper.cleanFavorites(favorites);
      expect(result).toEqual(expected);
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
      const expected = Error('could not register user')

      expect(response).rejects.toEqual(expected);
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
      const response = helper.retrieveFavorites(user);
      const expected = {favorite: 'favorite'};

      expect(response).resolves.toEqual(expected);

    });

    it('should throw an error if status code is not okay', () => {
       window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.retrieveFavorites(user);
      const expected = Error('could not retrieve user favorites')

      expect(response).rejects.toEqual(expected);
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
