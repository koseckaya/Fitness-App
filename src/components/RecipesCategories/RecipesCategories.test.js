import React from 'react';
import renderer from 'react-test-renderer';
import RecipesCategories from './RecipesCategories';



describe("RecipesCategories component", () => {
    it('should render component with default props', () => {
        const tree = renderer
            .create(<RecipesCategories /> )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})