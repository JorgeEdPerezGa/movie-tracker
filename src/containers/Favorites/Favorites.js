import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../../components/MovieCard/MovieCard';
import { addFavorite, removeFavorite, updateMovies } from '../../actions/';
import { postFavorite, deleteFavorite } from '../../helper';
import './Favorites.css';

export class Favorites extends Component {

  renderFavorites = () => {
    return this.props.favorites.map((movie, idx) => {
      return <MovieCard key={movie.movie_id + idx} movie={movie} onFavorite={this.handleFavorites}/>;
    });
  }

   handleFavorites = (movie) => {
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
    deleteFavorite(movie, this.props.user)
  }

  render() {
    return (
      <div className='movie-list'>
        { this.renderFavorites() }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: movie => dispatch(addFavorite(movie)),
  removeFavorite: movie => dispatch(removeFavorite(movie)),
  updateMovies: movie => dispatch(updateMovies(movie))
})

Favorites.propTypes = {
  favorites: PropTypes.array,
  user: PropTypes.object,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  updateMovies: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
