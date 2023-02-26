

import React, { Component } from "react";
import { Container } from "../../components/Container";
import "./WorkoutVideos.scss";
import { workoutVideosData, Video } from "../../data";
import { WorkoutVideoComponent } from "../../components/WorkoutVideoComponent";
import { MultiRangeSlider } from "../../components/MultiRangeSlider";

interface VideoTagItem {
    value: string;
    key: number;
}
interface IState {
  tags: string[];
  search: string;
  duration: number[];
  reset: number;
  randomVideo: Video | null;
}
export class WorkoutVideos extends Component {
  constructor(props: IState) {
    super(props)
    this.state.randomVideo = this.randomizeVideo()
  }
    state: IState = {
        tags: ["All"],
        search: "",
        duration: [5, 25],
        reset: new Date().getTime(),
        randomVideo: null,
    };

    videoTags: VideoTagItem[] = [
        {
            value: "All",
            key: 1,
        },
        {
            value: "Low Intensity",
            key: 2,
        },
        {
            value: "No Jumping",
            key: 3,
        },
        {
            value: "No Burpees",
            key: 4,
        },
        {
            value: "No Planks",
            key: 5,
        },
        {
            value: "Standing",
            key: 6,
        },
    ];

    handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const input = document.querySelector(
            ".finder__input"
        ) as HTMLInputElement;
        input.value = "";
        let clickedTag =
            (e.target as HTMLElement).getAttribute("data-val") || "";

        if (clickedTag === "All") {
            this.setState({ tags: [clickedTag] });
        } else if (this.state.tags.includes(clickedTag)) {
            let neededItemIndexInState = this.state.tags.indexOf(clickedTag);
            this.setState({
                tags: [
                    ...this.state.tags.filter(
                        (_, i) => i !== neededItemIndexInState
                    ),
                ],
            });
            if (this.state.tags.length === 1) {
                this.setState({ tags: ["All"] });
            }
        } else if (!this.state.tags.includes(clickedTag)) {
            this.setState({
                tags: [...this.state.tags, clickedTag].filter(
                    (el) => el !== "All"
                ),
            });
        }
    };

    inputChange = (e: React.FocusEvent<HTMLInputElement>) => {
        const input = e.target;
        this.setState({ search: input.value });
    };
    getFilteredVideos() {
        let filteredArray = [...workoutVideosData];
        if (this.state.search === "") {
            filteredArray = filteredArray.filter((elem) =>
                [...this.state.tags].every((el) =>
                    elem.categories?.includes(el)
                )
            );
        } else {
          filteredArray = filteredArray.filter((elem) => elem.title?.toLowerCase().includes(this.state.search.toLowerCase())
            );
        }
        const durationFilter = filteredArray.filter(
            (elem) =>
                elem.duration >= this.state.duration[0] &&
                elem.duration <= this.state.duration[1]
        );
        return durationFilter;
    }

    handleCrossChange = (e: React.MouseEvent) => {
        const input = e.target as HTMLInputElement;
        input.value = "";

        this.setState({
            tags: ["All"],
            search: "",
            duration: [5, 25],
            reset: new Date().getTime(),
        });

        input.focus();
  };
  
  randomizeVideo = () => {
    let min = 0; let max = workoutVideosData.length-1
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    let video = [...workoutVideosData][rand]
    return video
  }
  handleRandomVideo = () => {
      this.setState({ randomVideo: this.randomizeVideo() })
  }
 
  

    render() {
  const filteredVideos = this.getFilteredVideos();
      const randomVideo = this.state.randomVideo;

        return (
            <Container className="workout-videos">
                <div className="workout-videos__left-side">
                    <div className="search-container">
                        <form className="finder-form" autoComplete="off" >
                            <div className="finder__icon"></div>
                            <input
                                className="finder__input"
                                type="text"
                                name="q"
                                placeholder="Type title of Video"
                                onChange={this.inputChange}
                            />
                            <div
                                className="finder__cross"
                                onClick={this.handleCrossChange}
                            ></div>
                        </form>
                    </div>
                        <div className="slider-minutes">WORKOUT DURATION</div>
                        <MultiRangeSlider
                            key={this.state.reset}
                            min={5}
                            max={25}
                            onChange={({ min, max }) =>
                                this.setState({
                                    ...this.state,
                                    duration: [min, max],
                                })
                            }/>
                        <div className="random-video">
                        <div className="random-video__title">Try out this Random Workout Video:</div>
                        {randomVideo && (
                                <WorkoutVideoComponent
                                            key={randomVideo.id}
                                            title={randomVideo.title}
                                            src={randomVideo.src}
                                            srcImg={randomVideo.srcImg}
                                            duration={randomVideo.duration}
                        /> ) }
                        
                        <div className="button" onClick={this.handleRandomVideo }>Randomize Again</div>
                        </div>
                </div>
                <div className="workout-videos__right-side">
                    <div className="videos-filters">
                        {this.videoTags.map((elem: VideoTagItem) => {
                            const classActive = this.state.tags.includes(
                                elem.value
                            )
                                ? "active"
                                : "";
                            return (
                                <span
                                    className={`video-filter ${classActive}`}
                                    key={elem.key}
                                    onClick={this.handleClick}
                                    data-val={elem.value}
                                >
                                    {elem.value}
                                </span>
                            );
                        })}
                    </div>
                    <div className="filtered-videos-count">{`Showing ${filteredVideos.length} Workout Videos matching applied filters`}</div>
                    <div className="videos-container">
                        {filteredVideos.map((video) => {
                            return (
                                <WorkoutVideoComponent
                                    key={video.id}
                                    title={video.title}
                                    src={video.src}
                                    srcImg={video.srcImg}
                                    duration={video.duration}
                                />
                            );
                        })}
                    </div>
                </div>
            </Container>
        );
    }
}
