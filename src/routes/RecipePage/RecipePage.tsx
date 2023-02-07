import { FC } from 'react';
import './RecipePage.scss';

export type Props = {
    className?: string;

};

const RecipePage: FC<Props> = ({ className }: Props) => (
    <div
        className={`recipe-page ${className}`}
    >
        <span>recipe-page</span>
    </div>
);

export default RecipePage;
