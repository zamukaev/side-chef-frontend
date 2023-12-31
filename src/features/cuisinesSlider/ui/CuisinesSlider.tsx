import { useMemo, useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/Sl";

import { CuisinesSliderCard } from "shared/ui";

import { data } from "./cuisinesSliderData";

import styles from "./CuisinesSlider.module.scss";
import "swiper/swiper.css";
import "swiper/css/navigation";

export const CuisinesSlider = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const navigationPrevClasses = useMemo(
    () => [styles.navigationButton, styles.prevButton].join(" "),
    [],
  );
  const navigationNextClasses = useMemo(
    () => [styles.navigationButton, styles.nextButton].join(" "),
    [],
  );

  return (
    <div className={styles.slider}>
      <button ref={navigationPrevRef} className={navigationPrevClasses}>
        <SlArrowLeft />
      </button>
      <Swiper
        spaceBetween={20}
        modules={[Navigation]}
        slidesPerView={7}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          1000: {
            slidesPerView: 7,
          },
          860: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          650: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          0: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        {data.map((cuisine) => (
          <SwiperSlide key={cuisine.id}>
            <CuisinesSliderCard cuisine={cuisine} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button ref={navigationNextRef} className={navigationNextClasses}>
        <SlArrowRight />
      </button>
    </div>
  );
};
