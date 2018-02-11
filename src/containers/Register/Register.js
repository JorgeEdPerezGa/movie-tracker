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
      password2: '',
      error: false,
      alert: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { password1, password2, email, name } = this.state;

    if ( password1 === password2 ) {
      const user = { name, email, password: password1 }
      this.handleRegisterUser(user)
    } else { 
      this.setAlert("Passwords don't match")
    }
  }

  handleRegisterUser = async (user) => {
    try{
      const newUser = await registerUser(user);
      this.handleLogin(newUser.id);  
    } catch(error) {
      this.setAlert('User already exists')
    }
  }

  setAlert = (alert) => {
    this.setState({error: true, alert, name: '', email: '', password1: '', password2: '' })
  }
  
  handleLogin = (id) => {
    const { name, email, password1 } = this.state
    this.props.addUser({name, email, password: password1, id});
    this.props.history.push('/');
  }

  renderAlert = () => {
    const { error, alert } = this.state;
    setTimeout(() => { this.setState({error: false}) }, 10000);
    return error && ( <p color="white">{alert}</p> );
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
          { this.renderAlert() }
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
