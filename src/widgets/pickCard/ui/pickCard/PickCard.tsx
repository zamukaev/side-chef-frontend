import { FC, useMemo } from "react";

import { withSlider } from "shared/ui";
import { PickCardProps } from "shared/types";
import { PickCardItem } from "widgets/pickCard";

import styles from "./PickCard.module.scss";

export const PickCard: FC<PickCardProps> = (props) => {
    const { className, cardType, headline, picks, slidesPerView, spaceBetween } =
    props;

    const WithSliderComponent = useMemo(() => withSlider(PickCardItem), []);

    return (
        <section className={styles.pickCards}>
            <h2 className={styles.title}>{headline}</h2>
            <WithSliderComponent
                className={className}
                cardType={cardType}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                picks={picks}
            />
        </section>
    );
};
