import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return(
    <nav className='nav-menu'>
      <NavLink className='nav' to='/movies'>Movies</NavLink>
      <NavLink className='nav' to='/login'>Login</NavLink>
      <NavLink className='nav' to='/register'>Register</NavLink>
      <NavLink className='nav' to='/favorites'>Favorites</NavLink>
    </nav>
  )
}

export default Nav;