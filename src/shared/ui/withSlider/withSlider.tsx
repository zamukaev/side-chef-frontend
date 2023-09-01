import { ComponentType, FC, useMemo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { PickCardProps, SliderProps } from "shared/types";
import { setParams } from "./params";

import styles from "./withSlider.module.scss";
import "swiper/swiper.css";

export const withSlider = <P extends PickCardProps>(
    Component: ComponentType<P>,
): ComponentType<SliderProps & P> => {
    const Slider: FC<SliderProps & P> = (props) => {
        const { slidesPerView, spaceBetween, picks, cardType } = props;

        const swiperParams = useMemo(() => {
            return setParams(slidesPerView, spaceBetween, cardType);
        }, [slidesPerView, spaceBetween, picks, cardType]);

        return (
            <Swiper {...swiperParams} className={styles.slider}>
                {picks.map((pick: any) => (
                    <SwiperSlide key={pick.id}>
                        <Component pick={pick} {...props} />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    };

    return Slider;
};
