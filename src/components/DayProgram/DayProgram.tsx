
import { FC, useState, useCallback, useEffect, useContext, useMemo } from 'react';
import { ExerciseVideoPrev } from '../ExerciseVideoPrev';
import { UserContext } from '../utils/contexts';
import './DayProgram.scss';

export type Props = {
    className?: string;
    day: number;
    videos: any[];
};

const DayProgram: FC<Props> = ({ day, videos }: Props) => {
    const [completedVideos, setCompletedVideos] = useState<string[]>([])
    const [completedDay, setCompletedDay] = useState(false)

    const { currentUser } = useContext(UserContext);
    const isUserAuthorized = useMemo(() => {
        const isAuthorize = currentUser?.email ? true : false;
        return isAuthorize;
    }, [currentUser]);
    
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


    const handleDayCheck = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      
        //saveData to profile
        
        setCompletedDay(true)

    }, [setCompletedDay])

    const isCompletedDayVideos = () => {
        const isComplete = completedVideos.length === videos.length ? true : false;
        return isComplete
    }

    const dayChallengeComplAndAuthorize = isCompletedDayVideos() && isUserAuthorized 
    console.log(completedDay, isUserAuthorized, dayChallengeComplAndAuthorize);

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
            <div onClick={dayChallengeComplAndAuthorize ? handleDayCheck: undefined}
                className={`button btn-complete 
                ${isCompletedDayVideos() ? 'active' : ''}
                ${(completedDay && isUserAuthorized) ? 'completed' : ''}`}>
                { (completedDay && isUserAuthorized) ? `Day ${day} Complete`: `Mark Day ${day} as Complete` }
                
            </div>
            {isCompletedDayVideos() && !isUserAuthorized  &&
                (<div className='day__message'>Log in or register a free account track your schedule progress</div>)}
            
        </div>
    )
}
    


export default DayProgram;
