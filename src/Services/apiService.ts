//@ts-nocheck
import { APP_ID, APP_KEY } from './../key';
import axios from "axios";

const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&diet=balanced&health=alcohol-free`;


export function getRecipes(newUrl = '') {
    let requestUrl = url;
    if (newUrl.length) {
        requestUrl = newUrl;
    }
    console.log('requestUrl', requestUrl);
    return axios.get(requestUrl, {
        transformRequest: (data, headers) => {
            console.log(headers)
            return data;
        }
    })
}

export async function getRecipesOld(search = ''): RecipeApi[] {
    const urlOld = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free`;
    console.log('requestUrl', urlOld);
    const res = await axios.get(urlOld)
    console.log('res.data', res.data);
    return res.data.hits
}