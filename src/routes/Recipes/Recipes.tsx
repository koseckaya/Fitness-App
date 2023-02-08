

import React, { Component } from 'react'
import { Button } from '../../components/Button';
import { Container } from '../../components/Container'
import { RecipeCard } from '../../components/RecipeCard';
//import { getRecipes } from '../../Services/apiService';
import {  RecipeApi, RecipeContextType, recipeData, RecipeItem, } from './../../data';
import './Recipes.scss';
import { Link } from 'react-router-dom';
import {RecipeContext} from '../../App'

interface IProps {}
interface IState {
  items: RecipeApi[];
  page: number;
  oneRecipe: RecipeItem[];
}

export class Recipes extends Component<IProps, IState> {
  
 
  state: IState = {
    items: [],
    page: 1,
    oneRecipe: []
  }

  static contextType = RecipeContext;
 

  componentDidMount() {
    const { setRecipes } = this.context as RecipeContextType;
    setRecipes(recipeData)
    this.setState({ items: recipeData})
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {}
  
  handleNext = () => {
    
  }

  render() {

  const { items } = this.state;
  console.log('items', items);
  if (items.length === 0) {
    return null;
  }

    const latestRecept = items[6].recipe;
    const latestReceptArr = items[6].recipe.url.split('/')
    const latestReceptUrl = latestReceptArr[latestReceptArr.length - 2]

    

    return (
      <Container>
        <div className='latest'>
          <h3 className='recipes__title'>Latest Recipe</h3>
          <div className='latest__card'>
            <Link to={'/recipes/' + latestReceptUrl}>
              <img className='latest__card-img' src={latestRecept.image} alt={latestRecept.label} />
            </Link>
            
             <div className='latest__card-desc'>
              <div className='latest__card-title'>{latestRecept.label}</div>
              <div className='latest__card-description'>
               
                {latestRecept.ingredientLines?.map(item => <div className='latest__card-text'>{item}</div>) }
              </div>
              <Link to={'/recipes/' + latestReceptUrl}>
                <Button content='View Recipe' type={Button.TYPES.PRIMARY} />
              </Link>
            </div>
              
          </div>
        </div>
        


        <h3 className='recipes__title'>All Recipes</h3>
        <div className='recipes__container'>
          {items.map(i => {
            const arrUrl = i.recipe.url.split('/');
            const url = arrUrl[arrUrl.length - 2];
            
            return (
              <Link to={ '/recipes/' + url}>
                <RecipeCard label={i.recipe.label} imgUrl={i.recipe.image}
                  calories={i.recipe.calories} />
              </Link>
            )
          })}
        </div>

        <div className='pagination'>
          <span onClick={this.handleNext}>Next</span>
          <span>Prev</span>
        </div>
      </Container>
    )
  }
}