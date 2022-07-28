import React, { forwardRef, ForwardRefRenderFunction } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  loadingSize?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, variant = 'primary', loading, loadingSize, ...rest }: ButtonProps,
  ref
) => {
  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  );
};

export const Button = forwardRef(ButtonBase);
