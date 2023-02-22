import React from 'react';
import renderer from 'react-test-renderer';
import { DropdownMenu } from './dropdown-menu';

const props = {
    displayName: "Mila",
    email:"interika11@gmail.com",
    emailVerified:true,
}


describe("DropDownMenu component", () => {
    it('should render component with default props', () => {
        const component = renderer
            .create(<DropdownMenu {...props}></DropdownMenu>)
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