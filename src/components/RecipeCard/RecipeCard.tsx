import { FC} from 'react';
import './RecipeCard.scss';

export type Props = {
    className?: string;
    label: string;
    imgUrl: string;
    calories: number;
    
};

const RecipeCard: FC<Props> = ({ label, imgUrl, calories }: Props) => (
 
    <div className='recipe-card'>
        <span  className='recipe-card__cal'>Calories: {Math.ceil(calories)} kcal</span>
        <img className='recipe-card__img' src={imgUrl} alt={label} />
        <div className='recipe-card__label'>{label}</div>
    </div>
        
   
);

export default RecipeCard;
