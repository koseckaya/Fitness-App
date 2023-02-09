//@ts-nocheck
import { APP_ID, APP_KEY } from './../key';
import axios from "axios";



export async function getRecipes({
    param = 'alcohol-free',
    search = '',
    from = 0,
    to = 20
}): RecipeApi[] {
    let url = `https://api.edamam.com/search?app_id=${APP_ID}` + 
        `&app_key=${APP_KEY}&from=${from}&to=${to}` +
        `&health=${param}&q=${search}`;
    
    const res = await axios.get(url)
    return res.data.hits
}

