import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';


it('renders correctly', () => {
    const tree = renderer
        .create(<Router><PrivacyPolicy /></Router>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});