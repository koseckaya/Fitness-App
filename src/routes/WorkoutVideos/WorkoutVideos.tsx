import React, { Component } from 'react'
import { Container } from '../../components/Container'
import './WorkoutVideos.scss';
import { workoutVideosData } from '../../data';
import { WorkoutVideoComponent}  from '../../components/WorkoutVideoComponent';

interface VideoTagItem {
  value: string;
  key: number;
}
interface IState {
  tags: string[];
}
export class WorkoutVideos extends Component {
  state: IState = {
    tags: ['All'],
  };

  videoTags:VideoTagItem[] = [{
    'value': 'All',
    'key': 1,
  }, {
    'value': 'Low Intensity',
    'key': 2,
  }, {
    'value': 'No Jumping',
    'key': 3,
  }, {
    'value': 'No Burpees',
    'key': 4,
  }, {
    'value': 'No Planks',
    'key': 5,
  }, {
    'value': 'Standing',
    'key': 6,
  }];

  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    let clickedTag = (e.target as HTMLElement).getAttribute('data-val') || '';
    if (clickedTag === 'All'){
      this.setState({
        tags: [clickedTag]
      });
    } else if (this.state.tags.includes(clickedTag)) {
      let neededItemIndexInState = this.state.tags.indexOf(clickedTag);
      this.setState({
        tags: [...this.state.tags.filter((_, i) => i !== neededItemIndexInState)]
      });
      if (this.state.tags.length === 1) {
        this.setState({
          tags: ['All']
        });
      }
    } else if (!this.state.tags.includes(clickedTag)) {
      this.setState({tags: [...this.state.tags, clickedTag].filter((el) => el !== 'All')})
    } 
  }
  getFilteredVideos() {
        return ([...workoutVideosData].filter(elem => [...this.state.tags].every(el => elem.categories?.includes(el))));
  }
  render() {
    const filteredVideos = this.getFilteredVideos();
    return (
      <Container className='workout-videos'>
        <div className='workout-videos__left-side'></div>
        <div className='workout-videos__right-side'>
          <div className='videos-filters'>
            {
            this.videoTags.map((elem: VideoTagItem) => {
              const classActive = (this.state.tags.includes(elem.value)) ? "active" : '';
              return (<span className={`video-filter ${classActive}`} key={elem.key} onClick={this.handleClick} data-val={elem.value}>
              <span data-val={elem.value}>{elem.value}</span>
            </span>)
            })}
          </div>
          <div className='videos-container'>
            { 
              filteredVideos.map((video) => {
              return (
                <WorkoutVideoComponent key={video.id} title={video.title} src={video.src} srcImg={video.srcImg} duration={video.duration}/>
              )
            }) }
          </div>
        </div >
      </Container>
    )
  }
}