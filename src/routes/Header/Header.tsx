import { FC, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { UserContext } from "../../components/utils/contexts";
import { DropdownMenu } from "../../components/DropdownMenu";
import { ThemeChange } from "../../components/ThemeChange";
import "./Header.scss";

export type Props = {
    className?: string;
    testId?: string;
};

const Header: FC<Props> = () => {
    const { currentUser } = useContext(UserContext);
    const [activeLink, setActiveLink] = useState()
    let location = useLocation();
    let path = location.pathname

    return (
        <div className="header">
            <Container>
                <div className="header__container">
                    <nav className="nav">
                        <Link to={`/programs`} className={`nav-item ${path === '/programs' ? 'nav-active': ''}`}>
                            Workout Programs
                        </Link>
                        <Link to={`/videos`} className={`nav-item ${path === '/videos' ? 'nav-active': ''}`}>
                            Workout Videos
                        </Link>
                        <Link to={`/recipes/alcohol-free`} className={`nav-item ${path === '/recipes/alcohol-free' ? 'nav-active': ''}`}>
                            Recipes
                        </Link>
                        <Link to={`/calculator`} className={`nav-item ${path === '/calculator' ? 'nav-active': ''}`}>
                            Recipe Analyzer
                        </Link>
                        <Link to={`/about`} className={`nav-item ${path === '/about' ? 'nav-active': ''}`}>
                            About
                        </Link>
                    </nav>
                    <Link to={`/`} className="logo">
                        {" "}
                        <Logo />{" "}
                    </Link>
                    {currentUser ? (
                        <DropdownMenu userName={currentUser} />
                    ) : (
                        <div className="header__signUp">
                            <Link to={`/signup`}>
                                <Button
                                    content="Sign Up"
                                    type={Button.TYPES.DEFAULT}
                                />
                            </Link>
                            <Link to={`/login`}>
                                <Button
                                    content="Log In"
                                    type={Button.TYPES.PRIMARY}
                                />
                            </Link>
                        </div>
                    )}

                    <ThemeChange />
                </div>
            </Container>
        </div>
    );
};

export default Header;
