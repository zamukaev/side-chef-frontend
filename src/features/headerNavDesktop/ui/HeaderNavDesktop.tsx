import { BiUser, BiHeart, BiSun } from "react-icons/bi";

import styles from "./HeaderNavDesktop.module.scss";

export const HeaderNavDesktop = () => {
  return (
    <div className={styles.headerNavDesktop}>
      <BiSun size={24} className={styles.iconIndent} />
      <BiHeart size={24} className={styles.iconIndent} />
      <BiUser size={24} />
    </div>
  );
};
