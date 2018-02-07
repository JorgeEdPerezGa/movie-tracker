import key from './api/key.js';

export const initialFetch = async() => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
  const initialFetch = await fetch(url);
  const response = await initialFetch.json();
  return cleanMovies(response);
};

export const cleanMovies = (response) => {
  const movies = response.results.map(movie => {
    const title = movie.title;
    const overview = movie.overview;
    const poster = movie.poster_path;
    const backdrop = movie.backdrop_path;
    const id = movie.id;
    return {title, overview, poster, backdrop, id};
  });
  return Promise.all(movies);
};
