import { FC } from "react";

import { BurgerMenu } from "../burgerMenu/BurgerMenu";

import styles from "./Logo.module.scss";

interface ILogoProps {
  handleDrawerClick: () => void;
}

export const Logo: FC<ILogoProps> = ({ handleDrawerClick }) => {
  return (
    <div className={styles.logo}>
      <BurgerMenu handleDrawerClick={handleDrawerClick} />
      <img alt="logo" src="./logo.svg" />
      <div className={styles.text}>
        SIDE
        <b>CHEF</b>
      </div>
    </div>
  );
};
