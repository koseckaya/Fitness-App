import React from 'react'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from '../components/ErrorComponent';
import { programs } from '../mockData';
import { ProgramCard } from '../components/ProgramCard';

export const Home = () => {
    const navigate = useNavigate();
   

 function handleClick() {
    navigate("/programs");
  }

    return (
        <Container>
            {programs.length !== 0 ? (
                <Section
                    title={'Free Workout Programs'}
                    btnText={'View All Programs'}
                    onClick={handleClick}
                >
                {programs.map(i => <ProgramCard title={i.title}
                    image={i.image} url={i.url} />
                )}
                </Section>
            ) : (<ErrorComponent />) }
           
      </Container>
    )
  
}