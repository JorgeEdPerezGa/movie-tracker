import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    deleteFavorite(this.props.user, movie)
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
  favorites: state.favorites,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: movie => dispatch(addFavorite(movie)),
  removeFavorite: movie => dispatch(removeFavorite(movie)),
  updateMovies: movie => dispatch(updateMovies(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
