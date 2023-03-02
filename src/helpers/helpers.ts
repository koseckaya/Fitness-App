import { RecipeApi } from "../data";
import { RecipeContextItems } from './../data';

export const getRecipeId = (shareAs: string): string => {
    const arrUrl = shareAs.split("recipe/");
    const url = arrUrl[1].split('/')[0];
    return url
}

export const modifyData = (data: RecipeApi[]) => {
    const dataObj = data.reduce((acc: RecipeContextItems, item) => {
        const idArr = getRecipeId(item.recipe.shareAs);
        acc[idArr + new Date().toISOString()] = item;
        return acc;
    }, {});
    return dataObj;
};
