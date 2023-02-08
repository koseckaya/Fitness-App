import { FC, useContext } from "react";
import "./RecipePage.scss";
import { RecipeContext } from '../../App';
import { useParams } from 'react-router-dom';
import { recipeData } from "../../data";
import { Container } from "../../components/Container";


export type Props = {
    className?: string;
};

const RecipePage: FC<Props> = ({ className }: Props) => {
    const recipeContext = useContext(RecipeContext);
    let { recipeId } = useParams();


    let openRecipe;
    if (!recipeContext.recipes) {
        openRecipe = recipeData[0]
    } else {
    openRecipe = recipeContext.recipes.filter(item => {
        return item.recipe.url.includes(recipeId as string);
    })[0];
    }
    const kkal = openRecipe.recipe.totalNutrients?.ENERC_KCAL.quantity;
    const fat = openRecipe.recipe.totalNutrients?.FAT.quantity;
    const prot = openRecipe.recipe.totalNutrients?.PROCNT.quantity;
    const carbs = openRecipe.recipe.totalNutrients?.CHOCDF.quantity;
    
    return (
        <Container>
        <div className='recipe-page'>
                <span className='recipe__title'>{openRecipe.recipe.label}</span>
                <img src={openRecipe.recipe?.image} alt={openRecipe.recipe.url} />
                <div className="recipe__nutrition">
                    <span className="recipe__nutrition_kkal">
                        { kkal ?  `${Math.ceil(kkal)} kkal` :'100 kkal' }
                    </span>
                    <span className="recipe__nutrition_fat">
                        { fat ?  `${Math.ceil(fat)} g` :'10 g' }
                    </span>
                     <span className="recipe__nutrition_prot">
                        { prot ?  `${Math.ceil(prot)} g` :'10 g' }
                    </span>
                    <span className="recipe__nutrition_chok">
                        { carbs ?  `${Math.ceil(carbs)} g` :'10 g' }
                    </span>
                </div>
                <div className="recipe__ingredients">
                    Ingredients:
                    {openRecipe.recipe.ingredientLines?.map(item => {
                        return <span>{item}</span>
                    })}
                </div>
            </div>
        </Container>
    );
};

export default RecipePage;
