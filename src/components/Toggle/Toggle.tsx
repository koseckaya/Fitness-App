import { FC, ComponentProps } from 'react';
import './Toggle.scss';

export type Props = {
    className?: string;
    value: any;
    onChange: () => void;
};

const Toggle: FC<Props> = ({ value, onChange }: Props) => (
    <div className='toggle-container'>
 <label className={styles.switch} htmlFor="toggler">
    <input
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    />
    <span className={styles.slider} />
    <span className={styles.wave} />
        </label>
    </div>
);

export default Toggle;
