import React from 'react'
import './Logo.scss'

export type Props = {
  className?: string;
};
export const Logo = ({className}: Props) => {
    return (
      <div className={className}></div>
    )
}
