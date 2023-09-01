import { VscHeartFilled } from "react-icons/vsc";

import styles from "./AddToFavorites.module.scss";

export const AddToFavorites = () => {
  return (
    <div className={styles.addToFavorites}>
      <VscHeartFilled size={26} className={styles.heart} />
      <p className={styles.addToFavorites__text}>Add to favorites</p>
    </div>
  );
};
