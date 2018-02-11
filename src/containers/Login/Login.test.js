import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it.skip('should not pass', () => {
    expect(false).toEqual(true);
  })

  // pass down as props
  const mockHistory = {
    push: jest.fn();
  }
})