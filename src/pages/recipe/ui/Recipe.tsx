import { useEffect } from "react";

import { RecipeInfo } from "widgets/recipeInfo";
import { RecipeParameters } from "widgets/recipeParameters";
import { RecipeReviews } from "widgets/recipeReviews";

import { useGetRecipeByIdQuery } from "pages/recipe/api/recipeApi";

import styles from "./Recipe.module.scss";

const Recipe = () => {
  // const { data, isLoading, isError } = useGetRecipeByIdQuery("643809");

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error!</div>;
  // }

  return (
    <main className={styles.recipe}>
      <RecipeInfo />
      <RecipeParameters />
      <RecipeReviews />
    </main>
  );
};

export default Recipe;
