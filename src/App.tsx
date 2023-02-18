import React from 'react';
import { RouterProvider } from "react-router-dom";
import { RecipeContextType, RecipeContextItems, recipeData } from './data';
import { modifyData } from './helpers/helpers';
import { router } from './index';
import { getRecipes } from './Services/apiService';


interface IProps {}
interface IState extends RecipeContextType{}
  
export const RecipeContext = React.createContext<Partial<RecipeContextType>>({
  recipes: {},
  setRecipes: () => {}
})

class App extends React.Component<IProps,IState > {
    constructor(props: any) {
        super(props);
        this.state = {
            category: 'alcohol-free',
            recipes: {},
            setCategory: this.setCategory,
            setRecipes: this.setRecipes,
        };
    }

    componentDidMount(): void {
         getRecipes({category: this.state.category})
            .then((data) => {
                const modData = modifyData(data);
                this.setRecipes(modData, true);
            })
            .catch(() => {
                const modData = modifyData(recipeData);
                this.setRecipes(modData, true);
            });
    }
    setCategory = (category: string) => {
        this.setState({ category: category })
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