import { FC, useEffect, useRef, useState } from "react";

import { Checkbox, CloseIcon } from "shared/ui";

import { MdCheck as CheckIcon } from "react-icons/md";
import { GiCircle as UncheckIcon } from "react-icons/gi";

import styles from "./DropDownList.module.scss";

interface DropDownListProps {
  className?: string;
}

export const ANIMATION_DELAY = 200;

export const DropDownList: FC<DropDownListProps> = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [checkLists, setCheckLists] = useState([
    { text: "hello", id: 0, isChecked: false },
    { text: "hello2", id: 1, isChecked: false },
    { text: "hello3", id: 2, isChecked: false },
  ]);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const dropDownListOpenHandler = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpen((prev: boolean) => !prev);
    }, ANIMATION_DELAY);
  };

  const checkHandler = (value: boolean, id: number) => {
    setCheckLists((prev) => prev.map((item, index) => ((index === id) ? { ...item, isChecked: value } : item)));
  };
  const deleteTodoHandler = (id: number) => {
    setCheckLists((prev) => prev.filter((item: any) => item.id !== id));
  };

  useEffect(() => {
    if (!isOpen) {
      timerRef.current = setTimeout(() => {
        setIsOpening(false);
      }, ANIMATION_DELAY);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [isOpen]);

  return (
    <div
      className={styles.listLabel}
    >
      <h3 className={styles.headline}>
        Oreo Cookies & Cream No-Bake Cheesecake
        <span onClick={dropDownListOpenHandler} className={`${styles.arrow} ${isOpen ? styles.opened : ""}`}></span>
      </h3>
      <ul className={`${styles.list} ${isOpening ? styles.opened : ""} ${className}`}>
        {checkLists.map((checkList: any, index: number) => (
          <li className={`${styles.listItem} ${isOpen ? styles.opened : ""}`} key={checkList.id}>
            <Checkbox onChange={(value) => checkHandler(value, index)}>
              <CheckIcon className={`${styles.checkIcon} ${checkList.isChecked && styles.checked}`} color="#C5E4FA" size={26} />
              <UncheckIcon
                className={`${styles.uncheckIcon} ${checkList.isChecked !== true && styles.checked}`}
                color="#D5D5D5"
                size={26}
              />
              <span className={`${styles.text} ${checkList.isChecked && styles.checked}`}>{checkList.text}</span>
            </Checkbox>
            <CloseIcon size={26} onClick={() => deleteTodoHandler(checkList.id)} className={styles.closeIcon} color="#D5D5D5" />
          </li>
        ))}
      </ul>
    </div>
  );
};
