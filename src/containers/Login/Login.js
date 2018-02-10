import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { postUser, retrieveFavorites, cleanFavorites } from '../../helper';
import { addUser, addAllFavorites, updateMovies } from '../../actions';
import './Login.css';

export class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const retrievedUser = await postUser(this.state);
    const userFavorites = await retrieveFavorites(retrievedUser.data.id)

    this.handleRetrievedFavorites(userFavorites.data)
   
    if (!retrievedUser) {
      alert('Email and password do not match');
    } else {
      this.props.loginUser(retrievedUser.data);
      this.props.history.push('/')
    }
  }

  handleRetrievedFavorites = (favorites) => {
    const cleanedFavorites = cleanFavorites(favorites)

    cleanedFavorites.forEach(favorite => {
       this.props.updateMovies(favorite);
    })
    this.props.addAllFavorites(cleanedFavorites)

  }

  render() {
    return (
      <div>
        <form 
          onSubmit={this.handleSubmit}>
          <input
            className='user-email'
            placeholder='email'
            name='email'
            type='text'
            value={this.state.email}
            onChange = {this.handleChange}/>
          <input
            className='user-password'
            placeholder='password'
            name='password'
            type='text'
            value={this.state.password}
            onChange = {this.handleChange}/>
          <button>ENTER</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(addUser(user)),
  addAllFavorites: (movies) => dispatch(addAllFavorites(movies)),
  updateMovies: (movie) => dispatch(updateMovies(movie))
});

export default connect(null, mapDispatchToProps)(Login);
