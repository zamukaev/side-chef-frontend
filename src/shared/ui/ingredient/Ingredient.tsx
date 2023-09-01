import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IIngredientProps } from "shared/types";

import { measuresItems } from "features/measures/ui/Measures";

import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

import styles from "./Ingredient.module.scss";

export const Ingredient: FC<IIngredientProps> = ({
  original,
  originalName,
  selectedMeasure,
  metric,
}) => {
  const [active, setActive] = useState(false);

  const toggleIcon = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={styles.ingredient}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleIcon}
      >
        {active ? (
          <BiMinusCircle size={23} color="#3a9691" cursor="pointer" />
        ) : (
          <BiPlusCircle size={23} color="#3a9691" cursor="pointer" />
        )}
      </motion.div>

      <motion.div className={styles.ingredient__name}>
        {selectedMeasure === measuresItems.US ? (
          <motion.p
            key="original"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {original}
          </motion.p>
        ) : (
          <motion.p
            key="metric"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {`${metric.amount} ${metric.unitLong} ${originalName}`}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};
