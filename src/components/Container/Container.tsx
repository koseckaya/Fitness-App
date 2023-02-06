import { FC } from 'react';
import './Container.scss'

export type Props = {
  className?: string;
  children: React.ReactNode;
};

const Container: FC<Props> = ({ className='', children}: Props) => (
  <div
    className={`container ${className}`}>
      { children }
  </div>
);

export default Container;
