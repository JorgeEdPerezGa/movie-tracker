import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes', () => {

  it('should match snapshot', () => {
    const renderedComponent = shallow(<Routes />);

    expect(renderedComponent).toMatchSnapshot();
  })
})