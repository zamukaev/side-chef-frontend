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
    const { slidesPerView, spaceBetween, pick } = props;

    return (
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides={false}
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
      </Swiper>
    );
  };

  return Slider;
};

export default withSlider;
