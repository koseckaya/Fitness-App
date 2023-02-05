import React, { Component } from 'react'
import { Container } from '../../components/Container'
import { ErrorComponent } from '../../components/ErrorComponent';
import { ProgramCard } from '../../components/ProgramCard';
import { programs } from '../../data';
import './WorkoutPrograms.scss'

export class WorkoutPrograms extends Component {
  render() {
    return (
      <Container>
        <div className='filter'>
          <div className='filters'>
            <span className='active'>All</span>
            <span>Weight Loss</span>
            <span>Abs & Core</span>
            <span>Booty</span>
            <span>Full Body</span>
          </div>
          <select>
            <option>Duration</option>
            <option>14</option>
            <option>28</option>
          </select>
        </div>

        <div className='programs-container'>
          {programs.length !== 0 ? (
              [...programs].map((i) => <ProgramCard title={i.title}
                image={i.imageUrl1} url={i.path} days={i.days}
                time={i.time} type={i.type} equip={i.equip} />
                )
            ) : <ErrorComponent /> }
           </div>
      </Container>
    )
  }
}