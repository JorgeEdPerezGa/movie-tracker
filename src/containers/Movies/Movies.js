import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import { toggleFavorite, updateMovies } from '../../actions/';
import './Movies.css';

export class Movies extends Component {

  displayMovies = () => {
    const { movies } = this.props;
    return movies.map((movie, idx) => {
      return (
        <MovieCard key={movie.id + idx} movie={movie} onFavorite={this.handleFavorites}/>
      );
    });
  }

  handleFavorites = (movie) => {
    if (!this.props.user.name) {
      return this.props.history.push('/login');
    }
    const favMovie = {...movie, favorite: !movie.favorite};

    this.props.toggleFavorite(favMovie);
    this.props.updateMovies(favMovie);
  }

  addFavMovie = (movie) => {
    
  }

  removeFavMovie = (movie) => {
    
  }

  render() {
    return (
      <div>
        movies
        {this.displayMovies()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: movie => dispatch(toggleFavorite(movie)),
  updateMovies: movie => dispatch(updateMovies(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
