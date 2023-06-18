import { FC } from "react";

import { HeaderNav } from "../../../features/headerNav";
import { Search } from "../../../features/search";
import { BurgerMenu, Logo } from "../../../shared/ui";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <BurgerMenu />
      <Search />
      <HeaderNav />
    </header>
  );
};
