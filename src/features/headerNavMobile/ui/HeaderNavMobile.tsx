import { BiBook } from "react-icons/bi";

import styles from "./headerNavMobile.module.scss";

export const HeaderNavMobile = () => {
  const isAuthorized = true;

  return (
    <div className={styles.headerNavMobile}>
      <div className={styles.shopppingList}>
        <BiBook size={24} className={styles.iconIndent} />
      </div>
      {isAuthorized && (
        <img
          className={styles.avatar}
          alt="avatar"
          src="https://lh3.googleusercontent.com/ogw/AOLn63Hx2veKpGi0KANHQ5swGzIbzz3fGtNAnfYgPeJ5=s32-c-mo"
        />
      )}
    </div>
  );
};
