export const getRecipeId = (shareAs: string): string => {
    const arrUrl = shareAs.split("recipe/");
    const url = arrUrl[1].split('/')[0];
    return url
}