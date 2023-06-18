import { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      type="button"
      className={`${className} ${styles[theme]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
