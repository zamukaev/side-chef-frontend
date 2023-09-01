import { FC, useState } from "react";

import { Checkbox } from "features/checkbox";

import CheckIcom from "shared/assets/icons/checked.svg";
import UnCheckIcom from "shared/assets/icons/unchecked.svg";
import styles from "./DropDownList.module.scss";

interface DropDownListProps {
    className?: string;
}

export const DropDownList: FC<DropDownListProps> = (props) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const dropDownListOpenHandler = () => {
        setIsOpen((prev: boolean) => !prev);
    };

    return (
        <section className={styles.dropDownList}>
            <div
                onClick={dropDownListOpenHandler}
                className={styles.listLabel}
            >
                <h3 className={styles.headline}>
                    Oreo Cookies & Cream No-Bake Cheesecake
                    <span className={`${styles.arrow} ${isOpen ? styles.opened : ""}`}></span>
                </h3>

            </div>
            <ul className={`${styles.list} ${isOpen ? styles.opened : ""} ${className}`}>
                <li className={styles.listItem}>
                    <Checkbox formId="check">
                        {true ? <CheckIcom /> : <UnCheckIcom />}
                        {/* hello */}
                    </Checkbox>
                </li>
            </ul>

        </section>
    );
};
