import React from 'react';
import { Route } from 'react-router-dom';
import Movies from '../../containers/Movies/Movies';
import Favorites from '../../containers/Favorites/Favorites';
import Nav from '../Nav/Nav';
import Login from '../../containers/Login/Login';
import Register from '../../containers/Register/Register';

const Routes = () => {
  return (
    <div>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Movies} />
      <Route exact path='/movies' component={Movies} /> 
      <Route exact path='/favorites' component={Favorites} /> 
      <Route exact path='/login' component={Login} /> 
      <Route exact path='/register' component={Register} /> 
    </div>
  )
}

export default Routes;