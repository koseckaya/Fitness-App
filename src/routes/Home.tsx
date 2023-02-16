import React from 'react'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from '../components/ErrorComponent';
import { programs } from '../data'
import { ProgramCard } from '../components/ProgramCard';
import { RecipeLatest } from '../components/RecipeLatest';
import RecipesCategories from '../components/RecipesCategories/RecipesCategories';
import { workoutVideosData } from '../data';
import { WorkoutVideoComponent } from '../components/WorkoutVideoComponent';

export const Home = () => {
    const navigate = useNavigate();
   

    function handleClick() {
        navigate("/programs");
    }
    function handleVideosClick() {
        navigate("/videos");
    }
    function handleRecipes() {
        navigate("/recipes/alcohol-free");
    }
     function handleNavigateCategory(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.currentTarget;
         let categ = target.getAttribute("data-categ");
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
            <Section
                    title={'Recent Workout Videos'}
                    btnText={'View All Workout Videos'}
                    onClick={handleVideosClick}
                >
                    <div className='section__videos'>
                    {[...workoutVideosData].slice(0, 3).map(video => 
                    <WorkoutVideoComponent key={video.id} title={video.title} src={video.src} srcImg={video.srcImg} duration={video.duration}/>
                    
                )}</div>
            </Section>
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