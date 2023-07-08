import { FC, useState } from "react";
import ReactDOM from "react-dom";
import { BiChevronRight, BiSun, BiMoon } from "react-icons/bi";

import { Theme } from "app/providers/ThemeProvider";
import { LogoDrawer } from "../../../shared/ui";
import { IDrawerProps } from "../model/drawer";

import styles from "./Drawer.module.scss";

export const Drawer: FC<IDrawerProps> = ({ isOpen, node }) => {
  const [themesMenuExpanded, setThemesMenuExpanded] = useState(false);
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const navItemIconClassName = themesMenuExpanded
    ? styles.nav_item__iconRotate
    : styles.nav_item__icon;

  const navMenuListClassName = themesMenuExpanded
    ? styles.nav_menuList__expanded
    : styles.nav_menuList;

  const navMenuItemActiveClassName = theme
    ? styles.nav_menuList__itemActive
    : styles.nav_menuList__item;

  const navMenuItemInactiveClassName = theme
    ? styles.nav_menuList__item
    : styles.nav_menuList__itemActive;

  const changeThemeMenuExpanded = () => {
    setThemesMenuExpanded((prevExpanded) => !prevExpanded);
  };

  const themeClickHandler = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    );
  };

  return ReactDOM.createPortal(
    <>
      {isOpen && <div className={styles.blurOpen} />}
      <div
        className={isOpen ? styles.containerOpen : styles.container}
        ref={node}
      >
        <div className={styles.header}>
          <LogoDrawer />
        </div>
        <div className={styles.nav}>
          <div className={styles.nav_item}>
            <p>Profile</p>
            <BiChevronRight size={30} color="#C5E4FA" />
          </div>
          <div className={styles.nav_item}>
            <p>Shopping list</p>
            <BiChevronRight size={30} color="#C5E4FA" />
          </div>
          <div className={styles.nav_item}>
            <p>Favorites</p>
            <BiChevronRight size={30} color="#C5E4FA" />
          </div>
          <div className={styles.nav_item} onClick={changeThemeMenuExpanded}>
            <p>Themes</p>
            <BiChevronRight
              size={30}
              color="#C5E4FA"
              className={navItemIconClassName}
            />
          </div>
          <div className={navMenuListClassName}>
            <div
              className={navMenuItemActiveClassName}
              onClick={themeClickHandler}
            >
              <BiSun size={24} color="#FFB800" />
              Light theme
            </div>
            <div
              className={navMenuItemInactiveClassName}
              onClick={themeClickHandler}
            >
              <BiMoon size={24} color="#0B2E89" />
              Dark theme
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
};
