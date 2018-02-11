import React from 'react';

const MovieView = ({ movie, onFavorite }) => {
  const { title, overview, poster_path, backdrop_path, movie_id } = movie
  return (
    <article className='movie-card'>
      <p className='movie-title'>{ title }</p>
      <p className='movie-overview'>{ overview }</p>
      <img
        className='movie-poster' src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
      <img
        className='movie-backdrop' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/>
      <button 
        onClick={()=> onFavorite(movie)}
        className='favorite-button'
        >&#9829;</button>
    </article>
  );
};

export default MovieView;
