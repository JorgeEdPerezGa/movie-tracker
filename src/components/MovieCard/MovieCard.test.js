import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  it.skip('should not pass', () => {
    expect(false).toEqual(true);
  })

  let mockMovie;
  let mockOnFavorite;
  let renderedComponent;

  beforeAll(() => {
    mockMovie = {
      title
    };
    mockOnFavorite = jest.fn();
  })

  beforeEach(() => {
    renderedComponent = shallow(<MovieCard key={1} movie={mockMovie} onFavorite={mockOnFavorite} />)
  })

  it('should match snapshot', () => {

  })

  it('should call onFavorite when button is clicked')
})