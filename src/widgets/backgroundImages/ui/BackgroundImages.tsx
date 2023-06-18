import styles from "./BackgroundImages.module.scss";

export const BackgroundImages = () => {
  return (
    <div className={styles.backgroundImages}>
      <img alt="backgroundLeftFruit" src="./backgroundLeftFruit.png" />
      <img alt="backgroundRightFruit" src="./backgroundRightFruit.png" />
    </div>
  );
};
