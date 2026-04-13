import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { PublicRoute } from "./auth/PublicRoute";
import TablePage from "./pages/Table/TablePage";
import Login from "./pages/Login/Login";
import NotFoundPage from "./pages/NotFound/NotFoundPage";


export const ROUTES = {
  ROOT: "/",
  TABLE: "/table",
  LOGIN: "/login",
};

const protectedRoutes = [
  { path: ROUTES.ROOT, element: <TablePage /> },
  { path: ROUTES.TABLE, element: <TablePage /> },
];

const publicRoutes = [
  { path: ROUTES.LOGIN, element: <Login /> },
];

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        {protectedRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      <Route element={<PublicRoute />}>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};



export default App;