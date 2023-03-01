import React, { Component } from "react";
import { Container } from "../../components/Container";
import { RecipeCard } from "../../components/RecipeCard";
import {
    RecipeApi,
    RecipeContextType,
    recipeData,
    RecipeItem,
} from "./../../data";
import "./Recipes.scss";
import { Link, NavigateFunction } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component/dist";
import { getRecipes } from "./../../Services/apiService";
import { getRecipeId, modifyData } from "./../../helpers/helpers";
import { RecipeLatest } from "../../components/RecipeLatest";
import RecipesCategories from "../../components/RecipesCategories/RecipesCategories";
import { RecipeContext } from "../../components/utils/contexts/RecipeContext";

interface IProps {
    navigate: NavigateFunction;
}
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
        category: "alcohol-free",
    };
    static contextType = RecipeContext;

    componentDidMount() {
        const { recipes: items, category } = this.context as RecipeContextType;
        if (Object.keys(items).length === 0) {
            this.fetchData(true, category);
        }
    }
    fetchData = (reset = false, category = "") => {
        const { setRecipes, category: categoryContext } = this
            .context as RecipeContextType;
        const config = {
            from: this.state.from,
            to: this.state.to,
            search: this.state.search,
            category: category || categoryContext,
        };
        getRecipes(config)
            .then((data) => {
                const modData = modifyData(data);
                setRecipes(modData, reset);
            })
            .catch(() => {
                const modData = modifyData(recipeData);
                setRecipes(modData, reset);
            });
    };

    handleNext = () => {
        this.setState(
            (state) => {
                return {
                    from: state.from + ITEMS_PER_PAGE,
                    to: state.to + ITEMS_PER_PAGE,
                };
            },
            () => {
                this.fetchData();
            }
        );
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
        let categ = target.getAttribute("data-categ");
        if (!categ) return;
        const { setCategory } = this.context as RecipeContextType;
        setCategory(categ);
        this.setState({ from: 0, to: ITEMS_PER_PAGE }, () => {
            this.fetchData(true);
        });
        this.props.navigate(`/recipes/${categ}`);
    };

    render() {
        const { recipes: items, category } = this.context as RecipeContextType;
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
                            🔎︎{" "}
                        </span>
                    </form>
                </div>
                
                        <div className="recipes__top">
                            <RecipeLatest />
                            <RecipesCategories
                                onChangeCategory={this.handleCategory}
                            />
                        </div>
                {Object.keys(items).length !== 0 ? (
                    <>
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
                            {Object.values(items).map((i, index) => {
                                const url = getRecipeId(i.recipe.shareAs);

                                return (
                                    <Link
                                        to={`/recipes/${category}/${url}`}
                                        key={index}
                                    >
                                        <RecipeCard
                                            label={i.recipe.label}
                                            imgUrl={i.recipe.image}
                                            calories={i.recipe.calories}
                                        />
                                    </Link>
                                );
                            })}
                        </InfiniteScroll>
                    </>
                ) : <div>Nothing to Find. Try again</div>}
            </Container>
        );
    }
}
