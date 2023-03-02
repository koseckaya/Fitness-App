import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from './login-form';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

it('renders correctly', () => {
    const tree = renderer
        .create(<LoginForm></LoginForm>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});