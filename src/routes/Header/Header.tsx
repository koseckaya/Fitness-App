

import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { UserContext } from '../../components/utils/contexts';
import { DropdownMenu } from '../../components/DropdownMenu';
import './Header.scss'
import { CrossHamburgerIcon } from '../../components/Icons';
import { ThemeChange } from '../../components/ThemeChange';

export type Props = {
    className?: string;
    testId?: string;
};

const Header: FC<Props> = () => {
    const { currentUser } = useContext(UserContext);

  return (
    <div className="header" >
        <Container>
            <div className="header__container" onClick={(e) => {
              const headerHamburger = document.querySelector('.header__hamburger') as HTMLButtonElement;
              if (headerHamburger.classList.contains('opened')) {
                const headerHamburger = document.querySelector('.header__hamburger') as HTMLButtonElement;
                const headerNav = document.getElementById('header-nav') as HTMLElement;
                const logoElement = document.querySelector('.logo1') as HTMLElement;
                const headerSingUp = document.querySelector('.header__signUp') as HTMLDivElement;
                headerHamburger.classList.toggle('opened');
                headerHamburger.setAttribute('aria-expanded', `${headerHamburger.classList.contains('opened')}`)
                headerNav.classList.toggle('activated');
                logoElement.classList.toggle('activated');
                headerSingUp.classList.toggle('activated');
              }
            }}>
                <Link to={`/`} className="logo"> <Logo /> </Link>
                <nav className='nav' id='header-nav'>
                    <Link to={`/programs`} className="nav-item a">Workout Programs</Link>
                    <Link to={`/videos`} className="nav-item b">Workout Videos</Link>
                    <Link to={`/recipes/alcohol-free`} className="nav-item c">Recipes</Link>
                    <Link to={`/calculator`} className="nav-item d">Recipe Analyzer</Link>
                    <Link to={`/about`} className="nav-item e">About</Link>
                </nav>
                {currentUser ? (
                  <DropdownMenu userName={currentUser}/>
                  ) : (
                    <div className='header__signUp'>
                      <Link to={`/signup`}><Button content="Sign Up" type={Button.TYPES.DEFAULT} /></Link>
                      <Link to={`/login`}><Button content="Log In" type={Button.TYPES.PRIMARY} /></Link>
                    </div>
                  )
                }
                <button className='header__hamburger' onClick={ (e) => {
                  e.stopPropagation();
                  const headerHamburger = document.querySelector('.header__hamburger') as HTMLButtonElement;
                  const headerNav = document.getElementById('header-nav') as HTMLElement;
                  headerHamburger.classList.toggle('opened');
                  headerHamburger.setAttribute('aria-expanded', `${headerHamburger.classList.contains('opened')}`)
                  headerNav.classList.toggle('activated');
                  const logoElement = document.querySelector('.logo1') as HTMLElement;
                  logoElement.classList.toggle('activated');
                  const headerSingUp = document.querySelector('.header__signUp') as HTMLDivElement;
                  headerSingUp.classList.toggle('activated');
                }} aria-label="Main Menu">
                  <CrossHamburgerIcon/>
                </button>
                <ThemeChange />
            </div>
        </Container>
    </div>
  )
};

export default Header;
