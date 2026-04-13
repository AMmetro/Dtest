import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "./helper";

export const PublicRoute = () => {
const isAuth = isAuthenticated();

  return isAuth ? <Navigate to="/table" replace /> : <Outlet />;
};