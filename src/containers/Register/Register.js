import React, { Component } from 'react';
import { addUser } from '../../actions';
import { connect } from 'react-redux';
import { registerUser } from '../../helper';
import './Register.css';

export class Register extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password1: '',
      password2: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    const { password1, password2, email, name } = this.state;
    event.preventDefault();

    if ( password1 === password2 ) {
      const newUser = await registerUser({
        name,
        email,
        password: password1
      });
      this.handleLogin(newUser);
    } else {
      alert(`Passwords don't match`);
    }
  }

  handleLogin = (newUser) => {
    if (newUser.error){
      alert('That email already exists');
    } else {
      this.props.addUser(this.state);
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className='register'>
        <h1 className='page-title'>GET STARTED</h1>
        <form
          onSubmit={this.handleSubmit}
          className='register-form'>
          <div className='input-container'>
            <input
              className='register-input'
              placeholder='NAME'
              name='name'
              type='text'
              value={this.state.name}
              onChange = {this.handleChange}/>
            <input
              className='register-input'
              placeholder='EMAIL'
              name='email'
              type='text'
              value={this.state.email}
              onChange = {this.handleChange}/>
            <input
              className='register-input user-password-1'
              placeholder='PASSWORD'
              name='password1'
              type='text'
              value={this.state.password1}
              onChange = {this.handleChange}/>
            <input
              className='register-input user-password-2'
              placeholder='RETYPE PASSWORD'
              name='password2'
              type='text'
              value={this.state.password2}
              onChange = {this.handleChange}/>
            <button className='register-button'>ENTER</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
