import React, { useMemo, useRef } from "react";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./CuisinesSlider.module.scss";

import "swiper/swiper.css";
import "swiper/css/navigation";

export const CuisinesSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const navigationPrevClasses = useMemo(
    () => [styles.navigationButton, styles.prevButton],
    [],
  );
  const navigationNextClasses = useMemo(
    () => [styles.navigationButton, styles.nextButton],
    [],
  );

  return (
    <div className={styles.slider}>
      <Swiper
        spaceBetween={20}
        slidesPerView={7}
        modules={[Navigation]}
        loop
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="./assets/image.png" />
        </SwiperSlide>
      </Swiper>
      <button
        ref={navigationPrevRef}
        className={navigationPrevClasses.join(" ")}
      >
        Prev
      </button>
      <button
        ref={navigationNextRef}
        className={navigationNextClasses.join(" ")}
      >
        Next
      </button>
    </div>
  );
};
