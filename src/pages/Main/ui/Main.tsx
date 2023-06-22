import { FC } from "react";
import { PickCard } from "widgets/pickCard/ui/pickCard/PickCard";

import styles from "./Main.module.scss";

interface MainProps {
  className?: string;
}

const Main: FC<MainProps> = (props) => {
  const { className } = props;

  return (
    <main className={styles.main}>
      <PickCard
        cardType="vegetarian"
        headline="Our Vegetarian Picks"
        slidesPerView={4}
        spaceBetween={10}
        pick={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      />
      <PickCard
        cardType="trending"
        headline="trending"
        spaceBetween={10}
        slidesPerView={5}
        pick={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      />
    </main>

  );
};

export default Main;
