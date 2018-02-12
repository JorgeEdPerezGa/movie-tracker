import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initialFetch, cleanMovies } from '../../helper';
import { addMovies, logoutUser, clearFavorites } from '../../actions';
import './Nav.css';

export class Nav extends Component {

  async componentDidMount(){
    const response = await initialFetch();
    const movies = await cleanMovies(response);
    this.props.addMovies(movies);
  }

  handleLogoutUser = () => {
    const { user, logoutUser, clearFavorites } = this.props;

    logoutUser(user);
    clearFavorites();
    this.props.history.go(0);
  }

  render() {
    if (this.props.user.name) {
      return (
        <nav className='nav-menu'>
          <p
            className='app-title-1'>
            <NavLink to='/' className='home-nav'>
              <span
                className='app-title-2'>MOVIE
              </span>TRACKER
            </NavLink>
          </p>
          <div className='menu'>
            <NavLink className='nav' to='/movies'>MOVIES</NavLink>
            <NavLink className='nav' to='/favorites'>FAVORITES</NavLink>
            <button className='logout-button' onClick={this.handleLogoutUser}>LOGOUT</button>
          </div>
        </nav>
      );
    }

    return (
      <nav className='nav-menu'>
        <p
          className='app-title-1'>
          <NavLink to='/' className='home-nav'>
            <span
              className='app-title-2'>MOVIE
            </span>TRACKER
          </NavLink>
        </p>
        <div className='menu'>
          <NavLink className='nav' to='/movies'>MOVIES</NavLink>
          <NavLink className='nav' to='/login'>LOGIN</NavLink>
          <NavLink className='nav' to='/register'>REGISTER</NavLink>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies)),
  logoutUser: (user) => dispatch(logoutUser(user)),
  clearFavorites: () => dispatch(clearFavorites())
});

Nav.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object,
  addMovies: PropTypes.func,
  logoutUser: PropTypes.func,
  clearFavorites: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
