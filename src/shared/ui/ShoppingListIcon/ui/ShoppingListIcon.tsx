import React from "react";
import { BiBook } from "react-icons/bi";

import { useTypedSelector } from "shared/hooks";
import { useAppDispatch } from "app/store";
import { toggleShoppingListModal } from "entities/modals";

import styles from "./ShoppingListIcon.module.scss";

export const ShoppingListIcon = () => {
  const { burgerMenuModal } = useTypedSelector((state) => state.modals);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleShoppingListModal());
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.shopppingList}>
        <BiBook size={24} className={styles.icon} />
      </div>
    </div>
  );
};
