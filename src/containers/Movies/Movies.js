import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import { toggleFavorite } from '../../actions/'
import './Movies.css';

export class Movies extends Component {

  displayMovies = () => {
    const { movies } = this.props;
    return movies.map((movie) => {
      return (
        <MovieCard key={movie.id} movie={movie} onFavorite={this.handleFavorites}/>
      );
    });
  }

  handleFavorites = (movie) => {
    this.props.toggleFavorite(movie)
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
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: movie => dispatch(toggleFavorite(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
