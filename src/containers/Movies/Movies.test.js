import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Movies from './Movies';

describe('Movies', () => {
  it.skip('should not pass', () => {
    expect(false).toEqual(true);
  })

  let mockMovies;

  beforeAll(() => {
    mockMovies = [
      {
        backdrop_path: "/lmnop.jpg",
        favorite: true,
        movie_id: 284053, 
        overview: "Thor is imprisoned...",
        poster_path: "/123.jpg",
        release_date: "2017-10-27",
        title: "Thor: Ragnoroc",
        vote_average: 7.4
      },
      {
        backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
        movie_id: 354912,
        overview: "Despite his family’s baffling generations-old ban on music",
        poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
        release_date: "2017-10-27",
        title: "Coco",
        vote_average: 7.7,
        favorite: true
      }
    ];
  })
})