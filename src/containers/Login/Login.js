import React, { Component } from 'react';
import './Login.css';
import { loginUser } from '../../helper'

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
    console.log('boo')
    event.preventDefault()
    const testFetch = await loginUser(this.state)
    console.log(testFetch)
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

export default Login;
