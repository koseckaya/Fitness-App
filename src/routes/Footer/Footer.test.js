import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Footer from './Footer';



it('renders correctly', () => {
    const tree = renderer
        .create(<Router><Footer /></Router>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});