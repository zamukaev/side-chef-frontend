import { recipe } from "db/recipe";

import { Ingredient } from "shared/ui/ingredient/Ingredient";
import { Diet } from "shared/ui/diet/Diet";
import { DishType } from "shared/ui/dishType/DishType";
import { Nutrition } from "shared/ui/Nutrition/Nutrition";

import { Measures } from "features/measures";

import { useState } from "react";
import { measuresItems } from "features/measures/ui/Measures";

import styles from "./RecipeParameters.module.scss";

const nutritions = [
  {
    name: "calories",
    count: "709",
  },
  {
    name: "carbs",
    count: "69",
  },
  {
    name: "fat",
    count: "31",
  },
  {
    name: "protein",
    count: "37",
  },
  {
    name: "fiber",
    count: "3",
  },
  {
    name: "potassium",
    count: "192",
  },
];

const isAuth = false;

export const RecipeParameters = () => {
  const [selectedMeasure, setSelectedMeasure] = useState<measuresItems>(
    measuresItems.US,
  );

  return (
    <div className={styles.recipeParameters}>
      <div className={styles.recipeParameters__available}>
        <div className={styles.ingredients}>
          <div className={styles.ingredients__header}>
            <h1 className={styles.recipeParameters__title}>Ingredients</h1>
            <Measures
              selectedMeasure={selectedMeasure}
              setSelectedMeasure={setSelectedMeasure}
            />
          </div>
          {recipe.extendedIngredients.map(
            ({ original, originalName, id, measures }) => (
              <Ingredient
                original={original}
                originalName={originalName}
                selectedMeasure={selectedMeasure}
                metric={measures.metric}
                key={id}
              />
            ),
          )}
        </div>
        <div className={styles.additionally}>
          <div className={styles.diests}>
            <h1 className={styles.recipeParameters__title}>Diests</h1>
            <ul>
              {recipe.diets.map((diet) => (
                <Diet name={diet} key={diet} />
              ))}
            </ul>
          </div>
          <div className={styles.dishTypes}>
            <h1 className={styles.recipeParameters__title}>Dish types</h1>
            <div>
              {recipe.dishTypes.map((type) => (
                <DishType name={type} key={type} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.recipeParameters__closed}>
        <h1 className={styles.recipeParameters__title}>Nutrition</h1>
        <h2 className={styles.recipeParameters__subtitle}>
          {!isAuth && (
            <>
              <span>Sign up</span> and unlock full nutrition information
            </>
          )}
        </h2>
        <div className={styles.nutritions}>
          {nutritions.map((nutrition, index) => (
            <Nutrition nutrition={nutrition} block={index > 2} />
          ))}
        </div>
      </div>
    </div>
  );
};
