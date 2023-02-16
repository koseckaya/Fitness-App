// @ts-nocheck
import React, { Component } from 'react'
import { Container } from '../../components/Container'
import './WorkoutVideos.scss';
import { workoutVideosData } from '../../data';
import { WorkoutVideoComponent}  from '../../components/WorkoutVideoComponent';
import { MultiRangeSlider } from '../../components/MultiRangeSlider';
interface VideoTagItem {
  value: string;
  key: number;
}
interface IState {
  tags: string[];
  search: string;
}
export class WorkoutVideos extends Component {
  state: IState = {
    tags: ['All'],
    search: '',
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
    const input = document.querySelector(".finder__input") as HTMLInputElement;
    input.value = '';
    let clickedTag = (e.target as HTMLElement).getAttribute('data-val') || '';
    if (clickedTag === 'All'){
      this.setState({
        tags: [clickedTag],
        search: '',
      });
    } else if (this.state.tags.includes(clickedTag)) {
      let neededItemIndexInState = this.state.tags.indexOf(clickedTag);
      this.setState({
        tags: [...this.state.tags.filter((_, i) => i !== neededItemIndexInState)],
        search: '',
      });
      if (this.state.tags.length === 1) {
        this.setState({
          tags: ['All'],
          search: '',
        });
      }
    } else if (!this.state.tags.includes(clickedTag)) {
      this.setState({tags: [...this.state.tags, clickedTag].filter((el) => el !== 'All'), search: '',})
    } 
  }
  searchSubmit = (e: React.FormEvent<HTMLElement>) => {
    const input = document.querySelector(".finder__input") as HTMLInputElement;
    const finder = document.querySelector(".finder") as HTMLElement;
    const valueFromInput = input.value;
    e.preventDefault();
    finder.classList.add("processing");
    finder.classList.remove("active");
    input.disabled = true;
    setTimeout(() => {
      finder.classList.remove("processing");
      input.disabled = false;
      if (input.value.length > 0) {
        finder.classList.add("active");
      }
    }, 1000);
    this.setState({tags:['All'],search: valueFromInput})
  }
  focusInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const finder = document.querySelector(".finder") as HTMLElement;
    finder.classList.add("active");
  }
  getFilteredVideos() {
        if (this.state.search === '') {
          return ([...workoutVideosData].filter(elem => [...this.state.tags].every(el => elem.categories?.includes(el))));
        } else {
          return ([...workoutVideosData].filter(elem => elem.title.toLowerCase().includes(this.state.search.toLowerCase())))
        }
  }
  render() {
    const filteredVideos = this.getFilteredVideos();
    return (
      <Container className='workout-videos'>
        <div className='workout-videos__left-side'>
          <div className="search-container">
            <form autoComplete="off" onSubmit={this.searchSubmit}>
              <div className="finder">
                <div className="finder__outer">
                  <div className="finder__inner">
                    <div className="finder__icon"></div>
                    <input className="finder__input" type="text" name="q" placeholder="Type and press Enter" onInput={this.focusInput} onBlur={() => {
                      const input = document.querySelector(".finder__input") as HTMLInputElement;
                      const finder = document.querySelector(".finder") as HTMLElement;
                      if (input.value.length === 0) {
                        finder.classList.remove("active");
                      }
                    }
                    }/>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <MultiRangeSlider
      min={0}
      max={10}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
        </div>
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
          <div className='filtered-videos-count'>{`Showing ${
            filteredVideos.length
          } Workout Videos matching applied filters`}</div>
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