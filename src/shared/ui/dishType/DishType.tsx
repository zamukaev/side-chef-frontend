import { FC } from "react";

import { IDishTypeProps } from "shared/types";

import styles from "./DishType.module.scss";

export const DishType: FC<IDishTypeProps> = ({ name }) => {
  return <button className={styles.dishType}>{name}</button>;
};
