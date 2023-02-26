import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Profile from './Profile';


it('renders correctly', () => {
    const tree = renderer
        .create(<Router><Profile /></Router>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});