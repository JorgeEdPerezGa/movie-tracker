import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieView.css';

const MovieView = ({ movie, onFavorite }) => {
  const { title, overview, poster_path, backdrop_path, movie_id } = movie
  return (
    <article className='movie-view'>
      <div className='movie-view-description'>
        <p className='movie-title'>{ title }</p>
        <p className='movie-overview'>{ overview }</p>
      </div>
      <Link to={`/movies`}>
        <img
          className='movie-poster-view' src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
      </Link>
      <img
        className='movie-backdrop' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/>
      <button
        onClick={()=> onFavorite(movie)}
        className='favorite-button'
        >&#9829;</button>
    </article>
  );
};

MovieView.propTypes = {
  movie: PropTypes.object,
  onFavorite: PropTypes.func
};

export default MovieView;
