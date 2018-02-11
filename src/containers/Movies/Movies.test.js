import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Movies } from './Movies';
import { createMemoryHistory } from 'history';
import helper, { mockHelper } from '../../helper';
jest.mock('../../helper');

//redirect user to login
// // pass down as props
//   const mockHistory = {
//     push: jest.fn();
//   }
describe('Movies', () => {
  it.skip('should not pass', () => {
    expect(false).toEqual(true);
  });

  let mockFavorites;
  let mockMovies;
  let mockUser;
  let mockAddFavorite;
  let mockRemoveFavorite;
  let mockUpdateMovies;
  let renderedComponent;
  let mockMovie;

  beforeAll(() => {
    mockMovie = {
      backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
      movie_id: 354912,
      overview: "Despite his family’s baffling generations-old ban on music",
      poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
      release_date: "2017-10-27",
      title: "Coco",
      vote_average: 7.7,
      favorite: false
    };

    mockMovies = [
      {
        backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
        movie_id: 354912,
        overview: "Despite his family’s baffling generations-old ban on music",
        poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
        release_date: "2017-10-27",
        title: "Coco",
        vote_average: 7.7,
        favorite: false
      },
      {
        backdrop_path: "/def.jpg",
        movie_id: 999,
        overview: "Despite his family’s baffling generations-old ban on music",
        poster_path: "/abs.jpg",
        release_date: "2017-10-27",
        title: "Thor",
        vote_average: 7.2,
        favorite: true
      }
    ];

    mockUser = {
      email: "fake@123.com",
      id: 2,
      name: "ted",
      password: "pw123"
    };
  });

  beforeEach(() => {
    mockRemoveFavorite = jest.fn();
    mockAddFavorite = jest.fn();
    mockUpdateMovies = jest.fn();
    window.fetch = jest.fn();

    mockFavorites = [
      {
        backdrop_path: "/def.jpg",
        movie_id: 999,
        overview: "Despite his family’s baffling generations-old ban on music",
        poster_path: "/abs.jpg",
        release_date: "2017-10-27",
        title: "Thor",
        vote_average: 7.2,
        favorite: true
      }
    ];

    renderedComponent = shallow(
      <Movies
        favorites={mockFavorites}
        movies={mockMovies}
        user={mockUser}
        addFavorite={mockAddFavorite}
        removeFavorite={mockRemoveFavorite}
        updateMovies={mockUpdateMovies}
      />
    );
  });

  it.skip('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('when removeFavMovie is called removeFavorite and deleteFavorite should be called with expected params', () => {
    expect(mockRemoveFavorite).not.toHaveBeenCalled();
    expect(window.fetch).not.toHaveBeenCalled();

    renderedComponent.instance().removeFavMovie(mockMovie);

    expect(mockRemoveFavorite).toHaveBeenCalledWith(mockMovie);
    expect(window.fetch).toHaveBeenCalledWith( mockMovie, mockUser);
  });

  it('when addFavMovie is called addFavorite and postFavorite should be called with expected params', () => {
    expect(mockAddFavorite).not.toHaveBeenCalled();
    expect(window.fetch).not.toHaveBeenCalled();

    renderedComponent.instance().addFavMovie(mockMovie);

    expect(mockAddFavorite).toHaveBeenCalledWith(mockMovie);
    expect(window.fetch).toHaveBeenCalledWith(mockMovie, mockUser);
  });

  it.skip('when user favorites a card and is not logged in, page redirects to login', () => {
    const history = createMemoryHistory('/movies');
    const renderedComponent = shallow(
      <Movies
        favorites={mockFavorites}
        movies={mockMovies}
        user={{}}
        addFavorite={mockAddFavorite}
        removeFavorite={mockRemoveFavorite}
        updateMovies={mockUpdateMovies}
        history={history}
      />
    )

    renderedComponent.instance().handleFavorites(mockMovie);
    expect(renderedComponent).toMatchSnapshot();
  })

  it('when user favorites a card and it is already in favorites, it should call removeFavMovie', () => {
    const expected = {...mockFavorites[0], favorite: false};

    expect(mockRemoveFavorite).not.toHaveBeenCalled();
    renderedComponent.instance().handleFavorites(mockFavorites[0]);
    expect(mockRemoveFavorite).toHaveBeenCalledWith(expected);
  });

  it('when user favorites a card and it is not in Favorites, it should call addFavMovie', () => {
    const expected = {...mockMovie, favorite: true};

    expect(mockAddFavorite).not.toHaveBeenCalled();
    renderedComponent.instance().handleFavorites(mockMovie);
    expect(mockAddFavorite).toHaveBeenCalledWith(expected);
  });

  it('when user favorites a card it should update Movies', () => {
    const expected = {...mockMovie, favorite: true};

    expect(mockUpdateMovies).not.toHaveBeenCalled();
    renderedComponent.instance().handleFavorites(mockMovie);
    expect(mockUpdateMovies).toHaveBeenCalledWith(expected);
  });
});
