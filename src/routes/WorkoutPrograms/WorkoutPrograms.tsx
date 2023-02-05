
import React, { Component } from 'react'
import { Container } from '../../components/Container'
import { ErrorComponent } from '../../components/ErrorComponent';
import { ProgramCard } from '../../components/ProgramCard';
import { programs } from '../../data';
import './WorkoutPrograms.scss'

const FILTER_PROGRAM = [
  { key: 'all', value: 'All' },
  { key: 'weightLoss', value: 'Weight Loss' },
  { key: 'abs', value: 'Abs & Core' },
  { key: 'booty', value: 'Booty' },
  { key: 'fullBody', value: 'Full Body' },
]

export class WorkoutPrograms extends Component {

  state = {
    filterProgram: 'All',
    filterDuration: null
  };

  getFilteredPrograms = () => {
    return programs.filter(prog => {
      if (prog.type.includes(this.state.filterProgram) || this.state.filterProgram === 'All') {
        return true;
      } else {
        return false;
      }
    }).filter(prog => {
      if (!this.state.filterDuration) return true;

      if (this.state.filterDuration === 14 && prog.days <=28) {
        return true
      }
      if (this.state.filterDuration === 28 && prog.days > 28) {
        return true;
      }
      return false;
    })
  }

  handleChangeFilter = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    const prog = target.dataset.program
    this.setState({
      filterProgram: prog
    });
  }

  handleChangeDuration = (event: React.ChangeEvent) => {
    const target = event.target as HTMLSelectElement
    const duration = +target.value
     this.setState({
      filterDuration: duration
    });
  }

  render() {
    const filteredPrograms = this.getFilteredPrograms();
    return (
      <Container>
        <div className='filter'>
          <div className='filters'>
            {FILTER_PROGRAM.map(program => { 
              if (this.state.filterProgram === program.value) {
                return <span className='active'
                  key = {program.key}
                  data-program={program.value} onClick={this.handleChangeFilter}>{program.value}</span>
              } else {
                return <span data-program={program.value}
                  key = {program.key}
                  onClick={this.handleChangeFilter}>
                  {program.value}</span>
              }
              
            }) }
          </div>
          <select onChange={this.handleChangeDuration}>
            <option value='0'>Duration</option>
            <option value='14'>14 - 28 days</option>
            <option value='28'>More 28 days</option>
          </select>
        </div>

        <div className='programs-container'>
          {filteredPrograms.length !== 0 ? (
              filteredPrograms.map((i) => <ProgramCard title={i.title}
                image={i.imageUrl1} url={i.path} days={i.days}
                time={i.time} type={i.type} equip={i.equip} />
                )
            ) : <ErrorComponent /> }
           </div>
      </Container>
    )
  }
}