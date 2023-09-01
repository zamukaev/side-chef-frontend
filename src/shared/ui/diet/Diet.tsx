import { FC } from "react";

import { IDietProps } from "shared/types";

import styles from "./Diet.module.scss";

export const Diet: FC<IDietProps> = ({ name }) => {
  return <li className={styles.diet}>{name}</li>;
};
