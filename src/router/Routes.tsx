import { Routes as OriginalRoutes, Route } from "react-router-dom";
import { Home } from "../components";
import { Layout } from "../components/Layout";

export const Routes = () => {
  return (
    <OriginalRoutes>
      <Route element={<Layout />}>
        <Route path="/" index element={<Home />} />
      </Route>
    </OriginalRoutes>
  );
};
