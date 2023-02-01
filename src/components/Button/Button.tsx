import { FC, ComponentProps } from 'react';
import './Button.scss'

export type Props = {
    className?: string;
    testId?: string;
    type?: BUTTON_TYPES;
    content: string;
    containerProps?: ComponentProps<'div'>;
};

export enum BUTTON_TYPES {
    DEFAULT = 'default',
    PRIMARY = 'primary',
}

const typeClassNames = {
    [BUTTON_TYPES.DEFAULT]: '',
    [BUTTON_TYPES.PRIMARY]: 'button-primary',
};

export interface IButtonComponent<T> extends FC<T> {
    TYPES: typeof BUTTON_TYPES;
}

const Button = ({ content, className='', type = BUTTON_TYPES.PRIMARY }: Props) => (
    <div
        className={`button ${className} ${typeClassNames[type]}`}
    >
        {content}
    </div>
);
Button.TYPES = BUTTON_TYPES;

export default Button as IButtonComponent<Props>;
