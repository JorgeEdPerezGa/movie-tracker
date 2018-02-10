import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes', () => {
  it.skip('should not pass', () => {
    expect(false).toEqual(true);
  })

  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<Routes />);

    expect(renderedComponent).toMatchSnapshot();
  })
})