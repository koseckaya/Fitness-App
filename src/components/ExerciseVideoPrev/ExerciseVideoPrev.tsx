import { FC } from 'react';
import './ExerciseVideoPrev.scss';

export type Props = {
    title: string;
    src: string;
    srcImg: string;
    day: string;
    active: boolean;
    onVideoClick: (day: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const ExerciseVideoPrev: FC<Props> = ({title, src, srcImg, day, onVideoClick, active}: Props) => {
        return (
            <div className='exercise-video-prev'>
                <a href={ src }>
                    <img className='exercise-video-prev__img' src={srcImg} alt={title} />
                    
                    <div className={`video-prev ${active ? 'active' : ''}`} onClick={(e) => onVideoClick(day, e)}>
                    </div>
                    <div>{title}</div>
                </a>
            </div>
    )
}
   
export default ExerciseVideoPrev;
