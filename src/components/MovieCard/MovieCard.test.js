import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {

  let mockMovie;
  let mockOnFavorite;
  let renderedComponent;

  beforeAll(() => {
    mockMovie = {
      backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
      movie_id: 354912,
      overview: "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz.",
      poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
      release_date: "2017-10-27",
      title: "Coco",
      vote_average: 7.7
    };
    mockOnFavorite = jest.fn();
  });

  beforeEach(() => {
    renderedComponent = shallow(<MovieCard key={1} movie={mockMovie} onFavorite={mockOnFavorite} />);
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should call onFavorite when button is clicked', () => {
    renderedComponent.find('button').simulate('click');
    expect(mockOnFavorite.mock.calls.length).toEqual(1);
  });
});
