import React from 'react';

const MovieCard = ({ movie, onFavorite }) => {
  const { title, overview, poster, backdrop } = movie
  return (
    <article className='movie-card'>
      <p className='movie-title'>{ title }</p>
      <p className='movie-overview'>{ overview }</p>
      <img
        className='movie-poster' src={`https://image.tmdb.org/t/p/w500${poster}`}/>
      <img
        className='movie-backdrop' src={`https://image.tmdb.org/t/p/w500${backdrop}`}/>
      <button 
        onClick={()=> onFavorite(movie)}
        className='favorite-button'
        >&#9829;</button>
    </article>
  );
};

export default MovieCard;
