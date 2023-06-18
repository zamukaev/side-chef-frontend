import { BiUser, BiHeart, BiSun } from "react-icons/bi";

import styles from "./HeaderNav.module.scss";

export const HeaderNav = () => {
  return (
    <div className={styles.headerNav}>
      <BiSun size={24} className={styles.iconIndent} />
      <BiHeart size={24} className={styles.iconIndent} />
      <BiUser size={24} />
    </div>
  );
};
