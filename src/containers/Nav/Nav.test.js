import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Nav } from './Nav';
import helper, { mockHelper } from '../../helper';

describe('Nav', () => {
  let renderedComponent;
  let mockAddMovies;
  let mockLogoutUser;
  let mockClearFavorites;
  let mockUser;
  let mockMoviesData;

  beforeAll(() => {
    mockMoviesData = {
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
      }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockMoviesData)
      }));
  })

  beforeEach(() => {
    mockAddMovies = jest.fn();
    mockLogoutUser = jest.fn();
    mockClearFavorites = jest.fn();
    mockUser = {
      email: "fake@123.com",
      id: 2,
      name: "ted",
      password: "pw123"
    };
    renderedComponent = shallow(
      <Nav 
        user={mockUser}
        addMovies={mockAddMovies}
        logoutUser={mockLogoutUser}
        clearFavorites={mockClearFavorites}
      />
    );
  })

  it('should match snapshot when no user is logged in', () => {
    mockUser = {};
    renderedComponent = shallow(
      <Nav 
        user={mockUser}
        addMovies={mockAddMovies}
        logoutUser={mockLogoutUser}
        clearFavorites={mockClearFavorites}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  }) 

  it('should match snapshot when user is logged in', () => {
    expect(renderedComponent).toMatchSnapshot();
  }) 

  it('should logout user when user clicks logout button and logoutUser is called', () => {
    renderedComponent.instance().handleLogoutUser();
    expect(mockLogoutUser).toHaveBeenCalledWith(mockUser);
  })

  it('should clear favorites in store when user clicks logout button and clearFavorites is called', () => {
    renderedComponent.instance().handleLogoutUser();
    expect(mockClearFavorites).toHaveBeenCalled();
  })
})