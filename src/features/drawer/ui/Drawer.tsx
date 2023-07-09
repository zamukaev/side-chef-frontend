import { FC, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronRight, BiSun, BiMoon } from "react-icons/bi";

import { useTypedSelector } from "shared/hooks";

import { Theme } from "app/providers/ThemeProvider";
import { LogoDrawer } from "../../../shared/ui";
import { IDrawerProps } from "../model/drawer";

import styles from "./Drawer.module.scss";

const show = {
  opacity: 1,
  display: "block",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export const Drawer: FC<IDrawerProps> = ({ node }) => {
  const [themesMenuExpanded, setThemesMenuExpanded] = useState(false);
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const { burgerMenuModal } = useTypedSelector((state) => state.modals);

  const navItemIconClassName = themesMenuExpanded
    ? styles.nav_item__iconRotate
    : styles.nav_item__icon;

  const navMenuItemLightClassName =
    theme === Theme.LIGHT
      ? styles.nav_menuList__itemActive
      : styles.nav_menuList__item;

  const navMenuItemInactiveClassName =
    theme === Theme.DARK
      ? styles.nav_menuList__itemActive
      : styles.nav_menuList__item;

  const changeThemeMenuExpanded = () => {
    setThemesMenuExpanded((prevExpanded) => !prevExpanded);
  };

  const themeClickHandler = (theme: Theme) => {
    setTheme(theme);
  };

  return ReactDOM.createPortal(
    <>
      <motion.div
        animate={burgerMenuModal ? show : hide}
        className={styles.blurOpen}
      />
      <div
        className={burgerMenuModal ? styles.containerOpen : styles.container}
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
          <AnimatePresence>
            {themesMenuExpanded && (
              <motion.ul
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                style={{ position: "absolute" }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={navMenuItemLightClassName}
                  onClick={() => themeClickHandler(Theme.LIGHT)}
                >
                  <BiSun size={24} color="#FFB800" />
                  Light theme
                </div>
                <div
                  className={navMenuItemInactiveClassName}
                  onClick={() => themeClickHandler(Theme.DARK)}
                >
                  <BiMoon size={24} color="#0B2E89" />
                  Dark theme
                </div>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className={styles.footerImage}>
          <img alt="burgerMenuImage" src="./assets/burderMenuImage.png" />
        </div>
      </div>
    </>,
    document.body,
  );
};
