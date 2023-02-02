
import './ErrorComponent.scss';
import { Container } from '../Container';

export type Props = {
    className?: string;
};

export const ErrorComponent = () => {
 
    
    return (
        <Container>
            <div className='error-component' >
                <div className='error-title'>Something went wrong</div>
                <div className='error-message'>Let's try later</div>
            </div>
        </Container>
    )
};


