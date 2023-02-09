import React from 'react'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from '../components/ErrorComponent';
import { programs } from '../data'
import { ProgramCard } from '../components/ProgramCard';
import { RecipeLatest } from '../components/RecipeLatest';
import RecipesCategories from '../components/RecipesCategories/RecipesCategories';

export const Home = () => {
    const navigate = useNavigate();
   

    function handleClick() {
        navigate("/programs");
    }
    function handleRecipes() {
        navigate("/recipes/alcohol-free");
    }
     function handleNavigateCategory(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.currentTarget;
         let categ = target.getAttribute("data-categ");
         console.log('categ');
         navigate(`/recipes/${categ}`);
    }

    return (
        <Container>
            {programs.length !== 0 ? (
                <Section
                    title={'Free Workout Programs'}
                    btnText={'View All Programs'}
                    onClick={handleClick}
                >
                    <div className='section__programs'>
                    {[...programs].slice(0, 3).map(i => <ProgramCard title={i.title}
                        image={i.imageUrl1} url={i.path} key={i.id} />
                    
                )}</div>
                </Section>
            ) : (<ErrorComponent />)}
            
            <Section title={'Recipes'}
                btnText={'View More Recipes'}
                onClick={handleRecipes}>
                <div className='section__recipes'>
                    <RecipeLatest />
                    <RecipesCategories onChangeCategory={handleNavigateCategory} />
                </div>
            </Section>
           
      </Container>
    )
  
}