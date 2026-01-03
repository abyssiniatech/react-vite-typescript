import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = true; // Replace with real auth logic

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
