import { moviesReducer } from './moviesReducer';


describe('moviesReducer', () => {

  let movie1
  let movie2

  beforeAll(() => {
    movie1 = {
      backdrop_path: "/abc.jpg",
      favorite: true,
      movie_id: 354912, 
      overview: "Despite his family’s...",
      poster_path: "/wxyz.jpg",
      release_date: "2017-10-27",
      title: "Coco",
      vote_average: 7.7
    }
    movie2 = {
      backdrop_path: "/lmnop.jpg",
      favorite: true,
      movie_id: 284053, 
      overview: "Thor is imprisoned...",
      poster_path: "/123.jpg",
      release_date: "2017-10-27",
      title: "Thor: Ragnoroc",
      vote_average: 7.4
    }
  })

  it('should return the default state', () => {
    const expected = []
    expect(moviesReducer(undefined, {})).toEqual(expected)
  })

  

})