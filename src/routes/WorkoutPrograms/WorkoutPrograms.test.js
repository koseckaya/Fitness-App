import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { WorkoutPrograms } from './WorkoutPrograms';


it('renders correctly', () => {
    const tree = renderer
        .create(<Router><WorkoutPrograms /></Router>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});