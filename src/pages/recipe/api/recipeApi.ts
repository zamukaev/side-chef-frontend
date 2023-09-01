import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SpoonacularResponse } from "entities/recipe/model";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://side-chef-api.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getRecipeById: builder.query<SpoonacularResponse, string>({
      query: (id) => `recipe/${id}`,
    }),
  }),
});

export const { useGetRecipeByIdQuery } = recipeApi;
