import { FC, ComponentProps } from 'react';
import './Footer.scss';

export type Props = {
    className?: string;
    containerProps?: ComponentProps<'div'>;
};

const Footer: FC<Props> = ({ className, containerProps }: Props) => (
    <div
        className={`footer ${className}`}
        {...containerProps}
    >
        <span>Footer</span>
    </div>
);

export default Footer;
