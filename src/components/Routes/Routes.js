import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Movies from '../../containers/Movies/Movies';
import Favorites from '../../containers/Favorites/Favorites';
import Nav from '../../containers/Nav/Nav';
import Login from '../../containers/Login/Login';
import Register from '../../containers/Register/Register';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';

export const Routes = (props) => {

  return (
    <div>

      <Route path='/' component={Nav} />
      <Route exact path='/' component={Movies} />
      <Route exact path='/movies' component={Movies} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />

      <Route exact path='/movies/:id' render={({ match }) => {
        const { id } = match.params;
        const movie = props.movies.find( movie => {
          return movie.movie_id === parseInt(id);
        });

        if (movie) {
          return ( <MovieCard movie = {movie}/> );
        }
      }} />

    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default withRouter(connect(mapStateToProps, null)(Routes));
