import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

// Setting a protected route in case the user wants to access a route that is only valid if the user is
// logged in
export default function ProtectedRoute() {
  const auth = useAuth();

  // Render child routes if authenticated, otherwise redirect to login
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
