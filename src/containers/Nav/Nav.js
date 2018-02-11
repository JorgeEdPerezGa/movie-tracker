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
          <NavLink className='nav' to='/movies'>Movies</NavLink>
          <NavLink className='nav' to='/favorites'>Favorites</NavLink>
          <button onClick={this.handleLogoutUser}>Logout</button>
        </nav>
      );
    }

    return (
      <nav className='nav-menu'>
        <NavLink className='nav' to='/movies'>Movies</NavLink>
        <NavLink className='nav' to='/login'>Login</NavLink>
        <NavLink className='nav' to='/register'>Register</NavLink>
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
