import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { initialFetch, cleanMovies } from '../../helper';
import { addMovies, logoutUser } from '../../actions';
import './Nav.css';

export class Nav extends Component {

  async componentDidMount(){
    const response = await initialFetch();
    const movies = await cleanMovies(response);
    this.props.addMovies(movies);
  }

  handleLogoutUser = () => {
    const { user, logoutUser } = this.props;

    logoutUser(user);
  }

  render() {
    if (this.props.user.name) {
      return (
        <nav className='nav-menu'>
          <p
            className='app-title-1'>
            <span
              className='app-title-2'>MOVIE
            </span>TRACKER
          </p>
          <div className='menu'>
            <NavLink className='nav' to='/movies'>Movies</NavLink>
            <NavLink className='nav' to='/favorites'>Favorites</NavLink>
            <button onClick={this.handleLogoutUser}>Logout</button>
          </div>
        </nav>
      );
    }

    return (
      <nav className='nav-menu'>
        <p
          className='app-title-1'>
          <span
            className='app-title-2'>MOVIE
          </span>TRACKER</p>
        <div className='menu'>
          <NavLink className='nav' to='/movies'>Movies</NavLink>
          <NavLink className='nav' to='/login'>Login</NavLink>
          <NavLink className='nav' to='/register'>Register</NavLink>
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
  logoutUser: (user) => dispatch(logoutUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
