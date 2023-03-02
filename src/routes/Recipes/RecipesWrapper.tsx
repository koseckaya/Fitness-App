import { FC } from 'react';
import { Recipes } from './Recipes';
import { useNavigate } from 'react-router-dom';

export type Props = {
    className?: string;

};

const RecipesWrapper: FC<Props> = ({ className }: Props) => {

    const navigate = useNavigate();
    return (
        <Recipes navigate={navigate}/>
    )
}
 


export default RecipesWrapper;
