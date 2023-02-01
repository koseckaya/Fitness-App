import { FC } from 'react';
import './Section.scss';

export type Props = {
    className?: string;
   
};

const Section: FC<Props> = ({ className}: Props) => (
    <div
        className={`section ${className}`}
    >
        <span>{className}</span>
    </div>
);

export default Section;
