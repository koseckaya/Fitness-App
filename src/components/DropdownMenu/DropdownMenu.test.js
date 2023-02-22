import React from 'react';
import renderer from 'react-test-renderer';
import { DropdownMenu } from './dropdown-menu';
import { Router } from 'react-router-dom';


const props = {
    userName: {}
}

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe("DropDownMenu component", () => {
    it('should render component with default props', () => {
        const component = renderer
            .create(
                <DropdownMenu {...props} />
           )
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without props', () => {
        const newProps = { ...props, displayName: '', email: '', emailVerified: false }
        const component = renderer
            .create(<DropdownMenu {...newProps}></DropdownMenu>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
})

