
import { FC, useContext } from "react";
import { useParams, Link } from 'react-router-dom';
import { recipeData } from "../../data";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import "./RecipePage.scss";
import { RecipeContext } from "../../components/utils/contexts/RecipeContext";

const RecipePage: FC<{}> = () => {
    const recipeContext = useContext(RecipeContext);
    let { recipeId } = useParams();

    let openRecipe;
 
    if (!recipeContext.recipes || Object.keys(recipeContext.recipes).length === 0) {
        openRecipe = recipeData[0]
    } else {
        openRecipe = Object.values(recipeContext.recipes).filter(item => {
            return item.recipe.shareAs.includes(recipeId as string);
        })[0];
    }

    const kkal = openRecipe.recipe.totalNutrients?.ENERC_KCAL.quantity;
    const fat = openRecipe.recipe.totalNutrients?.FAT.quantity;
    const prot = openRecipe.recipe.totalNutrients?.PROCNT.quantity;
    const carbs = openRecipe.recipe.totalNutrients?.CHOCDF.quantity;
    const tags = openRecipe.recipe.healthLabels?.slice(0,6)

    return (
        <Container>
            <div className='recipe-page'>
                <div className="recipe-page__side">
                    <div className="recipe__tags">
                        {tags?.map((tag, i) => <span className="recipe__tag" key={ i}>{ tag}</span>)}
                    </div>
                    <span className='recipe__title'>{openRecipe.recipe.label}</span>
                    <img src={openRecipe.recipe?.image} alt={openRecipe.recipe.url}
                        className="recipe__img" />
                    <div className="recipe__time">Cook time:
                        {openRecipe.recipe.totalTime ? ` ${openRecipe.recipe.totalTime}` : ' 5'} min</div>
                </div>

                <div className="recipe-page__main">
                    <div className="recipe__nutrition">
                        <span className="recipe__nutrition_kkal">
                            Calories: { kkal ?  `${Math.ceil(kkal)} kkal` :'100 kkal' }
                        </span>
                        <span className="recipe__nutrition_fat">
                            Fat: { fat ?  `${Math.ceil(fat)} g` :'10 g' }
                        </span>
                        <span className="recipe__nutrition_prot">
                            Protein: { prot ?  `${Math.ceil(prot)} g` :'10 g' }
                        </span>
                        <span className="recipe__nutrition_carbs">
                            Carbs: { carbs ?  `${Math.ceil(carbs)} g` :'10 g' }
                        </span>
                    </div>
                    <div className="recipe__ingredients">
                        <div className="recipe__ingredient_title">Ingredients:</div>
                        {openRecipe.recipe.ingredientLines?.map((item, i) => {
                            return <li className="recipe__ingredient" key={ i}>{item}</li>
                        })}
                    </div>
                    <div className="recipe__notes">
                        <div className="recipe__notes_title">NOTES</div>
                        <ul className="recipe__notes_list">
                            <li className="recipe__notes_text">Serve this dip with your favorite fresh vegetable sticks! I recommend cucumber, carrot, bell peppers and cherry tomatoes. It’s also great with crackers!</li>
                            <li className="recipe__notes_text">The dip will keep in an airtight container in the fridge for up to 3 days. It will taste even more delicious after the flavors have time to meld together!</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="recipe-page__button">
                <Link to="/recipes/alcohol-free"><Button content="View All Recipes"
                    type={Button.TYPES.DEFAULT} />
                </Link>
            </div>
        </Container>
    );
};

export default RecipePage;
