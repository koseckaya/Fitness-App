import React from 'react';
import renderer from 'react-test-renderer';
import  SignupForm from './signup-form';


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

    it('should render component with default props', () => {
        const tree = renderer
            .create(<SignupForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

