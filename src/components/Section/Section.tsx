import { FC } from 'react';
import { Button } from '../Button';
import './Section.scss';

export type Props = {
    className?: string;
    title: string;
    btnText: string;
    children: React.ReactNode;
    onClick: () => void;
};

const Section: FC<Props> = ({ className, title, btnText, children, onClick}: Props) => (
    <div
        className={`section ${className}`}
    >
        <div className='section__title'>{title}</div>
        { children }
        <Button content={btnText} type={Button.TYPES.PRIMARY} onClick={ onClick } />
    </div>
);

export default Section;
