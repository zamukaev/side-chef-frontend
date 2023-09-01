import { FC, useState } from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { IEditGradeProps } from "shared/types";
import styles from "./EditGrade.module.scss";

const grade = 3;
const countReviews = 25;

export const EditGrade: FC<IEditGradeProps> = ({ reviews }) => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarHover = (starIndex: number) => {
    setHoveredStars(starIndex + 1);
  };

  const handleStarClick = (starIndex: number) => {
    setSelectedStars(starIndex + 1);
  };

  const handleStarLeave = () => {
    setHoveredStars(0);
  };

  return (
    <div className={styles.grade}>
      <div>
        {new Array(5).fill("").map((_, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ display: "inline-block" }}
          >
            <AiFillStar
              size={20}
              color={
                (
                  hoveredStars > 0
                    ? index + 1 <= hoveredStars
                    : index + 1 <= selectedStars
                )
                  ? "#FFC700"
                  : "#D9D9D9"
              }
              onMouseEnter={() => handleStarHover(index)}
              onMouseLeave={handleStarLeave}
              cursor="pointer"
              onClick={() => handleStarClick(index)}
            />
          </motion.div>
        ))}
      </div>
      {reviews && (
        <motion.p
          className={styles.grade__countReviews}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {countReviews} Reviews
        </motion.p>
      )}
    </div>
  );
};
