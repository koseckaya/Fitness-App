import React, { Component } from 'react'
import { Container } from '../components/Container'
import { APP_ID, APP_KEY } from './../key';

export class Recipes extends Component {
  state = {
    items: []
  }

componentDidMount(): void {
  const url = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`;

  }
  

  render() {
    return (
      <Container>
        Recipes
      </Container>
    )
  }
}