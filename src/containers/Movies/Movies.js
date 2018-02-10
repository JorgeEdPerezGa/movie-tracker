import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import { addFavorite, removeFavorite, updateMovies } from '../../actions/';
import { postFavorite, deleteFavorite } from '../../helper';
import './Movies.css';

export class Movies extends Component {

  displayMovies = () => {
    const { movies } = this.props;
    return movies.map((movie, idx) => {
      console.log(movie)
      return (
        <MovieCard key={movie.movie_id + idx} movie={movie} onFavorite={this.handleFavorites}/>
      );
    });
  }

  handleFavorites = (movie) => {
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
    deleteFavorite(this.props.user, movie)
  }

  render() {
    return (
      <div>
        {this.displayMovies()}
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
