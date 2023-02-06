import { FC } from 'react';
import './ExerciseVideoPrev.scss';

export type Props = {
    title: string;
    src: string;
    srcImg: string;
};

const ExerciseVideoPrev: FC<Props> = ({title, src, srcImg}: Props) => {
        return (
            <div className='exercise-video-prev'>
                <a href={ src }>
                    <img className='exercise-video-prev__img' src={srcImg} alt={ title} />
                    <div>{title}</div>
                </a>
            </div>
    )
}
   
export default ExerciseVideoPrev;
