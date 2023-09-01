import { FC, CSSProperties } from "react";

import { INutritionProps, StandartNutrition } from "shared/types";

import { IoMdLock } from "react-icons/io";

import styles from "./Nutrition.module.scss";

// заменить на интерфейсы и типы на response запроса
interface INutrition {
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
  fiber: number;
  potassium: number;
}

const percentage = (name: keyof INutrition, count: number) => {
  return (count / StandartNutrition[name]) * 100;
};

export const Nutrition: FC<INutritionProps> = ({ nutrition, block }) => {
  const percentageValue = percentage(nutrition.count, nutrition.count);
  const style: CSSProperties = {
    background: `linear-gradient(to top, rgb(190 218 217) ${percentage(
      nutrition.name,
      nutrition.count,
    )}%, rgb(245 245 245) ${percentage(nutrition.name, nutrition.count)}%)`,
  };

  const styleBlock: CSSProperties = {
    background: "#e3e3e3",
  };

  return (
    <div className={styles.nutrition} style={block ? styleBlock : style}>
      <span className={styles.count}>
        {block ? <IoMdLock color="#adadad" /> : nutrition.count}
      </span>
      <span className={styles.name}>{nutrition.name.toUpperCase()}</span>
    </div>
  );
};
