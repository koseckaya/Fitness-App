import { FC } from 'react';
import './Toggle.scss';

export type Props = {
    className?: string;
    value: any;
    onChange: () => void;
};

const Toggle: FC<Props> = ({ value, onChange }: Props) => (
    <div className='toggle-container'>
        <label className="switch" htmlFor="toggler">
            <input
            className='toggle-input'
            id="toggler"
            type="checkbox"
            onClick={onChange}
            checked={value}
            readOnly
            />
            <span className="toggle-slider" />
            <span className="toggle-wave" />
        </label>
    </div>
);

export default Toggle;
