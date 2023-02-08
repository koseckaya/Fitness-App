
import React from 'react';
import { RouterProvider } from "react-router-dom";
import { RecipeContextType, RecipeItem } from './data';
import { router } from './index';



export const RecipeContext = React.createContext<Partial<RecipeContextType>>({
  recipes: [],
  setRecipes: () => {}
})

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            recipes: [],
            setRecipes: this.setRecipes,
        };
    }

    setRecipes = (recipes: RecipeItem) => {
        this.setState(() => ({
            recipes,
        }));
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