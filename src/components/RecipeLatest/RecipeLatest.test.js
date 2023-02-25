import React from 'react';
import renderer from "react-test-renderer";
import RecipeLatest from './RecipeLatest';
//import { RecipeContext } from "../../App";

//const addItem = jest.fn()

describe("RecipeLatest component", () => {
    it('should render component with default props', () => {
        const tree = renderer
            .create(
                <RecipeLatest />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})