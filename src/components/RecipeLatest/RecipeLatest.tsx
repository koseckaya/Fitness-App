import React, { Component } from "react";
import { Button } from "../../components/Button";

import {
    RecipeApi,
    RecipeContextType,
    RecipeItem,
} from "./../../data";
import "./RecipeLatest.scss";
import { Link } from "react-router-dom";
import { RecipeContext } from "../../App";
import { getRecipeId } from "./../../helpers/helpers";


export interface Props {}
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


export default class RecipeLatest extends Component<Props, IState> {
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

    render() {
        const { recipes: items } = this.context as RecipeContextType;
        if (Object.keys(items).length === 0) {
            return null;
        }
        const value6 = Object.values(items)[6];
        const latestRecept = value6.recipe;
        const latestReceptUrl = getRecipeId(value6.recipe.shareAs);

        return (
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
                                <div className="latest__card-text">{item}</div>
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
        );
    }
}
