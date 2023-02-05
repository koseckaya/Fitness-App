import { FC } from 'react';
import './ProgramCard.scss';
import { Link } from 'react-router-dom';

export type Props = {
    className?: string;
    title?: string;
    image?: string;
    url?: string;
    days?: number;
    time?: number[];
    type?: string[];
    equip?: string[];
};

const ProgramCard: FC<Props> = ({ title, image,  url, days, time, type, equip }: Props) => (
    <div className='program-card'>
        <Link to={ '/programs' + url}>
            <div className='program-card__inner'>
                <img src={image} alt={title} className='card__image' />
                <div className='card__content'>
                    {days ?  <span className='card__duration'>{days} days</span> : null }
                    {time ? <span className='card__minutes'>{time[0]}-{time[1]} min/day</span> : null }
                    {type ? <div className='card__type'>Type: { type?.join(', ') }</div> : null }
                    {equip ? <div className='card__type'>Equipment: { equip?.join(', ') }</div>  : null }
                </div>
            </div>
            <span className='program-card__title'>{title}</span>
        </Link>
    </div>
);

export default ProgramCard;
