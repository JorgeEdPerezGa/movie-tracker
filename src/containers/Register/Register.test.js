import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Register } from './Register';

import helper, { mockHelper } from '../../helper'
jest.mock('../../helper')

describe('Register', () => {
  
  let renderedComponent
  let mockLoginUser
  let mockHistory
  let mockUser
  let mockAddUser

  beforeEach(() => {
    mockLoginUser = jest.fn()
    mockHistory = { push: jest.fn() }
    mockAddUser = jest.fn()
    window.fetch = jest.fn()
    mockUser = {
      email: "kindoffake@123.com",
      id: 3,
      name: "fred",
      password1: "pw321",
      password2: "pw321"
    }

    renderedComponent = shallow(
      <Register
        user={mockUser} 
        loginUser={mockLoginUser}
        history={mockHistory}
        addUser={mockAddUser}
      />
    )
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should start with the expected default state', () => {
    const expected = { name: '', email: '', password1: '', password2: '' }

    expect(renderedComponent.state()).toEqual(expected)
  })

  it('should set change state on handleChange', () => {
    expect(renderedComponent.state()).toEqual({ name: '', email: '', password1: '', password2: '' })

    renderedComponent.instance().handleChange({ target: { name: 'email', value: 'aaa' } })
    expect(renderedComponent.state()).toEqual({ email: 'aaa', name:'', password1:'', password2:''})

    renderedComponent.instance().handleChange({ target: { name: 'password1', value: 'bbb' } })
    expect(renderedComponent.state()).toEqual({ email: 'aaa', name:'', password1: 'bbb', password2:''})

    renderedComponent.instance().handleChange({ target: { name: 'password2', value: 'ccc' } })
    expect(renderedComponent.state()).toEqual({ email: 'aaa', name:'', password1: 'bbb', password2: 'ccc' })
  })

  it('handleSubmit should call postUser with the expected params', () => {
    const state = {email: 'fake', name: 'blob', password1: 'uncrackable', password2: "uncrackable"}
    const expected = {email: 'fake', name: 'blob', password: 'uncrackable'}
    const mockEvent = { preventDefault: jest.fn() }

    renderedComponent.setState(state)

    expect(window.fetch).not.toHaveBeenCalled()

    renderedComponent.instance().handleSubmit(mockEvent )

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('handleSubmit should call loginUser with the expected params', () => {
    const state = {email: 'one', name:'asdf', password1: 'two', password2:'two'}
    const expected = {email: 'one', name:'asdf', password: 'two'}
    const mockEvent = { preventDefault: jest.fn() }

    renderedComponent.setState(state)

    expect(window.fetch).not.toHaveBeenCalled()

    renderedComponent.instance().handleSubmit(mockEvent )

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('handleLogin should call addUser', () => {
    expect(mockLoginUser).not.toHaveBeenCalled()

    renderedComponent.setState(mockUser)
    renderedComponent.instance().handleLogin(mockUser);

    expect(mockAddUser).toHaveBeenCalledWith(mockUser)
  })

  it('setAlert should setState as expected', () => {
    expect(renderedComponent.state('error')).toEqual(false)
    expect(renderedComponent.state('alert')).toEqual('')

    renderedComponent.instance().setAlert('Alert Message')
    renderedComponent.update()

    expect(renderedComponent.state('error')).toEqual(true)
    expect(renderedComponent.state('alert')).toEqual('Alert Message')

  })

  it('renderAlert should match snapshot', () => {
    renderedComponent.instance().setAlert('Alert message')
    renderedComponent.update()

    expect(renderedComponent).toMatchSnapshot()
  })

})