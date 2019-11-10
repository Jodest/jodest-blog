import * as React from 'react';

import './Button.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.SFC<Props> = ({
  type,
  disabled,
  onClick,
  className,
  children,
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={className ? `button ${className}` : 'button'}
  >
    {children}
  </button>
);

export default Button;
