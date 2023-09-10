import { FC, useState } from "react";
import { MdRadioButtonUnchecked as UncheckIcon, MdCheck as CheckIcon } from "react-icons/md";

import { Checkbox, CloseIcon } from "shared/ui";
import styles from "./DropDownList.module.scss";

interface DropDownListProps {
    className?: string;
}

export const DropDownList: FC<DropDownListProps> = (props) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const [checkLists, setCheckLists] = useState([
        { text: "hello", id: 0, isChecked: false },
        { text: "hello2", id: 1, isChecked: false },
        { text: "hello3", id: 2, isChecked: false },
    ]);

    const dropDownListOpenHandler = () => {
        setIsOpen((prev: boolean) => !prev);
    };

    const checkHandler = (value: boolean, id: number) => {
        setCheckLists((prev) => prev.map((item, index) => ((index === id) ? { ...item, isChecked: value } : item)));
    };
    const deleteTodoHandler = (id: number) => {
        setCheckLists((prev) => prev.filter((item: any) => item.id !== id));
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
                {checkLists.map((checkList: any, index: number) => (
                    <li className={styles.listItem} key={checkList.id}>
                        <Checkbox onChange={(value) => checkHandler(value, index)}>
                            {checkList.isChecked
                                ? <CheckIcon color="#C5E4FA" size={26} />
                                :
                                <UncheckIcon color="#D5D5D5" size={26} />}
                            <span className={`${styles.text} ${checkList.isChecked && styles.checked}`}>{checkList.text}</span>
                        </Checkbox>
                        <CloseIcon onClick={() => deleteTodoHandler(checkList.id)} className={styles.closeIcon} color="#D5D5D5" />
                    </li>
                ))}
            </ul>
        </section>
    );
};
