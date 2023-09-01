import { Grade } from "shared/ui";
import { AddToFavorites } from "features/addToFavorites";

import { recipe } from "db/recipe";

import styles from "./RecipeInfo.module.scss";

export const RecipeInfo = () => {
  return (
    <section className={styles.recipeInfo}>
      <div className={styles.recipeInfo__article}>
        <h1 className={styles.recipeInfo__article_title}>{recipe.title}</h1>
        <Grade count={3} reviews />
        <div className={styles.shortInfo}>
          <div className={styles.shortInfo__item}>
            <p className={styles.shortInfo__item_count}>
              {recipe.extendedIngredients.length}
            </p>
            <p className={styles.shortInfo__item_name}>Ingredients</p>
          </div>
          <div className={styles.shortInfo__item}>
            <p className={styles.shortInfo__item_count}>
              {recipe.readyInMinutes}
            </p>
            <p className={styles.shortInfo__item_name}>Minutes</p>
          </div>
          <div className={styles.shortInfo__item}>
            <p className={styles.shortInfo__item_count}>{recipe.servings}</p>
            <p className={styles.shortInfo__item_name}>Servings</p>
          </div>
        </div>
        <p className={styles.recipeInfo__article_desc}>{recipe.instructions}</p>
        <AddToFavorites />
      </div>
      <div>
        <img
          alt="recipeImage"
          src={recipe.image}
          className={styles.recipeInfo__image}
        />
      </div>
    </section>
  );
};
