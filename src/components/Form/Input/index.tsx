import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './styles.module.css';

type InputProps = {
  variant?: 'default' | 'search';
  name: string;
  label?: React.ReactNode;
  error?: FieldError;
  icon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const VariantMap = {
  default: styles.default,
  search: styles.search
};

const InputBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ variant = 'default', name, label, error, icon, ...rest }, ref) => {
  const defaultClassName = styles.root;
  const className = [defaultClassName, VariantMap[variant]];

  return (
    <>
      <div className="flex flex-col w-full gap-1.25">
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
      </div>
    </>
  );
};

export const Input = forwardRef(InputBase);
