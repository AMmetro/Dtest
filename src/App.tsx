import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { PublicRoute } from "./auth/PublicRoute";
import Login from "./pages/Login/Login";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ProductsPage from "./pages/Products/ProductsPage";


export const ROUTES = {
  ROOT: "/",
  TABLE: "/table",
  LOGIN: "/login",
};

const protectedRoutes = [
  { path: ROUTES.ROOT, element: <ProductsPage /> },
  { path: ROUTES.TABLE, element: <ProductsPage /> },
];

const publicRoutes = [
  { path: ROUTES.LOGIN, element: <Login /> },
];

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
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
    </>
  );
};



export default App;