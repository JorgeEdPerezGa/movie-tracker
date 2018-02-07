import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { initialFetch } from '../../helper';
import { addMovies } from '../../actions';
import './Nav.css';

export class Nav extends Component {

  async componentDidMount(){
    const movies = await initialFetch();
    this.props.addMovies(movies);
  }


  render() {
    return(
      <nav className='nav-menu'>
        <NavLink className='nav' to='/movies'>Movies</NavLink>
        <NavLink className='nav' to='/login'>Login</NavLink>
        <NavLink className='nav' to='/register'>Register</NavLink>
        <NavLink className='nav' to='/favorites'>Favorites</NavLink>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});

export default connect(null, mapDispatchToProps)(Nav)