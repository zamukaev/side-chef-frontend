import { AddReview } from "features/addReview";
import { Review } from "shared/ui";

import styles from "./RecipeReviews.module.scss";

export const RecipeReviews = () => {
  return (
    <div className={styles.recipeReviews}>
      <h1 className={styles.title}>Reviews (215)</h1>
      <AddReview />
      <div>
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};
