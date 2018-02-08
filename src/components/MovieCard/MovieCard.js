import React from 'react';

const MovieCard = ({ title, overview, poster, backdrop }) => {
  return (
    <article className='movie-card'>
      <p className='movie-title'>{ title }</p>
      <p className='movie-overview'>{ overview }</p>
      <img
        className='movie-poster' src={`https://image.tmdb.org/t/p/w500${poster}`}/>
      <img
        className='movie-backdrop' src={`https://image.tmdb.org/t/p/w500${backdrop}`}/>

    </article>
  );
};

export default MovieCard;
