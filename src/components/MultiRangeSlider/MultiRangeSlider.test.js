import React from 'react';
import renderer from 'react-test-renderer';
import MultiRangeSlider from './MultiRangeSlider';

const props = {
    min: 0, 
    max: 200, 
    onChange: () => {},
}
it('renders correctly', () => {
    const tree = renderer
        .create(<MultiRangeSlider></MultiRangeSlider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

describe("MultiRangeSlider component", () => {
    it('should render component with default props', () => {
        const tree = renderer
            .create(<MultiRangeSlider {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render component without props', () => {
        const newProps = {...props, min: 200, max: 0, }
        const component = renderer
            .create(<MultiRangeSlider {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
})