import { CuisinesSlider } from "features/cuisinesSlider";

import styles from "./Cuisines.module.scss";

export const Cuisines = () => {
  return (
    <div className={styles.cuisines}>
      <h2 className={styles.subtitle}>PERSONALIZE YOUR EXPERIENCE</h2>
      <h1 className={styles.title}>What are your favorite cuisines?</h1>
      <CuisinesSlider />
    </div>
  );
};
