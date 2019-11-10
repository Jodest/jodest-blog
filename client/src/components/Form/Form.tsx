import React, { ReactNode } from 'react';

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  // type?: string;
  children: ReactNode;
}


const Form: React.SFC<Props> = ({
  children,
  className,
  ...props
}) => (
  <form
    className={className}
    {...props}
  >
    {children}
  </form>
);

export default Form;