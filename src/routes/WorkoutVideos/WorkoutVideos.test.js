import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { WorkoutVideos } from '../WorkoutVideos';


it('renders correctly', () => {
    const tree = renderer
        .create(<Router><WorkoutVideos disableRandom={ true} /></Router>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});