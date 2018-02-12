import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieView.css';

const MovieView = ({ movie }) => {
  const { title, overview, poster_path, backdrop_path } = movie;
  return (
    <article className='movie-view'>
      <div className='movie-view-description'>
        <p className='movie-title'>{ title }</p>
        <p className='movie-overview'>{ overview }</p>
      </div>
      <img
        className='movie-poster-view' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title} poster`}/>
      <Link to={`/movies`}>
        <button className='back-to-movies-button'></button>
      </Link>
      <img
        className='movie-backdrop' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/>
    </article>
  );
};

MovieView.propTypes = {
  movie: PropTypes.object
};

export default MovieView;
