import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import { CheckIcon } from 'assets/Icons';

import styles from './styles.module.css';

type InputProps = {
  variant?: 'default' | 'search';
  name: string;
  label?: React.ReactNode;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

const VariantMap = {
  default: styles.default,
  search: styles.search
};

const InputBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ variant = 'default', name, label, error = null, ...rest }, ref) => {
  const defaultClassName = styles.root;
  const className = [defaultClassName, VariantMap[variant]];

  const inputValue = document.querySelector('input').value;

  return (
    <div className="flex flex-col w-full gap-1.25 relative">
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}

      <input
        name={name}
        id={name}
        ref={ref}
        {...rest}
        className={className.join(' ')}
      />

      {!error && inputValue && (
        <CheckIcon className="absolute transform translate-y-1/2 bottom-6 right-5" />
      )}

      {!!error && (
        <span className="mt-1 text-xs text-red-base">{error.message}</span>
      )}
    </div>
  );
};

export const Input = forwardRef(InputBase);
