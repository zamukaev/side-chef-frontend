import React, { FC } from "react";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
    className?: string;
    children?: React.ReactNode
    formId: string;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
    const { className, children, formId } = props;

    return (
        <div className={styles.checkbox}>
            <label className={styles.label} htmlFor={formId}>
                {children}
            </label>
            <input className={styles.input} type="checkbox" />
        </div>
    );
};
