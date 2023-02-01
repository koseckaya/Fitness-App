
import { FC, ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import './Header.scss'


export type Props = {
    className?: string;
    testId?: string;git 
};

const Header: FC<Props> = () => (
    <div className= "header container" >
         <Link to={`/`} className="logo">LOGO</Link>
          <nav className='nav'>
            <Link to={`/workoutPrograms`} className="nav-item">Workout Programs</Link>
            <Link to={`/workoutVideos`} className="nav-item">Workout Videos</Link>
            <Link to={`/recipes`} className="nav-item">Recipes</Link>
            <Link to={`/store`} className="nav-item">Store</Link>
            <Link to={`/about`} className="nav-item">About</Link>
        </nav>
        <div className='header__signUp'>
            <Button content="Sign Up" type={Button.TYPES.DEFAULT} />
            <Button content="Log In" type={Button.TYPES.PRIMARY} />
        </div>
    </div>
);

export default Header;
