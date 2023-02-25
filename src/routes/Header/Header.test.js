import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from './Header';


it('renders correctly', () => {
    const tree = renderer
        .create(<Router><Header /></Router>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});