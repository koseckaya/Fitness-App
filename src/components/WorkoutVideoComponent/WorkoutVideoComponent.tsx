import React from 'react'
import './WorkoutVideoComponent.scss';
import { FC } from 'react';
import { Video } from '../../data';

export const WorkoutVideoComponent: FC<Video> = ({title, src, srcImg, duration}) => {
        return (
            <div className='workout-video'>
                <a href={ src }>
                    <img className='workout-video__img' src={ srcImg } alt={ title } />
                    <div className='workout-video__title'>{title}</div>
                    <div className='workout-video__duration'>{ duration } MIN</div>
                </a>
            </div>
    )
}
   

