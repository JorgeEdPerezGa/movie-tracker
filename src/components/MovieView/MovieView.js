import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addFavorite, removeFavorite, updateMovies } from '../../actions/';
import { postFavorite, deleteFavorite } from '../../helper';
import PropTypes from 'prop-types';
import './MovieView.css';


export class MovieView extends Component {

  handleFavorites = () => {
    const { movie } = this.props
    if (!this.props.user.name) {
      return this.props.history.push('/login');
    }

    const duplicated = this.props.favorites.some(fav => movie.title === fav.title);

    const favMovie = {...movie, favorite: !movie.favorite};

    duplicated ? this.removeFavMovie(favMovie) :this.addFavMovie(favMovie);

    this.props.updateMovies(favMovie);
  }

  addFavMovie = (movie) => {
    this.props.addFavorite(movie);
    postFavorite(movie, this.props.user);
  }

  removeFavMovie = (movie) => {
    this.props.removeFavorite(movie);
    deleteFavorite(movie, this.props.user);
  }

  render() {
    const { title, overview, poster_path, backdrop_path, movie_id } = this.props.movie
  
    return (
      <article className='movie-view'>
        <div className='movie-view-description'>
          <p className='movie-title'>{ title }</p>
          <p className='movie-overview'>{ overview }</p>
        </div>
        <img
          className='movie-poster-view' src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
        <Link to={`/movies`}>
          <button className='back-to-movies-button'></button>
        </Link>
        <img
          className='movie-backdrop' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/>
        <button
          onClick={this.handleFavorites}
          className='favorite-button-movie-view'
          ></button>
      </article>
    );  
  }

};

const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user,
  favorites: state.favorites
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: movie => dispatch(addFavorite(movie)),
  removeFavorite: movie => dispatch(removeFavorite(movie)),
  updateMovies: movie => dispatch(updateMovies(movie))
})

MovieView.propTypes = {
  movie: PropTypes.object,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieView));
