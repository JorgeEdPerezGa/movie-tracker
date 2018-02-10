import React from 'react';
import { Route } from 'react-router-dom';
import Movies from '../../containers/Movies/Movies';
import Favorites from '../../containers/Favorites/Favorites';
import Nav from '../../containers/Nav/Nav';
import Login from '../../containers/Login/Login';
import Register from '../../containers/Register/Register';
// import { connect } from 'react-redux';
// import MovieCard from '../MovieCard/MovieCard';

const Routes = () => {

  return (
    <div>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Movies} />
      <Route exact path='/movies' component={Movies} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      {/* <Route path='/movies/:id' render={({ match }) => {
          const { id } = match.params;
          console.log(this.props);
          const movie = this.props.movies.find(movie => {
            return movie.movie_id === parseInt(id);
          });

          if (movie) {
            return <MovieCard movie = {movie}/>;
          }
        }} /> */}
    </div>
  );
};

export default Routes;

// const mapStateToProps = (state) => ({
//   movies: state.movies
// });
// export default connect(mapStateToProps, null)(Routes);
