import { FC } from 'react';
import { Container } from '../../components/Container';
import './Footer.scss';
import { Link } from 'react-router-dom';
import {  GitHub } from '../../components/Icons';


export type Props = {
    className?: string;
};

const Footer: FC<Props> = ({ className }: Props) => (
    <div className='footer'>
        <Container>
            <div className="footer__container" >
                <div className='copy'>© 2023</div>
                <div className='social'>
                    <a href='https://rs.school/' className='social__rs'>
                        <img src="https://d3373sevsv1jc.cloudfront.net/uploads/communities_production/page_part/50206/C4353AB4DA2E410DAA6AEF509661B82C.png" alt="rs-school" />
                    </a>
                    <a href='https://github.com/koseckaya' className='social__pers1'><GitHub /></a>
                    <a href='https://github.com/sepulator' className='social__pers2'><GitHub /></a>
                    <a href='https://github.com/siverianserpent' className='social__pers3'><GitHub /></a>
                </div>
            </div>

        </Container>
    </div>
);

export default Footer;
