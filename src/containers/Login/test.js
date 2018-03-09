import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('login', () => {

  const renderedComponent = shallow(
    <Login />
  );

  it('test', () => {
    expect(true).toEqual(true);
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should start with expected default state', () => {
    const expected = {email: '', password: '', 'error': false};
    
  });
});
