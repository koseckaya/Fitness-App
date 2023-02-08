
import React from 'react';
import { RouterProvider } from "react-router-dom";
import { RecipeContextType, RecipeContextItems } from './data';
import { router } from './index';



export const RecipeContext = React.createContext<Partial<RecipeContextType>>({
  recipes: {},
  setRecipes: () => {}
})

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            recipes: {},
            setRecipes: this.setRecipes,
        };
    }

    setRecipes = (recipes: RecipeContextItems, resetData = false) => {
        
        if (resetData) {
            this.setState((state: RecipeContextType) => ({
                recipes: {...recipes},
            }));
        } else {
            this.setState((state: RecipeContextType) => ({
            recipes: {...state.recipes, ...recipes},
            }));
        }
    };

    render() {
        return (
            <RecipeContext.Provider value={this.state} >
                <RouterProvider router={router} />
            </RecipeContext.Provider>
        );
    }
}

export { App };