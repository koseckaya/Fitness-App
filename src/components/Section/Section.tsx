import { FC } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import './Section.scss';

export type Props = {
    title: string;
    btnText: string;
    children: React.ReactNode;
    onClick: () => void;
};

const Section: FC<Props> = ({title, btnText, children, onClick}: Props) => (
    <Container>
    <div className='section'>
        <div className='section__header'>
            <div className='section__title'>{title}</div>
            <Button content={btnText} type={Button.TYPES.PRIMARY} onClick={ onClick } />
        </div>
        <div className='section__content'>
            {children}
        </div>
        </div>
    </Container>
);

export default Section;
