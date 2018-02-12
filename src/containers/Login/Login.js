import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postUser, retrieveFavorites, cleanFavorites } from '../../helper';
import { addUser, addAllFavorites, updateMovies } from '../../actions';
import './Login.css';

export class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      error: false
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
    try {
      const retrievedUser = await postUser(this.state);
      const userFavorites = await retrieveFavorites(retrievedUser.data.id)
      this.handleRetrievedFavorites(userFavorites.data)

      this.props.loginUser(retrievedUser.data);
      this.props.history.push('/')
    } catch (err) {
      this.setState({error: true})
    }
  }

  renderAlert = () => {
    const { error } = this.state;
    setTimeout(() => { this.setState({error: false}); }, 10000);
    return error && ( <p className='error-message'>Could not find your account!</p> );
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
      <div className='login'>
        <h1 className='page-title'>WELCOME BACK</h1>
        <form
          className='login-form'
          onSubmit={this.handleSubmit}>
          <div className='input-container'>
            <input
              className='login-input'
              placeholder='email'
              name='email'
              type='text'
              value={this.state.email}
              onChange = {this.handleChange}/>
            <input
              className='login-input'
              placeholder='password'
              name='password'
              type='text'
              value={this.state.password}
              onChange = {this.handleChange}/>
            <button className='login-button'>ENTER</button>
          </div>
        </form>
        {this.renderAlert()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(addUser(user)),
  addAllFavorites: (movies) => dispatch(addAllFavorites(movies)),
  updateMovies: (movie) => dispatch(updateMovies(movie))
});

Login.propTypes = {
  loginUser: PropTypes.func,
  addAllFavorites: PropTypes.func,
  updateMovies: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Login);
