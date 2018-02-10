import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Favorites } from './Favorites';

describe('Favorites', () => {
  it.skip('should not pass', () => {
    expect(false).toEqual(true);
  })

  let mockFavorites;
  let mockUser;
  let mockAddFavorite;
  let mockRemoveFavorite;
  let mockUpdateMovies;
  let renderedComponent;
  
  beforeAll(() => {
    mockFavorites = [{
      backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
      movie_id: 354912,
      overview: "Despite his family’s baffling generations-old ban on music",
      poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
      release_date: "2017-10-27",
      title: "Coco",
      vote_average: 7.7,
      favorite: true
    }];
    
    mockUser = {
      email: "fake@123.com",
      id: 2,
      name: "ted",
      password: "pw123"
    };
  })

  beforeEach(() => {
    mockRemoveFavorite = jest.fn();
    mockUpdateMovies = jest.fn();
    renderedComponent = jest.fn();
    renderedComponent = shallow(
      <Favorites 
        favorites={mockFavorites}
        user={mockUser}
        addFavorite={mockAddFavorite}
        removeFavorite={mockRemoveFavorite}
        updateMovies={mockUpdateMovies}
      />
    );
  })

  it.skip('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })

  it('when user favorites a card and it is already in Favorites, it is removed', () => {

  })

  it('when user favorites a card and it is not in Favorites, it is added', () => {

  })
})