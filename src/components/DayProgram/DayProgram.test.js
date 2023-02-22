import React from 'react';
import renderer from 'react-test-renderer';
import { DayProgram } from './DayProgram';


const props = {
    day: 1,
    videos: [],
    programId: 1,
    isCompletedDay: false,
    onDayCheck: () => { },
    onDayUncheck: () => { },
};



describe("DayProgram component", () => {
    it('should render component with default props', () => {

        const component = renderer
            .create(<DayProgram {...props}></DayProgram>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should render component without prop day', () => {
        const newProps = { ...props, day: 0 }
        const component = renderer
            .create(<DayProgram {...newProps}></DayProgram>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component with video prop', () => {
        const video = [{
            title: '5 Min Warm Up',
            src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
            srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
            duration: 5
        }]
        const newProps = { ...props, ...video }
        const component = renderer
            .create(<DayProgram {...newProps}></DayProgram>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without programId prop', () => {
        const newProps = { ...props, programId: 0 }
        const component = renderer
            .create(<DayProgram {...newProps}></DayProgram>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component with isCompletedDay prop', () => {
        const newProps = { ...props, isCompletedDay: true }
        const component = renderer
            .create(<DayProgram {...newProps}></DayProgram>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
})
