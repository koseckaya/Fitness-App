import React from 'react';
import renderer from 'react-test-renderer';
import  ExerciseVideoPrev from './ExerciseVideoPrev';


const props = {
    title: '5 Min Warm Up',
    src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
    srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
    day: '1',
    active: false,
    onVideoClick: () => { },
};



describe("ExerciseVideoPrev component", () => {
    it('should render component with default props', () => {
        const component = renderer
            .create(<ExerciseVideoPrev {...props}></ExerciseVideoPrev>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should render component without prop title', () => {
        const newProps = { ...props, title: '' }
        const component = renderer
            .create(<ExerciseVideoPrev {...newProps}></ExerciseVideoPrev>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without src prop', () => {
      
        const newProps = { ...props, src: '' }
        const component = renderer
            .create(<ExerciseVideoPrev {...newProps}></ExerciseVideoPrev>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without srcImg prop', () => {
        const newProps = { ...props, srcImg: '' }
        const component = renderer
            .create(<ExerciseVideoPrev {...newProps}></ExerciseVideoPrev>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component with inactive prop', () => {
        const newProps = { ...props, active: true }
        const component = renderer
            .create(<ExerciseVideoPrev {...newProps}></ExerciseVideoPrev>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
})
