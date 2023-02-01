import { FC, ComponentProps } from 'react';
import './Section.scss';

export type Props = {
    className?: string;
    containerProps?: ComponentProps<'div'>;
};

const Section: FC<Props> = ({ className, containerProps }: Props) => (
    <div
        className={`section ${className}`}
        {...containerProps}
    >
        <span>{className}</span>
    </div>
);

export default Section;
