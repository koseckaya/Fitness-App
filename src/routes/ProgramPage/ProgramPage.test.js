import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import ProgramPage from './ProgramPage';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ programId: "grow-a-booty-challenge"}),
}));


it('renders correctly', () => {
    const tree = renderer
        .create(<Router><ProgramPage /></Router>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});