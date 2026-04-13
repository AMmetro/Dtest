import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "./helper";

export const ProtectedRoute = () => {
  const isAuth = isAuthenticated(); 

  console.log("isAuth");
  console.log(isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
