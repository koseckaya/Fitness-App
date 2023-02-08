import { APP_ID, APP_KEY } from './../key';
import axios from "axios";

const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&diet=balanced&health=alcohol-free`;

export function getRecipes(newUrl = '') {
    let requestUrl = url;
    if (newUrl.length) {
        requestUrl = newUrl;
    }
    return axios.get(requestUrl)
}