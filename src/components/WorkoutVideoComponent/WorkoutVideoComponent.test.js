import React from 'react';
import renderer from 'react-test-renderer';
import { WorkoutVideoComponent } from './WorkoutVideoComponent';

const props = {
    title: '5 Min Warm Up',
    src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
    srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
    duration: 5
}

describe("WorkoutVideoComponent component", () => {
    it('should render component with default props', () => {
        const tree = renderer
            .create(<WorkoutVideoComponent {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render component without title props', () => {
        const newProps = { ...props, title: '' }
        const component = renderer
            .create(<WorkoutVideoComponent {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without src props', () => {
        const newProps = { ...props, src: '' }
        const component = renderer
            .create(<WorkoutVideoComponent {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without srcImg props', () => {
        const newProps = { ...props, srcImg: '' }
        const component = renderer
            .create(<WorkoutVideoComponent {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without duration props', () => {
        const newProps = { ...props, duration: 0 }
        const component = renderer
            .create(<WorkoutVideoComponent {...newProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
})