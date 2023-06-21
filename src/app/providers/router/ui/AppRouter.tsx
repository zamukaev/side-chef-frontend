import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfigPublic } from "shared/config/configRoute";
import { Header } from "widgets/header";

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        {Object.values(routeConfigPublic).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
