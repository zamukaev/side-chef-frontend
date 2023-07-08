import { ShoppingList } from "features/shoppingList/ShoppingList";
import { Suspense, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfigPublic } from "shared/config/configRoute";
import useOnClickOutside from "shared/hooks/onClickOutside";
import { ShoppingListIcon } from "shared/ui/ShoppingListIcon";
import { Header } from "widgets/header";

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <ShoppingListIcon />
      <ShoppingList />
      <Routes>
        {Object.values(routeConfigPublic).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
