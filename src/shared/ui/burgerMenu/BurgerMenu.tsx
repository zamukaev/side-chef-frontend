import { FC } from "react";
import { BiMenu } from "react-icons/bi";

import styles from "./BurgerMenu.module.scss";

interface IBurgerMenuProps {
  handleDrawerClick: () => void;
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({ handleDrawerClick }) => {
    return (
        <div className={styles.burgerMenu} onClick={handleDrawerClick}>
            <BiMenu size={24} />
        </div>
    );
};
