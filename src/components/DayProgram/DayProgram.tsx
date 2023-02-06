//@ts-nocheck
import { FC } from 'react';
import { ExerciseVideoPrev } from '../ExerciseVideoPrev';
import './DayProgram.scss';

export type Props = {
    className?: string;
    day: number;
    videos: any[];
};

const DayProgram: FC<Props> = ({ day, videos }: Props) => {
    return (
        <div className='day-program'>
            <div className='day__title'>
                <span className='day__number'>Day { day }</span>
                <div className='day__desc'>
                    <span className='day__count'> {videos.length} Workouts | </span>
                    <span className='day__duration'> {videos.reduce((acc, video) => acc += video.duration ,0)} Mins</span>
                </div>
            </div>
        
            <div className='program__videos'>
                {videos.map(video => {
                   return <ExerciseVideoPrev title={video.title } src={video.src } srcImg={video.srcImg }/>
                })}
            </div>
    </div>
    )
}
    


export default DayProgram;
