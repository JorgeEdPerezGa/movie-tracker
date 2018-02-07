import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Movies.css';

export class Movies extends Component {

  displayMovies = () => {
    const { movies } = this.props;
    return movies.map((movie) => {
      return (
        <MovieCard key={movie.id} {...movie}/>
      );
    });
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

const mapStateToProps = (store) => ({
  movies: store.movies
});

export default connect(mapStateToProps, null)(Movies);
