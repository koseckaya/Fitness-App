import { FC} from 'react';
import './PrivacyPolicy.scss';

export type Props = {
    className?: string;

};

const PrivacyPolicy: FC<Props> = ({ className }: Props) => (
    <div
        className={`privacy-policy ${className}`}
    >
        <span>PrivacyPolicy</span>
    </div>
);

export default PrivacyPolicy;
