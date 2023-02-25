import React from 'react';
import renderer from 'react-test-renderer';
import Section from './Section';

const props = {
    title: "Free Workout Programs",
    btnText: "Free Workout Programs",
    children: `<div></div>`,
    onClick: () => { },
}



describe("Section component", () => {
    it('should render component with default props', () => {
        const tree = renderer
            .create(<Section {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render component without title props', () => {
        const newProps = { ...props, title: '' }
        const component = renderer
            .create(<Section {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without btnText props', () => {
        const newProps = { ...props, btnText: '' }
        const component = renderer
            .create(<Section {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without children props', () => {
        const newProps = { ...props, children: '' }
        const component = renderer
            .create(<Section {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
})