import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ movie, onFavorite }) => {
  const { title, overview, poster_path, backdrop_path, movie_id, favorite } = movie;
  const klass = favorite ? 'movie-card-main favorite-selected' : 'movie-card-main';

  return (
    <article className={klass}>
      {/* <p className='movie-title'>{ title }</p>
      <p className='movie-overview'>{ overview }</p> */}
      <Link to={`/movies/${movie_id}`}>
        <img
          className='movie-poster' src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
      </Link>
      {/* <img
        className='movie-backdrop' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/> */}
      <div className='button-container'>
        <button
          onClick={()=> onFavorite(movie)}
          className='favorite-button'></button>
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  onFavorite: PropTypes.func
};

export default MovieCard;
