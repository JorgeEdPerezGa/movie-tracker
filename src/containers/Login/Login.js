import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../helper';
import { addUser } from '../../actions';
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
    const retrievedUser = await loginUser(this.state);

    if (!retrievedUser) {
      alert('Email and password do not match');
    } else {
      this.props.loginUser(retrievedUser.data);
      this.props.history.push('/')
    }
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
  loginUser: (user) => dispatch(addUser(user))
});

export default connect(null, mapDispatchToProps)(Login);
