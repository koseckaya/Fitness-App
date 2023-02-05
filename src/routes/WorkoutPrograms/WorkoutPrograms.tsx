import React, { Component } from 'react'
import { Container } from '../../components/Container'
import { ErrorComponent } from '../../components/ErrorComponent';
import { ProgramCard } from '../../components/ProgramCard';
import { Program, programs } from '../../mockData';
import './WorkoutPrograms.scss'

export class WorkoutPrograms extends Component {
  render() {
    return (
      <Container>
        <div>Filters</div>
        <div className='programs-container'>
          {programs.length !== 0 ? (
              
              programs.map((i: Program) => <ProgramCard title={i.title}
                image={i.image} url={i.url} duration={i.duration}
                time={i.time} type={i.type} equipment={i.equipment} />
                )
            ) : <ErrorComponent /> }
           </div>
      </Container>
    )
  }
}