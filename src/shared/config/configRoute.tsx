import { RouteProps } from "react-router-dom";

import { MainPage } from "pages/Main";
import { RecipePage } from "pages/recipe";

export enum AppRoutes {
  MAIN = "main",
  RECIPE = "recipe",
}

export const RoutePathPublic: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.RECIPE]: "/recipe/:id",
};

export const RoutePathPrivate: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.RECIPE]: "/recipe/:id",
};

export const routeConfigPublic: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePathPublic[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.RECIPE]: {
    path: RoutePathPublic[AppRoutes.RECIPE],
    element: <RecipePage />,
  },
};

export const routeConfigPrivate: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePathPrivate[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.RECIPE]: {
    path: RoutePathPublic[AppRoutes.RECIPE],
    element: <RecipePage />,
  },
};
