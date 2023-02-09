import React, { Component } from "react";
import { Container } from "../Container";
import './RecipesCategories.scss';

export type Props = {
    className?: string;
    onChangeCategory: (e: React.MouseEvent<HTMLDivElement>) => void;
};
export default class RecipesCategories extends Component<Props> {

    constructor(props: Props) {
        super(props)
    }
    

    render() {
        const { onChangeCategory } = this.props
        return (
            <Container>
                
                     <div className="categories">
                        <h3 className="recipes__title">Popular Categories</h3>

                        <div
                            className="categories__card"
                            data-categ="high-protein"
                            onClick={onChangeCategory}
                        >
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

                        <div
                            className="categories__card"
                            data-categ="vegetarian"
                            onClick={onChangeCategory}
                        >
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

                        <div
                            className="categories__card"
                            data-categ="low-carb"
                            onClick={onChangeCategory}
                        >
                            <img
                                className="categories__img"
                                src="https://static.privato.chloeting.com/recipes/61fb8ca6e75e851db8981687/images/low-carb-high-protein-waffles---gf-square.webp"
                                alt="Low Carb"
                            />
                            <div className="categories-desc">
                                <div className="categories-title">Low Carb</div>
                                <div className="categories-description">
                                    100 recipes
                                </div>
                            </div>
                        </div>

                        <div
                            className="categories__card"
                            data-categ="dairy-free"
                            onClick={onChangeCategory}
                        >
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
            </Container>
   ) }
}
    


