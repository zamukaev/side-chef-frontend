import React, { ChangeEvent, FC, ReactNode } from "react";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
    className?: string;
    children?: ReactNode;
    onChange?: (velue: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { className, children, onChange } = props;

  const onCheckHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target!.checked;
    if (onChange) {
      onChange(eventValue);
    }
  };
  return (
    <div className={styles.checkbox}>
      <label className={styles.label}>
        {children}
        <input onChange={onCheckHandler} className={styles.input} type="checkbox" />
      </label>
    </div>
  );
};
