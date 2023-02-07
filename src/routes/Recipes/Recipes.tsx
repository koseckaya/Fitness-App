
//@ts-nocheck
import React, { Component } from 'react'
import { Button } from '../../components/Button';
import { Container } from '../../components/Container'
import { RecipeCard } from '../../components/RecipeCard';
import { getRecipes } from '../../Services/apiService';
import {  RecipeApi, recipeData, RecipeItem, } from './../../data';
import './Recipes.scss';
import { Link } from 'react-router-dom';

interface IProps {}
interface IState {
  items: RecipeApi[];
}

export class Recipes extends Component<IProps, IState> {
  
 
  state: IState = {
    items: []
  }

  componentDidMount() {
  // const recipesData = getRecipes().then(data => {
  //   console.log('data', data.data.hits);
  //   this.setState({ items: data.data.hits })
    //  })
   this.setState({ items: recipeData })
   
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {}
  
  render() {

    

  const { items } = this.state;
  console.log('items', items);
  if (items.length === 0) {
    return null;
  }

    const latestRecept = items[6].recipe;
    const latestReceptUrl = latestRecept.label.toLowerCase().split(' ').join('-')

    function handleClick() {
        navigate(`${latestReceptUrl}`);
    }

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
                <div className='latest__card-text'>text</div>
                <div className='latest__card-text'>text</div>
                {latestRecept.ingredientLines.map(item => <div className='latest__card-text'>{item}</div>) }
              </div>
              <Button content='View Recipe' type={Button.TYPES.PRIMARY}  onClick={ handleClick }/>
            </div>
              
          </div>
        </div>
        


        <h3 className='recipes__title'>All Recipes</h3>
        <div className='recipes__container'>
          {items.map(i => {
            const label = i.recipe.label;
            const url = label.toLowerCase().split(' ').join('-');
            
            return (
              <Link to={ '/recipes/' + url}>
                <RecipeCard label={i.recipe.label} imgUrl={i.recipe.image} calories={i.recipe.calories} />
              </Link>
            )
          })}
          
        </div>
      </Container>
    )
  }
}