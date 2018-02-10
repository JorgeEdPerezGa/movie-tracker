import * as helper from './helper';
import key from './api/key.js';

describe('helper', () => {
  it.skip('should not pass', () => {
    expect(false).toEqual(true);
  });

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

    it.skip('should throw an error if status code is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
    });
  });

  describe.skip('post favorite', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          favorite: 'favorite'
        })
      }));
    });

    it('should call fetch with expected params', () => {

    });

    it('should return an object if status code is okay', () => {

    });

    it('should throw an error if status code is not okay', () => {

    });
  });

  describe.skip('retrieve favorite', () => {
    it('should call fetch with expected params', () => {

    });

    it('should return an object if status code is okay', () => {

    });

    it('should throw an error if status code is not okay', () => {

    });
  });

  describe.skip('delete favorite', () => {
    it('should call fetch with expected params', () => {

    });

    it('should return an object if status code is okay', () => {

    });

    it('should throw an error if status code is not okay', () => {

    });
  });

});
