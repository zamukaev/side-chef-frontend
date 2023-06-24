import { ComponentType } from "react";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

import { PickCardProps, SliderProps } from "shared/types";

export const withSlider = <P extends PickCardProps>(
  Component: ComponentType<P>,
): ComponentType<SliderProps & P> => {
  const Slider = (props: SliderProps & P) => {
    const { slidesPerView, spaceBetween, picks, cardType } = props;

    return (
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={{
          1200: {
            slidesPerView: cardType === "vegetarian" ? 4 : 5,
          },
          640: {
            slidesPerView: cardType === "vegetarian" ? 2 : 3,
          },
          340: {
            slidesPerView: cardType === "vegetarian" ? 2 : 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
      >

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
