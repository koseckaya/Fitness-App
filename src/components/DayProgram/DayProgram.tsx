
import { FC, useState, useCallback } from 'react';
import { ExerciseVideoPrev } from '../ExerciseVideoPrev';
import './DayProgram.scss';

export type Props = {
    className?: string;
    day: number;
    videos: any[];
};

const DayProgram: FC<Props> = ({ day, videos }: Props) => {
    const [completedVideos, setCompletedVideos] = useState(['1-0'])

    
    const onVideoClick = useCallback((day: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault()
        if (completedVideos.includes(day)) {
            const filt = completedVideos.filter(d => d !== day);
            setCompletedVideos(filt)
        } else {
            const newComplVideos = [...completedVideos, day];
            setCompletedVideos(newComplVideos)
        }
    }, [setCompletedVideos, completedVideos])
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
                {
                    videos.map((video, index) => {
                        let dayIndex = `${day}-${index}`;
                    return <ExerciseVideoPrev title={video.title} onVideoClick={onVideoClick} active={completedVideos.includes(dayIndex)}
                        src={video.src} srcImg={video.srcImg} key={index} day={dayIndex} />
                })}
            </div>
            <div className='button'>Mark Day {day } As Complete</div>
    </div>
    )
}
    


export default DayProgram;
