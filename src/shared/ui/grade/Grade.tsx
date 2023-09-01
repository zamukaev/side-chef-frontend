import { AiFillStar } from "react-icons/ai";
import { FC } from "react";

import { IGradeProps } from "shared/types";

import styles from "./Grade.module.scss";

export const Grade: FC<IGradeProps> = ({ count, reviews = false }) => {
  const handleScrollToTarget = () => {
    window.scrollTo({
      top: 1200, // Замените эту координату на желаемую точку на странице
      behavior: "smooth", // Добавьте плавную прокрутку
    });
  };

  return (
    <div className={styles.grade}>
      <div>
        {new Array(5).fill("").map((_, index) => (
          <div style={{ display: "inline-block" }}>
            <AiFillStar
              size={20}
              color={index + 1 <= count ? "#FFC700" : "#D9D9D9"}
            />
          </div>
        ))}
      </div>
      {reviews && (
        <div
          className={styles.grade__countReviews}
          onClick={handleScrollToTarget}
        >
          215 Reviews
        </div>
      )}
    </div>
  );
};
