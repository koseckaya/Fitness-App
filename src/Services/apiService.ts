
import { APP_ID, APP_KEY, NUTRITION_ID, NUTRITION_KEY } from './../key';
import axios from "axios";
import { RecipeApi } from '../data';
import { categoryMappingType } from './types';


const categoryMapping: categoryMappingType = {
    'alcohol-free': 'health',
    'dairy-free': 'health',
    'vegetarian': 'health',
    'low-carb': 'diet',
    'high-protein': 'diet',

}

export async function getRecipes({
    category = 'alcohol-free',
    search = '',
    from = 0,
    to = 20
}):  Promise<RecipeApi[]> {
    let url = `https://api.edamam.com/search?app_id=${APP_ID}` + 
        `&app_key=${APP_KEY}&from=${from}&to=${to}` +
        `&${categoryMapping[category]}=${category}&q=${search}`;
    
    const res = await axios.get(url)
    return res.data.hits
}

export async function getNutrients(search: string) {
    let url = `https://api.edamam.com/api/nutrition-data?app_id=${NUTRITION_ID}&app_key=${NUTRITION_KEY}&nutrition-type=cooking&ingr=${search}`;

    const res = await axios.get(url)
    return res.data
}
