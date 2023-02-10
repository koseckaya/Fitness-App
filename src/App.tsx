
import React from 'react';
import { RouterProvider } from "react-router-dom";
import { RecipeContextType, RecipeContextItems, recipeData } from './data';
import { modifyData } from './helpers/helpers';
import { router } from './index';
import { getRecipes } from './Services/apiService';



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

    componentDidMount(): void {
         getRecipes({})
            .then((data) => {
                const modData = modifyData(data);
                this.setRecipes(modData, true);
            })
            .catch(() => {
                const modData = modifyData(recipeData);
                this.setRecipes(modData, true);
            });
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