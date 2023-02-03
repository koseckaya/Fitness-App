
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import './Header.scss'


export type Props = {
    className?: string;
    testId?: string;
};

const Header: FC<Props> = () => (
    <div className="header" >
        <Container>
            <div className="header__container" >
                <Link to={`/`} className="logo">LOGO</Link>
                <nav className='nav'>
                    <Link to={`/workoutPrograms`} className="nav-item">Workout Programs</Link>
                    <Link to={`/workoutVideos`} className="nav-item">Workout Videos</Link>
                    <Link to={`/recipes`} className="nav-item">Recipes</Link>
                    <Link to={`/store`} className="nav-item">Store</Link>
                    <Link to={`/about`} className="nav-item">About</Link>
                </nav>
                <div className='header__signUp'>
                    <Link to={`/signup`}><Button content="Sign Up" type={Button.TYPES.DEFAULT} /></Link>
                    <Link to={`/login`}><Button content="Log In" type={Button.TYPES.PRIMARY} /></Link>
                </div>
            </div>
        </Container>
    </div>
);

export default Header;
