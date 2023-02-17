
import { FC, useState, useCallback, useContext, useMemo } from 'react';
import { useUserData } from '../../routes/Profile';
import { ExerciseVideoPrev } from '../ExerciseVideoPrev';
import { UserContext } from '../utils/contexts';
import { getUserDocFromAuth, updateUserDocFromAuth } from '../utils/firebase/firebase';
import './DayProgram.scss';
import { useEffect } from 'react';



export type Props = {
    className?: string;
    day: number;
    videos: any[];
    programId: number;
    isCompletedDay: boolean;
    onDayCheck: (day: number) => void;
    onDayUncheck: (day: number) => void;
};

const DayProgram: FC<Props> = ({ day, videos, programId, isCompletedDay, onDayCheck, onDayUncheck }: Props) => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const userData = useUserData(currentUser);

    const isUserAuthorized = useMemo(() => {
        const isAuthorize = currentUser?.email ? true : false;
        return isAuthorize;
    }, [currentUser]);

    const [completedVideos, setCompletedVideos] = useState<string[]>([])

    useEffect(() => {
        const startedChallenges = userData?.challenges ? Object.keys(userData?.challenges) : []
        let completedDaysFire: number[] = [];
        if (startedChallenges.includes(`${programId}`) && userData?.challenges) {
            completedDaysFire = userData?.challenges['' + programId]; 
        }        

        let initialVideos: string[] = [];
        if (completedDaysFire?.includes(day)) {
            initialVideos = videos.map((video, index) => `${day}-${index}`);
        }
        setCompletedVideos(initialVideos)
    }, [userData])

    useEffect(() => {
        if (!isCompletedDay) {
            setCompletedVideos([]);
        }
    }, [isCompletedDay])

    
    const onVideoClick = useCallback((dayString: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        if (completedVideos.includes(dayString)) {
            const filt = completedVideos.filter(d => d !== dayString);
            setCompletedVideos(filt)
        } else {
            const newComplVideos = [...completedVideos, dayString];
            setCompletedVideos(newComplVideos)
        }
    }, [setCompletedVideos, completedVideos])

    const handleDayCheck = useCallback(async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onDayCheck(day);
    }, [onDayCheck, day]);

    const handleDayUncheck = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        setCompletedVideos([]);
        onDayUncheck(day)
    }, [onDayUncheck, day]);
    
    
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
                    return <ExerciseVideoPrev title={video.title} onVideoClick={onVideoClick} active={completedVideos.includes(dayIndex)}
                        src={video.src} srcImg={video.srcImg} key={index} day={dayIndex} />
                })}
            </div>
            <div onClick={isCompletedDay ? handleDayUncheck : dayChallengeComplAndAuthorize ? handleDayCheck: undefined }
                className={`button btn-complete 
                ${isCompletedDayVideos() ? 'active' : ''}
                ${(isCompletedDay) ? 'completed' : ''}`}>
                { (isCompletedDay) ? `Day ${day} Complete`: `Mark Day ${day} as Complete` }
                
            </div>
            {isCompletedDayVideos() && !isUserAuthorized  &&
                (<div className='day__message'>Log in or register a free account track your schedule progress</div>)}
            
        </div>
    )
}
    


export default DayProgram;
