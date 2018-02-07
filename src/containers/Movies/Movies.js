import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialFetch } from '../../helper';
import { addMovies } from '../../actions';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Movies.css';

export class Movies extends Component {

  async componentWillMount(){
    const movies = await initialFetch();
    this.props.addMovies(movies);
  }

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

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});


export default connect(mapStateToProps, mapDispatchToProps)(Movies);
