import { FC } from 'react';
import './ProgramCard.scss';

export type Props = {
    className?: string;
    title?: string;
    image?: string;
    url?: string;
    duration?: string;
    time?: string;
    type?: string[];
    equipment?: string[];
};

const ProgramCard: FC<Props> = ({ title, image,  url, duration, time, type, equipment }: Props) => (
    <div className='program-card'>
        <a href={url}>
            <div className='program-card__inner'>
                <img src={image} alt={title} className='card__image' />
                <div className='card__content'>
                    {duration ?  <span className='card__duration'>{duration}</span> : null }
                    {time ?  <span className='card__minutes'>{time}</span> : null }
                    {type ? <div className='card__type'>Type: { type?.join(', ') }</div> : null }
                    {equipment ? <div className='card__type'>Equipment: { equipment?.join(', ') }</div>  : null }
                </div>
            </div>
            <span className='program-card__title'>{title}</span>
        </a>
    </div>
);

export default ProgramCard;
