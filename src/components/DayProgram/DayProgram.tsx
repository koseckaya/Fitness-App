
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


    const isUserAuthorized = useMemo(() => {
        const isAuthorize = currentUser?.email ? true : false;
        return isAuthorize;
    }, [currentUser]);

    const [completedVideos, setCompletedVideos] = useState<string[]>([])
    const [completedDays, setCompletedDays] = useState<number[]>([])

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
        setCompletedDays(completedDaysFire);
        setCompletedVideos(initialVideos)
    }, [userData])

    
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
        if (!isUserAuthorized) return
        const currentProgram = '' + programId;
        const challenges = userData?.challenges;
        if(challenges && currentUser) {
            const completedDays =  challenges[currentProgram];
            let newCompletedDays = [...completedDays]
            if (!completedDays?.includes(day)) newCompletedDays.push(day)
            
            const newChallenges = {
                ...challenges, 
                [currentProgram]: newCompletedDays,
            }
            updateUserDocFromAuth(currentUser, { challenges: newChallenges }).then(() => {
                setCompletedDays([day]);
            });
        }
    }, [isUserAuthorized, userData, day, currentUser, programId])
    
    
    const handleDayUncheck = useCallback((e: React.MouseEvent<HTMLDivElement>) => { 
        if (!isUserAuthorized) return
        const challenges = userData?.challenges;
        const currentProgram = '' + programId;
        
         if(challenges && currentUser) {
            const completedDays =  challenges[currentProgram];
            let newCompletedDays = completedDays.filter(d => d !== day)
             
            const newChallenges = {
                ...challenges, 
                [currentProgram]: newCompletedDays,
             }
            updateUserDocFromAuth(currentUser, { challenges: newChallenges }).then(() => {
                setCompletedDays([]);
                setCompletedVideos([]);
            });
        }

    }, [isUserAuthorized, userData, day,currentUser, programId])
    
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
            <div onClick={completedDays?.includes(day) ? handleDayUncheck : dayChallengeComplAndAuthorize ? handleDayCheck: undefined }
                className={`button btn-complete 
                ${isCompletedDayVideos() ? 'active' : ''}
                ${(completedDays?.includes(day)) ? 'completed' : ''}`}>
                { (completedDays?.includes(day)) ? `Day ${day} Complete`: `Mark Day ${day} as Complete` }
                
            </div>
            {isCompletedDayVideos() && !isUserAuthorized  &&
                (<div className='day__message'>Log in or register a free account track your schedule progress</div>)}
            
        </div>
    )
}
    


export default DayProgram;
