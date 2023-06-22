import { FC } from "react";

import { PickCardItem } from "widgets/pickCard";
import withSlider from "shared/ui/hok/withSlider";

import styles from "./PickCard.module.scss";

export type CardType = "vegetarian" | "trending";

interface PickCardProps {
  className?: string;
  cardType?: CardType;
  headline?: string;
  slidesPerView?: number;
  spaceBetween?: number
  pick?: any;
}

export const PickCard: FC<PickCardProps> = (props) => {
  const {
    className,
    cardType,
    headline,
    pick,
    slidesPerView,
    spaceBetween,
  } = props;

  const WithSliderComponent = withSlider(PickCardItem);

  return (
    <section className={styles.pickCards}>
      <h2 className={styles.title}>{headline}</h2>
      <WithSliderComponent
        className={className}
        cardType={cardType}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pick={pick}
      />
    </section>
  );
};
