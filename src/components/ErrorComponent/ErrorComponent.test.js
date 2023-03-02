import React from 'react';
import renderer from 'react-test-renderer';
import { ErrorComponent } from './ErrorComponent';


it('renders correctly', () => {
    const tree = renderer
        .create(<ErrorComponent></ErrorComponent>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});