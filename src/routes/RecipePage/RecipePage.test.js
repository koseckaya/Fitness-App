import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { RecipeContext } from '../../components/utils/contexts/RecipeContext'

import RecipePage from './RecipePage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ recipeId: 1 }),
}));

describe('RecipePage component', () => {
    it('renders correctly', () => {
        const defaultContextValue = {
            category: 'alcohol-free',
            recipes: {},
            setCategory: jest.fn(),
            setRecipes: jest.fn(),
        }
        const tree = renderer
            .create(
                <Router>
                    <RecipeContext.Provider value={defaultContextValue}>
                        <RecipePage />
                    </RecipeContext.Provider>
                </Router>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
