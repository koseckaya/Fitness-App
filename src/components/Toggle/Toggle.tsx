//@ts-nocheck
import { FC } from 'react';
import styles from './Toggle.scss';

export type Props = {
    className?: string;
    value: any;
    onChange: () => void;
};

const Toggle: FC<Props> = ({ value, onChange }: Props) => (
    <div className='toggle-container'>
 <label className="switch" htmlFor="toggler">
    <input
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    />
    <span className="slider" />
    <span className="wave" />
        </label>
    </div>
);

export default Toggle;
