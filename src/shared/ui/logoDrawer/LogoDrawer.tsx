import styles from "./LogoDrawer.module.scss";

export const LogoDrawer = () => {
  return (
    <div className={styles.logo}>
      <img alt="logo" src="./logo.svg" />
      <div className={styles.text}>
        SIDE
        <b>CHEF</b>
      </div>
    </div>
  );
};
