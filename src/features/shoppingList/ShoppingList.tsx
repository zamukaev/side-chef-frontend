/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useRef } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { CloseIcon } from "shared/ui";

import { useOnClickOutside, useTypedSelector } from "shared/hooks";
import { toggleShoppingListModal } from "entities/modals";
import { useAppDispatch } from "app/store";
import { DropDownLists } from "features/dropDownList";

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
  const node = useRef(null);

  const { shoppingListModal } = useTypedSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  useOnClickOutside(node, () => {
    if (shoppingListModal) {
      dispatch(toggleShoppingListModal());
    }
  });
  const closeModalHandler = (): void => {
    dispatch(toggleShoppingListModal());
  };

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
          <h3 className={styles.headline}>Shopping list</h3>
          <CloseIcon size={40} onClick={closeModalHandler} className={styles.closeIcon} />
        </div>
        <DropDownLists />
        <DropDownLists />
        <div className={styles.bgImage}>
          <img src="./assets/shopingBgImage.png" alt="" />
        </div>
      </div>
    </>,
    document.body,
  );
};
