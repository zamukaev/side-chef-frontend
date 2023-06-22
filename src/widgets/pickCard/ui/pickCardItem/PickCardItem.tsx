import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./pickCardItem.module.scss";

export type CardItemType = "vegetarian" | "trending";

interface PickCardItemProps {
  className?: string;
  cardType?: CardItemType;
  pick?: any;
}

export const PickCardItem: FC<PickCardItemProps> = (props) => {
  const { className, cardType, pick } = props;

  return (
    <Link to="/recipe/1" className={`${styles[cardType]} ${className}`}>
      <div className={styles.cardImage}>
        <img src="./assets/1.png" alt="" />
      </div>
      <h3 className={styles.cardTitle}>
        Onion Salad with Feta Cheese
      </h3>
      <div className={styles.ingredientsBlock}>
        <p className={styles.ingredients}>
          mozzarella pearls, baby spinach, extra-virgin olive oil, salt and 7 more
        </p>
      </div>
    </Link>
  );
};
