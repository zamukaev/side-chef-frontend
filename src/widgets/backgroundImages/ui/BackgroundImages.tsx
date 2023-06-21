import styles from "./BackgroundImages.module.scss";

export const BackgroundImages = () => {
  return (
    <div className={styles.backgroundImages}>
      <img
        className={styles.backgroundLeftFruit}
        alt="backgroundLeftFruit"
        src="./backgroundLeftFruit.png"
      />
      <img
        className={styles.backgroundRightFruit}
        alt="backgroundRightFruit"
        src="./backgroundRightFruit.png"
      />
    </div>
  );
};
