
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { UserContext } from '../../components/utils/contexts';
import './Header.scss'


export type Props = {
    className?: string;
    testId?: string;
};

const Header: FC<Props> = () => {
  const { currentUser } = useContext(UserContext);
  const email = currentUser?.email;

  return (
    <div className="header" >
        <Container>
            <div className="header__container" >
                <nav className='nav'>
                    <Link to={`/programs`} className="nav-item">Workout Programs</Link>
                    <Link to={`/videos`} className="nav-item">Workout Videos</Link>
                    <Link to={`/recipes`} className="nav-item">Recipes</Link>
                    <Link to={`/store`} className="nav-item">Store</Link>
                    <Link to={`/about`} className="nav-item">About</Link>
                </nav>
                <Link to={`/`} className="logo"> <Logo /> </Link>
                {currentUser ? (
                  <Button content={`${email}`} type={Button.TYPES.DEFAULT} />
                ) : (
                  <div className='header__signUp'>
                    <Link to={`/signup`}><Button content="Sign Up" type={Button.TYPES.DEFAULT} /></Link>
                    <Link to={`/login`}><Button content="Log In" type={Button.TYPES.PRIMARY} /></Link>
                  </div>
                )
              }
            </div>
        </Container>
    </div>
  )
};

export default Header;
