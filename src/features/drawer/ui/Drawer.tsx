import { FC, useState } from "react";
import ReactDOM from "react-dom";
import { BiChevronRight, BiSun, BiMoon } from "react-icons/bi";

import { LogoDrawer } from "../../../shared/ui";

import styles from "./Drawer.module.scss";

interface IDrawerProps {
  isOpen: boolean;
  node: any;
}

// TODO:
// 1. Добавить типы в стейт 'theme'

export const Drawer: FC<IDrawerProps> = ({ isOpen, node }) => {
  const [themesMenuExpanded, setThemesMenuExpanded] = useState(false);
  const [theme, setTheme] = useState(true);

  const changeThemeMenuExpanded = () => {
    setThemesMenuExpanded(!themesMenuExpanded);
  };

  const themeClickHandler = () => {
    setTheme(!theme);
  };

  return ReactDOM.createPortal(
    <>
      <div className={isOpen ? styles.blurOpen : styles.blur} />
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
              className={
                themesMenuExpanded
                  ? styles.nav_item__iconRotate
                  : styles.nav_item__icon
              }
            />
          </div>
          <div
            className={
              themesMenuExpanded
                ? styles.nav_menuList__expanded
                : styles.nav_menuList
            }
          >
            <div
              className={
                theme
                  ? styles.nav_menuList__itemActive
                  : styles.nav_menuList__item
              }
              onClick={themeClickHandler}
            >
              <BiSun size={24} color="#FFB800" />
              Light theme
            </div>
            <div
              className={
                theme
                  ? styles.nav_menuList__item
                  : styles.nav_menuList__itemActive
              }
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
