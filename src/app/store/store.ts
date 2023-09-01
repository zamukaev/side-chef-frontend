import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { recipeApi } from "pages/recipe/api/recipeApi";

import { modalSlice } from "entities/modals";

import { rootReducer } from "./rootReducer";

export const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
    [modalSlice.name]: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
