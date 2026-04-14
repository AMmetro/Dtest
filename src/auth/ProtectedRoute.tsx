import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "./helper";

export const ProtectedRoute = () => {
  const isAuth = isAuthenticated(); 
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
