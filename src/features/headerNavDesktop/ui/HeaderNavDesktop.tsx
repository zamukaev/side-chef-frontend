import { BiUser, BiHeart, BiSun } from "react-icons/bi";

import styles from "./HeaderNavDesktop.module.scss";

export const HeaderNavDesktop = () => {
  return (
    <div className={styles.headerNavDesktop}>
      <BiSun size={24} className={styles.iconIndent} cursor="pointer" />
      <BiHeart size={24} className={styles.iconIndent} cursor="pointer" />
      <BiUser size={24} cursor="pointer" />
    </div>
  );
};
