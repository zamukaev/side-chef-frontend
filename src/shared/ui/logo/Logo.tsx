import React, { FC } from "react";

import styles from "./Logo.module.scss";

export const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <img alt="logo" src="./logo.svg" />
      <div className={styles.text}>
        SIDE
        <b>CHEF</b>
      </div>
    </div>
  );
};
