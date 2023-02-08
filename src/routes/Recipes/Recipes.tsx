import React, { Component } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { RecipeCard } from "../../components/RecipeCard";
//import { getRecipes } from '../../Services/apiService';
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

interface IProps {}
interface IState {
    items: RecipeApi[];
    page: number;
    oneRecipe: RecipeItem[];
    hasMore: boolean;
}

export class Recipes extends Component<IProps, IState> {
    state: IState = {
        items: [],
        page: 1,
        oneRecipe: [],
        hasMore: true,
    };
    static contextType = RecipeContext;

    componentDidMount() {
        // setRecipes(recipeData);
        // this.setState({ items: recipeData });

        //this.fetchData(1);
        // getRecipes()
        // .then((data) => {
        //     console.log("getRecipes", data);
        // });

        this.fetchData(1);
    }

    fetchData = (page: number) => {
        const { setRecipes } = this.context as RecipeContextType;
        const promice = new Promise<RecipeApi[]>((res, rej) => {
            setTimeout(() => {
                res(recipeData);
            }, 1500);
        });
        promice.then((data: RecipeApi[]) => {
            const dataObj = data.reduce((acc: RecipeContextItems, item) => {
                acc[item.recipe.url + new Date().toISOString()] = item;
                return acc;
            }, {});
            setRecipes(dataObj);
        });
    };

    componentDidUpdate(
        prevProps: Readonly<IProps>,
        prevState: Readonly<IState>,
        snapshot?: any
    ): void {}

    handleNext = async () => {
        await this.fetchData(1);
    };

    render() {
        const { recipes: items } = this.context as RecipeContextType;
        console.log("items", Object.keys(items).length);
        if (Object.keys(items).length === 0) {
            return null;
        }
        const value6 = Object.values(items)[6];
        const latestRecept = value6.recipe;
        const latestReceptArr = value6.recipe.url.split("/");
        const latestReceptUrl = latestReceptArr[latestReceptArr.length - 2];

        return (
          <Container>
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
                                {latestRecept.ingredientLines?.map((item) => (
                                    <div className="latest__card-text">
                                        {item}
                                    </div>
                                ))}
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
                <Link to={"/recipes"}>
                  <div className="categories__card">
                      <img
                          className="categories__img"
                          src='https://static.privato.chloeting.com/recipes/61ff731b2a18c23f7d7f942e/images/healthy-crispy-baked-chicken-nuggets-square.webp'
                          alt='High Protein'
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
                </Link>
                <Link to={"/recipes"}>
                  <div className="categories__card">
                      <img
                          className="categories__img"
                          src='https://static.privato.chloeting.com/recipes/6200ef551002f8372e72421a/images/rainbow-falafel-salad-bowl-square.webp'
                          alt='Vegetarian'
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
                </Link>
                <Link to={"/recipes"}>
                  <div className="categories__card">
                      <img
                          className="categories__img"
                          src='https://static.privato.chloeting.com/recipes/61fb8ca6e75e851db8981687/images/low-carb-high-protein-waffles---gf-square.webp'
                          alt='Low Carb'
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
                </Link>
                <Link to={"/recipes"}>
                  <div className="categories__card">
                      <img
                          className="categories__img"
                          src='https://static.privato.chloeting.com/recipes/6200e7e41002f8372e723e76/images/5-ingredient-creamy-tomato-lentil-curry-square.webp'
                          alt='Dairy-Free'
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
                </Link>
              </div>
            </div>

                <h3 className="recipes__title">All Recipes</h3>
                <div className="recipes__container">
                    {/* {Object.values(items).map((i) => {
                        const arrUrl = i.recipe.url.split("/");
                        const url = arrUrl[arrUrl.length - 2];

                        <Link to={"/recipes/" + url}>
                            <RecipeCard
                                label={i.recipe.label}
                                imgUrl={i.recipe.image}
                                calories={i.recipe.calories}
                            />
                        </Link>
                    })} */}
                </div>
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
                        const arrUrl = i.recipe.url.split("/");
                        const url = arrUrl[arrUrl.length - 2];

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
