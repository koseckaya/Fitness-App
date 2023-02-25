import React from 'react';
import renderer from 'react-test-renderer';
import Toggle from './Toggle';




it('should render component', () => {

    const component = renderer
        .create(<Toggle  />)
        .toJSON();
    expect(component).toMatchSnapshot();
})