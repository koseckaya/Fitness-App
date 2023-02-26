import { FC } from 'react';
import { Container } from '../../components/Container';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon , YouTubeIcon} from '../../components/Icons';


export type Props = {
    className?: string;
};

const Footer: FC<Props> = ({ className }: Props) => (
    <div className='footer'>
        <Container>
            <div className="footer__container" >
                <div className='copy'>© 2023 Body Tone</div>
                <nav className='nav'>
                    <Link to={`/privacy-policy`} className="nav-item">Privacy Policy</Link>
                </nav>
               <div className='social'>
                    <a href='https://www.facebook.com'><FacebookIcon /></a>
                    <a href='https://www.instagram.com/'><InstagramIcon /></a>
                    <a href='https://www.youtube.com/'><YouTubeIcon /></a>
                </div>
            </div>

        </Container>
    </div>
);

export default Footer;
