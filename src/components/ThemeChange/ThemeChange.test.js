import React from 'react';
import renderer from 'react-test-renderer';
import ThemeChange from './ThemeChange';

it('renders correctly', () => {
    const tree = renderer
        .create(<ThemeChange></ThemeChange>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});