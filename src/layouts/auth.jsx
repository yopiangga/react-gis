import { Routes, Route } from "react-router-dom";
import routes from "src/routes";

export function AuthLayout() {
  return (
    <div className="relative min-h-screen w-full">
    <Routes>
      {routes.map(
        ({ layout, pages }) =>
          layout === "auth" &&
          pages.map(({ path, element }) => (
            <Route exact path={path} element={element} />
          ))
      )}
    </Routes>
  </div>
  );
}