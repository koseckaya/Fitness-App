import React from 'react';
import { RecipeContextType } from '../../../data';

export const RecipeContext = React.createContext<Partial<RecipeContextType>>({
  recipes: {},
  setRecipes: () => {}
})

