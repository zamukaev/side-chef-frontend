import { Autoplay, Navigation, Pagination } from "swiper";

import { CardType } from "shared/types";

export const setParams = (
  slidesPerView: number,
  spaceBetween: number,
  cardType: CardType,
) => {
  const autoplayDelay = cardType === "vegetarian" ? 2500 : 3500;

  const breakpoints = {
    1400: {
      spaceBetween: cardType === "trending" ? 20 : spaceBetween,
    },
    1300: {
      spaceBetween: cardType === "trending" ? 10 : spaceBetween,
    },
    750: {
      slidesPerView: cardType === "vegetarian" ? 4 : 5,
      spaceBetween: 0,
    },
    481: {
      slidesPerView: cardType === "vegetarian" ? 3 : 4,
      spaceBetween: 0,
    },
    0: {
      slidesPerView: cardType === "vegetarian" ? 2 : 3,
      spaceBetween: 0,
    },
  };

  return {
    slidesPerView,
    spaceBetween,
    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
      delay: autoplayDelay,
      disableOnInteraction: false,
    },
    breakpoints,
  };
};
