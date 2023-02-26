

import { FC, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    let location = useLocation();
    let path = location.pathname
    const [menuActive, setMenuActive] = useState(false);
    const handleMenuActive = () => {
        menuActive ? setMenuActive(false) : setMenuActive(true);
        }
    const handleBurgerActive = (e: any) => {
        e.stopPropagation();
        menuActive ? setMenuActive(false) : setMenuActive(true);
    }
    let classBurger = `header__hamburger ${menuActive ? 'opened' : ''}`
  return (
    <div className="header" >
        <Container>
            <div className="header__container" onClick={handleMenuActive}>
                <Link to={`/`} className="logo"> <Logo className={`logo1 ${menuActive ? 'activated' : ''}`}/> </Link>
                <nav className={`nav ${menuActive ? 'activated' : ''}`}  id='header-nav'>
                    <Link to={`/programs`} className={`nav-item a ${path === '/programs' ? 'nav-active': ''}`}>Workout Programs</Link>
                    <Link to={`/videos`} className={`nav-item b ${path === '/videos' ? 'nav-active': ''}`}>Workout Videos</Link>
                    <Link to={`/recipes/alcohol-free`} className={`nav-item c ${path === '/recipes/alcohol-free' ? 'nav-active': ''}`}>Recipes</Link>
                    <Link to={`/calculator`} className={`nav-item d ${path === '/calculator' ? 'nav-active': ''}`}>Recipe Analyzer</Link>
                    <Link to={`/about`} className={`nav-item e ${path === '/about' ? 'nav-active': ''}`}>About</Link>
                </nav>
                {currentUser ? (
                  <DropdownMenu userName={currentUser}/>
                  ) : (
                    <div className={`header__signUp ${menuActive ? 'activated' : ''}`}>
                      <Link to={`/signup`}><Button content="Sign Up" type={Button.TYPES.DEFAULT} /></Link>
                      <Link to={`/login`}><Button content="Log In" type={Button.TYPES.PRIMARY} /></Link>
                    </div>
                  )
                }
                <button className={classBurger} aria-expanded={menuActive} onClick={handleBurgerActive} aria-label="Main Menu">
                  <CrossHamburgerIcon/>
                </button>
                <ThemeChange className={`toggle-container ${menuActive ? 'activated' : ''}`}/>
            </div>
        </Container>
    </div>
  )
};

export default Header;
