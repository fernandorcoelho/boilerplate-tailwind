import React, { useState } from 'react';

import { DeleteIcon, EditIcon, CheckIcon } from 'assets/Icons';
import { toggleIcon } from 'utils/toggleIcon';

import styles from './styles.module.css';

type ButtonProps = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'disable'
    | 'contact'
    | 'cancel'
    | 'update'
    | 'underline'
    | 'underlineWhite'
    | 'save';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const VariantMap = {
  primary: styles.primary,
  secondary: styles.secondary,
  disable: styles.disable,
  contact: styles.contact,
  cancel: styles.cancel,
  update: styles.update,
  underline: styles.underline,
  underlineWhite: styles.underlineWhite,
  save: styles.save
};

const ButtonBase: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ children, variant = 'primary', ...rest }: ButtonProps, ref) => {
  const defaultClassName = styles.root;
  const className = [defaultClassName, VariantMap[variant]];

  const [toggledIcon, setToggledIcon] = useState(false);

  return (
    <button
      className={className.join(' ')}
      ref={ref}
      {...rest}
      onClick={() => toggleIcon(setToggledIcon)}
    >
      <span>{children}</span>
      {!!toggledIcon && variant === 'save' && <CheckIcon />}
    </button>
  );
};

export const Button = React.forwardRef(ButtonBase);
