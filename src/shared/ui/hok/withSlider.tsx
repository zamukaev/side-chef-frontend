import { ComponentType, ReactNode } from "react";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";

export type CardType = "vegetarian" | "trending";

interface PickCardProps {
  className?: string;
  cardType?: CardType;
  headline?: string;
  slidesPerView?: number;
  spaceBetween?: number
  pick?: any;
}

interface SliderProps extends PickCardProps {
  children?: ReactNode;
}

const withSlider = <P extends PickCardProps>(
  Component: ComponentType<P>,
): ComponentType<SliderProps & P> => {
  const Slider = (props: SliderProps & P) => {
    const { slidesPerView, spaceBetween, pick, cardType } = props;

    return (
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        // centeredSlides
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
        {pick?.map((item: any, i: any) => (
          <SwiperSlide key={item}>
            <Component {...props} />
          </SwiperSlide>
        ))}
      </Swiper >
    );
  };

  return Slider;
};

export default withSlider;
