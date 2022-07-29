import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react';

import styles from './styles.module.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const primaryClasses = styles.primary;
const secondaryClasses = styles.secondary;

const VariantMap = {
  primary: primaryClasses,
  secondary: secondaryClasses
};

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, variant = 'primary', ...rest }: ButtonProps,
  ref
) => {
  const defaultClassName = styles.root;
  const className = [defaultClassName, VariantMap[variant]];

  return (
    <button className={className.join(' ')} ref={ref} {...rest}>
      {children}
    </button>
  );
};

export const Button = forwardRef(ButtonBase);
