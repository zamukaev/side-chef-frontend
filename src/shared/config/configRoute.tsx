import { RouteProps } from "react-router-dom";

import { MainPage } from "pages/Main";

export enum AppRoutes {
    MAIN = "main",
}

export const RoutePathPublic: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
};

export const RoutePathPrivate: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
};

export const routeConfigPublic: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePathPublic[AppRoutes.MAIN],
        element: <MainPage />,
    },
};

export const routeConfigPrivate: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePathPrivate[AppRoutes.MAIN],
        element: <MainPage />,
    },
};
