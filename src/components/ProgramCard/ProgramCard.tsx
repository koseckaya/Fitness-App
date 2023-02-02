import { FC, ComponentProps } from 'react';
import './ProgramCard.scss';

export type Props = {
    className?: string;
    title: string;
    image?: string;
    tag?: any;
    url?: string;
};

const ProgramCard: FC<Props> = ({ className, title, image, tag, url }: Props) => (
    <div
        className={`program-card ${className}`}
    >
        <span>{title}</span>
        <span>{image}</span>
        <span>{tag?.text}</span>
        <span>{url}</span>
    </div>
);

export default ProgramCard;
