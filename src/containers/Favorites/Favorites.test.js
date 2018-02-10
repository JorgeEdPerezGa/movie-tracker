import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Favorites } from './Favorites';

describe('Favorites', () => {
  it.skip('should not pass', () => {
    expect(false).toEqual(true);
  })

  let mockFavorites;
  let mockMovies;
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
    
    mockUser = {};
  })

  beforeEach(() => {
    mockRemoveFavorite = mock.fn();
    mockUpdateMovies = mock.fn();
    renderedComponent = mock.fn();
    renderedComponent = shallow(
      <Favorites 
        favorites={mockFavorites}
        
      />
    );
  })

  it('should match snapshot', () => {
    

    expect(renderedComponent).toMatchSnapshot();
  })
})