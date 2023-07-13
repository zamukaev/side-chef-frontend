import { FC, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import { BiChevronRight, BiSun, BiMoon } from "react-icons/bi";
import { Theme } from "app/providers/ThemeProvider";
import { IDrawerProps } from "features/drawer/model/drawer";
import { LogoDrawer } from "shared/ui";

import { useOnClickOutside, useTypedSelector } from "shared/hooks";
import { toggleShoppingListModal } from "entities/modals";
import { useAppDispatch } from "app/store";

import styles from "./ShoppingList.module.scss";

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

export const ShoppingList = () => {
  const [themesMenuExpanded, setThemesMenuExpanded] = useState(false);
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const node = useRef(null);

  const { shoppingListModal } = useTypedSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  useOnClickOutside(node, () => {
    if (shoppingListModal) {
      dispatch(toggleShoppingListModal());
    }
  });

  return ReactDOM.createPortal(
    <>
      <motion.div
        animate={shoppingListModal ? show : hide}
        className={styles.blurOpen}
      />
      <div
        className={shoppingListModal ? styles.containerOpen : styles.container}
        ref={node}
      >
        <div className={styles.header}>
          <p>Shopping list</p>
        </div>
      </div>
    </>,
    document.body,
  );
};
