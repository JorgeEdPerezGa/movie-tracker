import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes', () => {

  it('should match snapshot', () => {
    const renderedComponent = shallow(<Routes />);

    expect(renderedComponent).toMatchSnapshot();
  });
});
