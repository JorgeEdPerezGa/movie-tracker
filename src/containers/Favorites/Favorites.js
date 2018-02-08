import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import { toggleFavorite, updateMovies } from '../../actions/';
import './Favorites.css';

export class Favorites extends Component {

  renderFavorites = () => {
    return this.props.favorites.map((movie, idx) => {
      return <MovieCard key={movie.id + idx} movie={movie} onFavorite={this.handleFavorites}/>;
    });
  }

  handleFavorites = (movie) => {
    const favMovie = {...movie, favorite: !movie.favorite};

    this.props.toggleFavorite(favMovie);
    this.props.updateMovies(favMovie);
  }

  render() {
    return (
      <div>
        { this.renderFavorites() }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites
});

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: movie => dispatch(toggleFavorite(movie)),
  updateMovies: movie => dispatch(updateMovies(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
