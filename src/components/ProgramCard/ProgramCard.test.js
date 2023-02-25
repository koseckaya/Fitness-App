import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import ProgramCard from './ProgramCard';

const props = {
    title: "Weight Loss Challenge",
    image: "https://static.chloeting.com/programs/63ae15573e8cb6226b0c40c0/971c80f0-87c8-11ed-8684-75e08be900e2.jpeg",
    url: "https://static.chloeting.com/programs/63ae15573e8cb6226b0c40c0/97331630-87c8-11ed-8684-75e08be900e2.jpeg",
    days: 28,
    time: [20, 50],
    type: ["Weight Loss", "Full Body"],
    equip: ["Fitness Mat", "Dumbbells", "Resistance Bands"],
};

describe("ProgramCard component", () => {
    it('should render component with default props', () => {
        const component = renderer
            .create(<Router><ProgramCard {...props}></ProgramCard></Router>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should render component without prop image', () => {
        const newProps = { ...props, image: '' }
        const component = renderer
            .create(<Router><ProgramCard {...newProps}></ProgramCard></Router>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without prop title', () => {
        const newProps = { ...props, title: '' }
        const component = renderer
            .create(<Router><ProgramCard {...newProps}></ProgramCard></Router>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without prop url', () => {
        const newProps = { ...props, url: '' }
        const component = renderer
            .create(<Router><ProgramCard {...newProps}></ProgramCard></Router>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without prop days', () => {
        const newProps = { ...props, days: 0 }
        const component = renderer
            .create(<Router><ProgramCard {...newProps}></ProgramCard></Router>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without prop time', () => {
        const newProps = { ...props, time: [] }
        const component = renderer
            .create(<Router><ProgramCard {...newProps}></ProgramCard></Router>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without prop equip', () => {
        const newProps = { ...props, equip: [] }
        const component = renderer
            .create(<Router><ProgramCard {...newProps}></ProgramCard></Router>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render component without prop type', () => {
        const newProps = { ...props, type: [] }
        const component = renderer
            .create(<Router><ProgramCard {...newProps}></ProgramCard></Router>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
})