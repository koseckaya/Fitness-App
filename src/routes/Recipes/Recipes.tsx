
import React, { Component } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { RecipeCard } from "../../components/RecipeCard";
import {
    RecipeApi,
    RecipeContextItems,
    RecipeContextType,
    recipeData,
    RecipeItem,
} from "./../../data";
import "./Recipes.scss";
import { Link } from "react-router-dom";
import { RecipeContext } from "../../App";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRecipes } from "./../../Services/apiService";
import { getRecipeId } from './../../helpers/helpers';

interface IProps {}
interface IState {
  items: RecipeApi[];
  page: number;
  oneRecipe: RecipeItem[];
  hasMore: boolean;
  search: string;
  from: number;
  to: number;
  category: string;
}

const ITEMS_PER_PAGE = 20;

export class Recipes extends Component<IProps, IState> {
    state: IState = {
      items: [],
      page: 1,
      oneRecipe: [],
      hasMore: true,
      search: "",
      from: 0,
      to: 20,
      category: 'alcohol-free'
    };
    static contextType = RecipeContext;

    componentDidMount() {
        // setRecipes(recipeData);
        // this.setState({ items: recipeData });

        // this.fetchData(1);
        // getRecipes()
        // .then((data) => {
        //     console.log("getRecipes", data);
        // });
        this.fetchData();
    }

    fetchData = (reset = false) => {
      const { setRecipes } = this.context as RecipeContextType;
      const config = {
        from: this.state.from,
        to: this.state.to,
        search: this.state.search,
        category: this.state.category};
      getRecipes(config).then((data) => {
        console.log('data', data);
        const modData = this.modifyData(data)
         setRecipes(modData, reset);
      }).catch(() => {
        const modData = this.modifyData(recipeData)
        setRecipes(modData, reset);
      })

        // const promice = new Promise<RecipeApi[]>((res, rej) => {
        //     setTimeout(() => {
        //         res(recipeData);
        //     }, 3500);
        // });
        // promice.then((data: RecipeApi[]) => {
        //     const modData = this.modifyData(data);
        //     setRecipes(modData);
        // });
    };

  modifyData = (data: RecipeApi[]) => {
      
    const dataObj = data.reduce((acc: RecipeContextItems, item) => {
          const idArr = getRecipeId(item.recipe.shareAs)
            acc[idArr + new Date().toISOString()] = item;
            return acc;
        }, {});
        return dataObj;
    };

    // componentDidUpdate(
    //     prevProps: Readonly<IProps>,
    //     prevState: Readonly<IState>,
    //     snapshot?: any
    // ): void {}

    handleNext =  () => {
      this.setState((state) => {
        return {
          from: state.from + ITEMS_PER_PAGE,
          to: state.to + ITEMS_PER_PAGE}
      })
      this.fetchData();
    };
    handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        this.setState({
          search: val,
        });
    };
    onSubmit = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        this.setState({
          from: 0, 
          to: ITEMS_PER_PAGE,
        });
        
        this.fetchData(true);
  };
  handleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
  
      let categ = target.getAttribute('data-categ')
      console.log('category',e.currentTarget,  categ);
      if (!categ) return;
    this.setState({
      category: categ,
      from: 0, 
      to: ITEMS_PER_PAGE, },
    () => {this.fetchData(true);})

  }

    render() {
        const { recipes: items } = this.context as RecipeContextType;
        if (Object.keys(items).length === 0) {
            return null;
        }
        const value6 = Object.values(items)[6];
        const latestRecept = value6.recipe;
        const latestReceptUrl = getRecipeId(value6.recipe.shareAs)

        return (
            <Container>
                <div className="recipes__search">
                    <form onSubmit={this.onSubmit}>
                        <input
                            className="recipes__search_input"
                            placeholder="Search"
                            value={this.state.search}
                            onChange={this.handleSearchChange}
                        />
                        <span
                            className="recipes__search_zoom"
                            onClick={this.onSubmit}
                        >
                            🔎︎
                        </span>
                    </form>
                </div>
                <div className="recipes__top">
                    <div className="latest">
                        <h3 className="recipes__title">Latest Recipe</h3>
                        <div className="latest__card">
                            <Link to={"/recipes/" + latestReceptUrl}>
                                <img
                                    className="latest__card-img"
                                    src={latestRecept.image}
                                    alt={latestRecept.label}
                                />
                            </Link>

                            <div className="latest__card-desc">
                                <div className="latest__card-title">
                                    {latestRecept.label}
                                </div>
                                <div className="latest__card-description">
                                    {latestRecept.ingredientLines?.map(
                                        (item) => (
                                            <div className="latest__card-text">
                                                {item}
                                            </div>
                                        )
                                    )}
                                </div>
                                <Link to={"/recipes/" + latestReceptUrl}>
                                    <Button
                                        content="View Recipe"
                                        type={Button.TYPES.PRIMARY}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="categories">
                        <h3 className="recipes__title">Popular Categories</h3>
                        
                        <div className="categories__card"
                          data-categ="high-protein"
                          onClick={this.handleCategory}>
                                        <img
                                            className="categories__img"
                                            src="https://static.privato.chloeting.com/recipes/61ff731b2a18c23f7d7f942e/images/healthy-crispy-baked-chicken-nuggets-square.webp"
                                            alt="High Protein"
                                        />
                                        <div className="categories-desc">
                                            <div className="categories-title">
                                                High Protein
                                            </div>
                                            <div className="categories-description">
                                                100 recipes
                                            </div>
                                        </div>
                        </div>
                              
                        <div className="categories__card"
                          data-categ="vegetarian"
                          onClick={this.handleCategory}>
                                        <img
                                            className="categories__img"
                                            src="https://static.privato.chloeting.com/recipes/6200ef551002f8372e72421a/images/rainbow-falafel-salad-bowl-square.webp"
                                            alt="Vegetarian"
                                        />
                                        <div className="categories-desc">
                                            <div className="categories-title">
                                                Vegetarian
                                            </div>
                                            <div className="categories-description">
                                                100 recipes
                                            </div>
                                        </div>
                        </div>
                            
                        <div className="categories__card"
                          data-categ="low-carb"
                          onClick={this.handleCategory}>
                                        <img
                                            className="categories__img"
                                            src="https://static.privato.chloeting.com/recipes/61fb8ca6e75e851db8981687/images/low-carb-high-protein-waffles---gf-square.webp"
                                            alt="Low Carb"
                                        />
                                        <div className="categories-desc">
                                            <div className="categories-title">
                                                Low Carb
                                            </div>
                                            <div className="categories-description">
                                                100 recipes
                                            </div>
                                        </div>
                        </div>
                              
                        <div className="categories__card"
                          data-categ="dairy-free"
                          onClick={this.handleCategory}>
                                        <img
                                            className="categories__img"
                                            src="https://static.privato.chloeting.com/recipes/6200e7e41002f8372e723e76/images/5-ingredient-creamy-tomato-lentil-curry-square.webp"
                                            alt="Dairy-Free"
                                        />
                                        <div className="categories-desc">
                                            <div className="categories-title">
                                                Dairy Free
                                            </div>
                                            <div className="categories-description">
                                                100 recipes
                                            </div>
                                        </div>
                        </div>
                            </div>
                        </div>

                <h3 className="recipes__title">All Recipes</h3>
                <InfiniteScroll
                    className="recipes__container"
                    dataLength={Object.keys(items).length}
                    next={this.handleNext}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {Object.values(items).map((i) => {
                       
                        const url = getRecipeId(i.recipe.shareAs)
                       
                        return (
                            <Link to={"/recipes/" + url}>
                                <RecipeCard
                                    label={i.recipe.label}
                                    imgUrl={i.recipe.image}
                                    calories={i.recipe.calories}
                                    key={url}
                                />
                            </Link>
                        );
                    })}
                </InfiniteScroll>
            </Container>
        );
    }
}
