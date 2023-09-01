import { FC } from "react";
import { Link } from "react-router-dom";

import { ILogoProps } from "shared/types";

import { BurgerMenu } from "../burgerMenu/BurgerMenu";

import styles from "./Logo.module.scss";

export const Logo: FC<ILogoProps> = ({ handleDrawerClick }) => {
  return (
    <Link to="/" className={styles.logo}>
      <BurgerMenu handleDrawerClick={handleDrawerClick} />
      <img alt="logo" src="./logo.svg" />
      <div className={styles.text}>
        SIDE
        <b>CHEF</b>
      </div>
    </Link>
  );
};
