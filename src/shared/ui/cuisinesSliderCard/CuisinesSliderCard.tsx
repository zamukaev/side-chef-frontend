import { FC } from "react";

import { ICuisine } from "features/cuisinesSlider";

import styles from "./CuisinesSliderCard.module.scss";

interface ICuisinesSliderCardProps {
  cuisine: ICuisine;
}

export const CuisinesSliderCard: FC<ICuisinesSliderCardProps> = ({
    cuisine,
}) => {
    return (
        <div className={styles.cuisine}>
            <img alt="" src={cuisine.src} className={styles.image} />
            <p className={styles.name}>{cuisine.name}</p>
        </div>
    );
};
