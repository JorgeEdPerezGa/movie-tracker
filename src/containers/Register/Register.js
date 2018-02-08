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
    const { password1, password2, email, name } = this.state

    event.preventDefault();
    this.props.addUser(this.state);

    if ( password1 === password2 ) {
      const watchReg = await registerUser({
        name,
        email,
        password: password1
      })
    } else {
      alert(`Passwords don't match`);
    }

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className='user-name'
            placeholder='name'
            name='name'
            type='text'
            value={this.state.name}
            onChange = {this.handleChange}/>
          <input
            className='user-email'
            placeholder='email'
            name='email'
            type='text'
            value={this.state.email}
            onChange = {this.handleChange}/>
          <input
            className='user-password-1'
            placeholder='password'
            name='password1'
            type='text'
            value={this.state.password1}
            onChange = {this.handleChange}/>
          <input
            className='user-password-2'
            placeholder='retype password'
            name='password2'
            type='text'
            value={this.state.password2}
            onChange = {this.handleChange}/>
          <button>ENTER</button>
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
