//@ts-nocheck
import { FC, useState, useCallback, useContext, useMemo } from 'react';
import { useUserData } from '../../routes/Profile';
import { ExerciseVideoPrev } from '../ExerciseVideoPrev';
import { UserContext } from '../utils/contexts';
import { updateUserDocFromAuth } from '../utils/firebase/firebase';
import './DayProgram.scss';
import { useEffect } from 'react';


export type Props = {
    className?: string;
    day: number;
    videos: any[];
    programId: number;
};

const DayProgram: FC<Props> = ({ day, videos, programId }: Props) => {
    const { currentUser } = useContext(UserContext);
    const userData = useUserData(currentUser);
    const startedChallenges = userData?.challenges ? Object.keys(userData?.challenges) : []


    const isUserAuthorized = useMemo(() => {
        const isAuthorize = currentUser?.email ? true : false;
        return isAuthorize;
    }, [currentUser]);
    

    let completedDaysFire = [];
    if (startedChallenges.includes(`${programId}`)) {
        completedDaysFire = userData?.challenges['' + programId]; 
    }

    const [completedVideos, setCompletedVideos] = useState<string[]>([])
    const [completedDay, setCompletedDay] = useState(false)

    useEffect(() => {
        let initialVideos = [];
        if (completedDaysFire.includes(day)) {
            initialVideos = videos.map((video, index) => `${day}-${index}`);
        }
        setCompletedVideos(initialVideos)
    }, [completedDaysFire])

    

   
    const onVideoClick = useCallback((dayString: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(completedVideos)
        if (completedVideos.includes(dayString)) {
            const filt = completedVideos.filter(d => d !== dayString);
            setCompletedVideos(filt)
        } else {
            const newComplVideos = [...completedVideos, dayString];
            setCompletedVideos(newComplVideos)
        }
    }, [setCompletedVideos, completedVideos])


    const handleDayCheck = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      
        if (!isUserAuthorized) return
        const currentProgram = '' + programId;
        const challenges = userData?.challenges;
        const completedDays = challenges[currentProgram];
        let newCompletedDays = [...completedDays]
        if (!completedDays.includes(day)) newCompletedDays.push(day)
        
        const newChallenges = {
            ...challenges, 
            [currentProgram]: newCompletedDays
        }
    
        updateUserDocFromAuth(currentUser, { challenges: newChallenges }) 

     
        
        setCompletedDay(true)

    }, [setCompletedDay, isUserAuthorized, userData, day])


    const isCompletedDayVideos = () => {
        const isComplete = completedVideos.length === videos.length ? true : false;
        return isComplete
    }

    const dayChallengeComplAndAuthorize = isCompletedDayVideos() && isUserAuthorized 

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
                        console.log(completedVideos, dayIndex);
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
