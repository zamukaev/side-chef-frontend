import { FC } from "react";
import { Link } from "react-router-dom";

import { PickCardItemProps } from "shared/types";

import styles from "./pickCardItem.module.scss";

export const PickCardItem: FC<PickCardItemProps> = (props) => {
  const { className, cardType, pick } = props;

  return (
    <Link to="/recipe/1" className={`${styles[cardType]} ${className}`}>
      <div className={styles.cardImage}>
        <img src={pick.image} alt="" />
      </div>
      <h3 className={styles.cardTitle}>Onion Salad with Feta Cheese</h3>
      <div className={styles.ingredientsBlock}>
        <p className={styles.ingredients}>
          mozzarella pearls, baby spinach, extra-virgin olive oil, salt and 7
          more
        </p>
      </div>
      <div className={styles.filter}></div>
    </Link>
  );
};
