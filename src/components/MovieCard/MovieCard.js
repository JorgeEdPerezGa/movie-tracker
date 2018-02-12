import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ movie, onFavorite }) => {
  const { poster_path, movie_id, favorite } = movie;
  const selected = favorite ? 'favorite-selected' : '';

  return (
    <article className='movie-card-main'>
      <Link to={`/movies/${movie_id}`}>
        <img
          className='movie-poster' src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
      </Link>
      <div className='button-container'>
        <button
          onClick={()=> onFavorite(movie)}
          className={`favorite-button ${selected}`}></button>
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  onFavorite: PropTypes.func
};

export default MovieCard;
